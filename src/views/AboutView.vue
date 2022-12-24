<script setup lang="ts">
import Skills from "@/components/MySkills.vue"
import TA from "@/components/TAExperience.vue"
import About from "@/components/MyInfo.vue"
</script>
<template>
  <About />
  <Skills />
  <TA />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
