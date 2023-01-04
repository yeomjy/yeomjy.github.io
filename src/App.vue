<script setup lang="ts">
import AboutView from "./views/AboutView.vue"
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row dense>
          <v-col>
            <v-avatar size="125" class="profile">
              <img
                alt="Profile Image"
                src="@/assets/profile.jpeg"
                width="125"
                height="125"
              />
            </v-avatar>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h1 class="name">Junyoung Yeom</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="wrapper">
              <nav>
                <a href="https://github.com/yeomjy">GitHub</a>
                <a href="mailto:yeomjy111@gmail.com">Email</a>
                <a href="https://yeomjy.com/blog">Blog</a>
              </nav>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <AboutView />
        </v-row>
      </v-container>
    </v-main>
    <v-footer>
      This page is built with &nbsp;
      <a href="https://vuejs.org/">Vue.js</a> &nbsp; and &nbsp;
      <a href="https://next.vuetifyjs.com/en/">Vuetify</a>
    </v-footer>
  </v-app>
</template>

<style scoped>
.name {
  text-align: center;
}

.profile {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  background-color: transparent;
}

nav a:first-of-type {
  border: 0;
}
</style>
