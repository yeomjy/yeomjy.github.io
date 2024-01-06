<script setup lang="ts">
import Profile from "@/contents/ProfileImage.vue"
import About from "@/contents/AboutMe.vue"
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
            <a href="https://github.com/yeomjy">GitHub</a>
            <a href="mailto:yeomjy111@gmail.com">Email</a>
            <a href="https://scholar.google.com/citations?user=L0TXeqoAAAAJ">Google Scholar</a>
          </nav>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <Social />
        </v-col>
      </v-row>

<!--      <v-row>-->
<!--        <v-col>-->
<!--          <About />-->
<!--        </v-col>-->
<!--      </v-row>-->
      <v-row>
        <v-col>
          <Education />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

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

.sidebar {
  height: 100%;
  background-color: white;
}
</style>