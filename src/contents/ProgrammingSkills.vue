<script lang="ts" setup>
type ProgrammingSkillType = {
  name: string
  score: number
  detail: string
  color: string
}
const data: ProgrammingSkillType[] = [
  {
    name: "PyTorch",
    score: 85,
    detail:
      "Contributed to deep learning research on reinforcement learning and NLP. " +
      "Reproduced several well-known RL algorithms such as PPO, SAC, TD3. " +
      "Implemented UNet for CT image data segmentation.",
    color: "green",
  },
  {
    name: "Django",
    score: 80,
    detail:
      "Developed and deployed fully working backend api service for " +
      "team project twice, with async task queue, scheduled jobs, and machine learning feature.",
    color: "green",
  },
  {
    name: "Google Cloud Platform",
    score: 75,
    detail:
      "Has experience on deployment on Compute Engine and Cloud Run, and integration with Cloud SQL and Cloud Storage & Cloud CDN service.",
    color: "green",
  },
]
</script>
<template>
  <v-card flat>
    <v-card-title>
      <h2 class="title font-weight-light mb-1">Programming Skills</h2>
    </v-card-title>
    <v-card-text class="skills-list-container">
      <v-row
        v-for="(item, i) in data"
        :key="i"
        no-gutters
        align="center"
      >
        <v-col cols="1" class="progress">
          <v-progress-circular
            :model-value="item.score"
            :color="item.color"
            size="50"
          >
            {{ item.score }}
          </v-progress-circular>
        </v-col>
        <v-col cols="10">
          <v-card flat density="compact">
            <v-card-title>
              {{ item.name }}
            </v-card-title>
            <v-card-text>
              {{ item.detail }}
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

.skills-list-container {
  padding-left: 0;
}

.progress {
  margin-left: 1.5em;
}

</style>
