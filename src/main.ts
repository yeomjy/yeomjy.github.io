import { createApp } from "vue"
import App from "./App.vue"

import "./assets/main.css"

// Vuetify
import "vuetify/styles"
import { createVuetify } from "vuetify"
import { aliases, fa } from "vuetify/iconsets/fa-svg"

// FontAwesome (SVG icons, tree-shaken to only the icons we actually use)
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {
  faGithub,
  faGoogleScholar,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import { faB, faEnvelope } from "@fortawesome/free-solid-svg-icons"

// Google Analytics
import { createGtag } from "vue-gtag"

library.add(faGithub, faGoogleScholar, faLinkedinIn, faB, faEnvelope)

const vuetify = createVuetify({
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
})
const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)
app.use(vuetify)
app.use(
  createGtag({
    tagId: "G-RZ50SN639D",
    // vue-gtag 3 defaults send_page_view to false, and this app has no
    // router, so without this the initial page view is never sent.
    config: {
      send_page_view: true,
    },
  }),
)

app.mount("#app")
