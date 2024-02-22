import { createApp } from "vue"
import App from "./App.vue"

import "./assets/main.css"

import "@fortawesome/fontawesome-free/css/all.css"

// Vuetify
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { aliases, fa } from "vuetify/iconsets/fa"

// Google Analytics
import VueGtag from "vue-gtag"

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
})
const app = createApp(App)

app.use(vuetify)
app.use(VueGtag, {
    config: {
        id: "G-RZ50SN639D",
    }
})

app.mount("#app")
