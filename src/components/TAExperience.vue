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
    <h2>TA</h2>
    <div>
      <v-list density="compact">
        <v-list-item>
          <v-list-item-title>4190.310 Programming Languages</v-list-item-title>
          2022 Spring
        </v-list-item>
        <v-list-item>
          <v-list-item-title>4190.101 Discrete Mathematics</v-list-item-title>
          2021 Fall
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<style>
.educations {
  align-items: center;
}
</style>
