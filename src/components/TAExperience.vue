<script>
const courses = [
  {
    title: "Programming Languages",
    courseNo: "4190.310",
    year: 2022,
    semester: "Spring",
  },
  {
    title: "Discrete Mathematics",
    courseNo: "4190.101",
    year: 2021,
    semester: "Fall",
  },
]
export default {
  data: () => {
    courses
  },
}
</script>
<template>
  <div class="educations">
    <h1>TA</h1>
    <div>
      <v-list density="compact">
        <v-list-item>
          Programming Languages (4190.310) 2022 Spring
        </v-list-item>
        <v-list-item> Discrete Mathematics (4190.101) 2021 Fall </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<style>
/*@media (min-width: 1024px) {*/
/*  .educations {*/
/*    min-height: 100vh;*/
/*    display: flex;*/
/*    align-items: center;*/
/*  }*/
/*}*/
.educations {
  align-items: center;
}
</style>
