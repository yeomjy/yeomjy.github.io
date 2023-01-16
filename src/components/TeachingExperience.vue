<script lang="ts" setup>
type TeachingExperience = {
  title: string
  id: string
  role: string
  year: number
  semester: string
}
const data: TeachingExperience[] = [
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
  <h2>Teaching Experience</h2>
  <v-list>
    <v-list-item v-for="(item, i) in data" :key="i">
      <v-list-item-title> {{ item.id }} {{ item.title }} </v-list-item-title>
      {{ `${item.role}, ${item.year} ${item.semester}` }}
    </v-list-item>
  </v-list>
</template>
