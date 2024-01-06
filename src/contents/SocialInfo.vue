<script setup lang="ts">

type SocialInfoType = {
  name: string
  url: string
  protocol: string
  icon: string
}

const data: SocialInfoType[] = [
  {
    name: "Email",
    url: "yeomjy@mllab.snu.ac.kr",
    protocol: "mailto:",
    icon: "fa-solid fa-envelope",
  },
  {
    name: "Blog",
    url: "yeomjy.com/blog",
    protocol: "https://",
    icon: "fa-solid fa-b",
  },
  {
    name: "LinkedIn",
    url: "www.linkedin.com/in/junyoung-yeom-21525a244",
    protocol: "https://",
    icon: "fab fa-linkedin-in",
  },
]
</script>

<template>
  <v-card flat>
    <v-card-title>
      <h2 class="title font-weight-light mb-1">Social</h2>
    </v-card-title>
    <v-card-text>
      <v-row v-for="(item, i) in data" :key="i" no-gutters align="center">
        <v-col cols="1">
          <v-icon :icon="item.icon"></v-icon>
        </v-col>
        <v-col cols="10">
          <v-card flat>
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-subtitle class="text-wrap">
              <a :href="`${item.protocol}${item.url}`">{{ item.url }}</a>
            </v-card-subtitle>
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

</style>
