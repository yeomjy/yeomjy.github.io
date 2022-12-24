<script setup lang="ts">
import Skills from "../components/MySkills.vue"
import TA from "@/components/TAExperience.vue"
</script>
<template>
  <div class="about">
    <h1>About me</h1>
    <div>
      My name is Junyoung Yeom. I am an undergraduate student majoring in
      Computer Science and Engineering, at Seoul National University. I am also
      double majoring in mathematics. I am interested in theory of deep
      learning, optimization, and reinforcement learning.
    </div>
  </div>
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
