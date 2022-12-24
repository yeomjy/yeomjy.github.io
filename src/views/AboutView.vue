<script setup lang="ts">
import Skills from "@/components/MySkills.vue"
import TA from "@/components/TAExperience.vue"
import About from "@/components/MyInfo.vue"
</script>
<template>
  <div class="container">
  <div class="element">
    <About />
  </div>
  <div class="element">
    <Skills />
  </div>
  <div class="element">
    <TA />
  </div>
  </div>
</template>

<style>
.element {
  border:5px solid;
  padding:20px;
  margin:20px;
  display:block;
  width:80vw;
}
.container {
  display: grid;
  grid-template-columns: 100vw;
}
</style>
