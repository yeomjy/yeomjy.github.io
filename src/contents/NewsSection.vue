<script setup lang="ts"></script>
<template>
  <v-card flat>
    <v-card-title>
      <h2 class="title font-weight-light mb-1 text-wrap">News</h2>
    </v-card-title>
    <v-card-text class="news-list-container">
      <ul>
        <li>
          <b>01/17/2024</b>
          Our paper
          <a
            href="https://janghyun1230.github.io/memory"
            style="font-style: italic"
            >Compressed Context Memory For Online Language Model Interaction</a
          >
          is accepted at ICLR 2024!
        </li>
      </ul>
    </v-card-text>
  </v-card>
</template>
<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.news-title {
  font-size: medium;
}

.news-list-container {
  list-style-position: inside;
}
</style>
