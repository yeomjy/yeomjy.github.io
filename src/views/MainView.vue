<script setup lang="ts">
import Skills from "@/components/ProgrammingSkills.vue"
import TA from "@/components/TeachingExperience.vue"
import About from "@/components/MyInfo.vue"
</script>
<template>
  <div>
    <v-container>
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

<style></style>
