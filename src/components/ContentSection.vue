<script setup lang="ts">
import TA from "@/contents/TeachingExperience.vue"
import Publications from "@/contents/PublicationSection.vue"
import AboutMe from "@/contents/AboutMe.vue"
import News from "@/contents/NewsSection.vue"
</script>

<template>
  <v-card class="main-section">
    <v-container fluid>
      <v-row>
        <v-col>
          <AboutMe />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <News />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Publications />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <TA />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>
.main-section {
  height: 100%;
}
</style>
