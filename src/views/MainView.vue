<script setup lang="ts">
import Skills from "@/components/ProgrammingSkills.vue"
import TA from "@/components/TeachingExperience.vue"
import About from "@/components/MyInfo.vue"
import Profile from "@/components/ProfileImage.vue"
</script>
<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <Profile />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h1 class="name">Junyoung Yeom</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <nav>
            <a href="https://github.com/yeomjy">GitHub</a>
            <a href="mailto:yeomjy111@gmail.com">Email</a>
            <a href="https://yeomjy.com/blog">Blog</a>
          </nav>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <About />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Skills />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <TA />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.name {
  text-align: center;
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
