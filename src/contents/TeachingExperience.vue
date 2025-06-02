<script setup lang="ts">
type TeachingExperience = {
  title: string
  id: string
  role: string
  year: number
  semester: string
}
const data: TeachingExperience[] = [
  {
    title: "Basics of Deep Learning",
    id: "M2177.0043",
    role: "Teaching Assistant",
    year: 2025,
    semester: "Spring",
  },
  {
    title: "Programming Languages",
    id: "4190.310",
    role: "Teaching Assistant",
    year: 2022,
    semester: "Spring",
  },
  {
    title: "Discrete Mathematics",
    id: "4190.101",
    role: "Teaching Assistant",
    year: 2021,
    semester: "Fall",
  },
]
</script>
<template>
  <v-card flat>
    <v-card-title>
      <h2 class="title font-weight-light mb-1 text-wrap">
        Teaching Experience
      </h2>
    </v-card-title>
    <v-card-text class="ta-list-container">
      <v-row v-for="(item, i) in data" :key="i" no-gutters>
        <v-col>
          <v-card flat density="compact" class="ta-list">
            <v-card-title class="ta-title text-wrap">
              {{ item.id }} {{ item.title }}
            </v-card-title>
            <v-card-text>
              {{ `${item.role}, ${item.year} ${item.semester}` }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.news-title {
  font-size: medium;
}

.news-list-container {
  padding-left: 0;
}
</style>
