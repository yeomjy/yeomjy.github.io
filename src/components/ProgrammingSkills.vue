<script lang="ts" setup>
type ProgrammingSkillType = {
  name: string
  score: number
  detail: string
}
const data: ProgrammingSkillType[] = [
  {
    name: "PyTorch",
    score: 4,
    detail:
      "Implemented various models in research papers, and implemented my own model for mini research project.",
  },
  {
    name: "TensorFlow",
    score: 3,
    detail: "",
  },
  {
    name: "Django",
    score: 4,
    detail:
      "Developed and deployed fully working backend api service twice, with async task queue, scheduled jobs, and machine learning feature.",
  },
  {
    name: "Google Cloud Platform",
    score: 4,
    detail:
      "Deployment on Compute Engine and Cloud Run, and integration with Cloud SQL and Cloud Storage & Cloud CDN service.",
  },
]
</script>
<template>
  <h2>Programming Skills</h2>
  <v-list>
    <v-list-item v-for="(item, i) in data" :key="i">
      <v-list-item-title>{{ item.name }}</v-list-item-title>
      {{ item.score }}/5<br />
      {{ item.detail }}
    </v-list-item>
  </v-list>
</template>
