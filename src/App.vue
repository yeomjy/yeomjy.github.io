<script setup lang="ts">
import MainView from "./views/MainView.vue"
</script>

<template>
  <v-app id="main">
    <v-main>
      <MainView/>
    </v-main>
  </v-app>
</template>

<style scoped>
#main {
  background: white;
  //background: #66668d;
  //background: -webkit-linear-gradient(to left, #66668d, #4389a2);
  //background: linear-gradient(to left, #66668d, #4389a2);
  //background-size: cover;
}
</style>
