<script setup lang="ts">
import Skills from "@/components/MySkills.vue"
import TA from "@/components/TAExperience.vue"
import About from "@/components/MyInfo.vue"
</script>
<template>
  <div>
    <v-container>
      <v-row>
        <About />
      </v-row>
      <v-row>
        <Skills />
      </v-row>
      <v-row>
        <TA />
      </v-row>
    </v-container>
  </div>
</template>

<style></style>
