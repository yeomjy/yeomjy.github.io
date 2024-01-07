<script setup lang="ts">
import Profile from "@/contents/ProfileImage.vue"
import Education from "@/contents/EducationInfo.vue"
import Social from "@/contents/SocialInfo.vue"
</script>

<template>
  <v-card class="sidebar">
    <v-container fluid>
      <v-row>
        <v-col>
          <Profile />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <nav>
            <v-btn
              icon
              class="link-btn"
              href="https://github.com/yeomjy"
              target="_blank"
            >
              <v-icon icon="fa-brands fa-github" />
            </v-btn>
            <v-btn icon class="link-btn" href="mailto:yeomjy@mllab.snu.ac.kr">
              <v-icon icon="fa-solid fa-envelope" />
            </v-btn>
            <v-btn
              icon
              href="https://scholar.google.com/citations?user=L0TXeqoAAAAJ"
              target="_blank"
            >
              <v-icon icon="fa-brands fa-google-scholar" />
            </v-btn>
          </nav>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <Social />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <Education />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>
.link-btn {
  margin-right: 2em;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 1em;
}

nav a {
  color: unset;
}

@media (hover: hover) {
  nav a:hover {
    background-color: transparent;
  }
}

.sidebar {
  height: 100%;
  background-color: white;
}
</style>
