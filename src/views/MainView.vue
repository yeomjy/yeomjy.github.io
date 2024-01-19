<script setup lang="ts">
import Profile from "@/components/ProfileSection.vue"
import Content from "@/components/ContentSection.vue"
</script>
<template>
  <v-container id="main-view" fluid>
    <v-row>
      <v-spacer />
      <v-col cols="12" sm="12" md="8" lg="8" xl="6">
        <v-row>
          <v-col cols="12" sm="12" md="4" xl="4" class="profile-section">
            <Profile />
          </v-col>
          <v-col cols="12" sm="12" md="8" xl="8" class="content-section">
            <Content />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-card-text>
                This page is built with
                <a href="https://vuejs.org">Vue.js</a> and
                <a href="https://vuetifyjs.com/en/">Vuetify</a> framework. The
                design of this page is motivated by
                <a href="https://github.com/evryn/vue-modern-resume"
                  >evryn's template</a
                >
                and
                <a href="https://github.com/jonbarron/website"
                  >Jon Barron's template</a
                >. The source code of this website is available at
                <a href="https://github.com/yeomjy/yeomjy.github.io"
                  >my github</a
                >.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<style scoped>
.name {
  text-align: center;
}

.profile-section {
  background-color: white;
}

.content-section {
  background-color: white;
}

#main-view {
  height: 100%;
  padding-top: 2em;
  padding-bottom: 2em;
}
</style>
