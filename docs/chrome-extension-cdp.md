# Inspecting Chrome and Extension APIs with CDP

This note describes how to inspect this homepage in Chrome and how to reach
Chrome extension APIs when needed. It is written for the local dwm/X11 setup,
where Chrome may be opened on a different tag and ordinary screen capture can
miss the actual browser window.

## Short Version

Use Chrome DevTools Protocol (CDP) for reliable automation:

1. Start the Vite dev server.
2. Start Chrome with `--remote-debugging-port`.
3. Query `http://127.0.0.1:<port>/json/list` to find the page or extension
   target.
4. Connect to the target WebSocket and use CDP methods such as
   `Runtime.evaluate` and `Page.captureScreenshot`.

CDP talks to browser targets directly, so it works even when dwm places Chrome
on a different tag.

## Inspecting the Homepage

Start the site:

```sh
yarn dev --host 127.0.0.1
```

Start an isolated Chrome instance with CDP enabled:

```sh
google-chrome-stable \
  --user-data-dir=/tmp/homepage-chrome-cdp \
  --remote-debugging-port=9223 \
  --headless=new \
  --disable-gpu \
  --window-size=1512,1725 \
  http://127.0.0.1:5173/
```

Find the page target:

```sh
curl -sS http://127.0.0.1:9223/json/list
```

The response includes a `webSocketDebuggerUrl` for the page. Connect to that
URL and call CDP methods. Node 22 has a global `WebSocket`, so a small script is
enough:

```js
const fs = require("fs")

const wsUrl = "ws://127.0.0.1:9223/devtools/page/<target-id>"
const ws = new WebSocket(wsUrl)

let id = 0
const pending = new Map()

function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const callId = ++id
    pending.set(callId, { resolve, reject })
    ws.send(JSON.stringify({ id: callId, method, params }))
  })
}

ws.onmessage = (event) => {
  const msg = JSON.parse(event.data)
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id).resolve(msg.result)
    pending.delete(msg.id)
  }
}

ws.onopen = async () => {
  await send("Page.enable")
  await send("Runtime.enable")

  const evaluated = await send("Runtime.evaluate", {
    returnByValue: true,
    awaitPromise: true,
    expression: `
      (() => ({
        title: document.title,
        iconCount: document.querySelectorAll("svg.svg-inline--fa").length,
        fontAwesomeFonts: [...document.fonts]
          .filter((font) => /Font Awesome/i.test(font.family))
          .map((font) => font.family),
        gaDataLayer: (window.dataLayer || []).map((args) =>
          Array.from(args).map((value) => value instanceof Date ? "Date" : value),
        ),
      }))()
    `,
  })

  const screenshot = await send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  })

  fs.writeFileSync(
    "/tmp/homepage-cdp.png",
    Buffer.from(screenshot.data, "base64"),
  )

  console.log(JSON.stringify(evaluated.result.value, null, 2))
  ws.close()
}
```

Useful checks for this homepage:

- `document.querySelectorAll("svg.svg-inline--fa").length` should show the
  rendered FontAwesome SVG icons.
- `document.fonts` should not include FontAwesome web fonts after the SVG icon
  migration.
- `window.dataLayer` should include the Google Analytics `config` call with
  `send_page_view: true`.
- `Page.captureScreenshot` gives a browser-rendered screenshot without relying
  on the current dwm tag.

## Inspecting an Extension

Chrome extension APIs are only available in extension contexts. They are not
available from an ordinary web page context.

Typical contexts:

- Manifest V3: `service_worker`
- Manifest V2: `background_page`
- Popup or options page: regular extension pages
- Content scripts: limited `chrome.*` access, injected into matching web pages

Start Chrome with an unpacked extension:

```sh
google-chrome-stable \
  --user-data-dir=/tmp/homepage-extension-cdp \
  --remote-debugging-port=9224 \
  --load-extension=/absolute/path/to/extension \
  --disable-extensions-except=/absolute/path/to/extension \
  http://127.0.0.1:5173/
```

Then list targets:

```sh
curl -sS http://127.0.0.1:9224/json/list
```

Look for targets whose URL starts with `chrome-extension://<extension-id>/`.
Connect to the target WebSocket and run `Runtime.evaluate` inside that target:

```js
await chrome.storage.local.get(null)
await chrome.runtime.sendMessage({ type: "ping" })
```

If the extension is already installed in a normal Chrome profile, Chrome must
have been started with `--remote-debugging-port` from the beginning. A regular
already-running Chrome process cannot usually be retrofitted with a CDP port.
The cleanest options are:

- close Chrome and restart the normal profile with `--remote-debugging-port`, or
- run an isolated profile with `--load-extension` pointing at the unpacked
  extension source.

## Calling an Extension from the Page

A web page cannot directly call privileged extension APIs. If the page needs to
talk to an extension, add an explicit bridge in the extension.

Example manifest fragment:

```json
{
  "externally_connectable": {
    "matches": ["http://127.0.0.1/*", "https://yeomjy.github.io/*"]
  }
}
```

Example service worker bridge:

```js
chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
  if (!sender.origin?.startsWith("http://127.0.0.1")) return

  if (message.type === "ping") {
    sendResponse({ ok: true })
  }

  return true
})
```

Then the page or a CDP `Runtime.evaluate` call in the page context can send:

```js
chrome.runtime.sendMessage("<extension-id>", { type: "ping" }, console.log)
```

Use a strict allowlist in `externally_connectable` and validate every message in
the extension. Treat this bridge as a public API surface.

## Common Pitfalls

- dwm can place Chrome on another tag, so X11 root screenshots may capture the
  terminal instead of the browser.
- CDP page screenshots are more reliable than window screenshots for automated
  checks.
- `chrome.*` APIs work in extension contexts, not in arbitrary page contexts.
- A Chrome profile can normally be used by only one running Chrome instance at a
  time; use a temporary `--user-data-dir` for isolated checks.
- Headless Chrome is useful for page inspection. For extension UI debugging,
  headed Chrome is usually easier because popups and extension pages are visible.
