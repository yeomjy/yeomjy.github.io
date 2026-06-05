import { createApp } from "vue"
import App from "./App.vue"

import "./assets/main.css"

import "@fortawesome/fontawesome-free/css/all.css"

// Vuetify
import "vuetify/styles"
import { createVuetify } from "vuetify"
import { aliases, fa } from "vuetify/iconsets/fa"

// Google Analytics
import { createGtag } from "vue-gtag"

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

app.use(vuetify)
app.use(
  createGtag({
    tagId: "G-RZ50SN639D",
  }),
)

app.mount("#app")
