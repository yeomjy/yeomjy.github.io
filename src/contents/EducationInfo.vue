<script setup lang="ts">
import snulogo from "@/assets/snulogo.png"
type EducationDataType = {
  name: string
  start: string
  end: string
  degree: string
  logo: string
  advisor: string | null
  advisor_url: string | null
}
const data: EducationDataType[] = [
  {
    name: "Seoul National University",
    start: "2024.03",
    end: "Current",
    degree: "M.S. & Ph.D. in Computer Science and Engineering",
    logo: snulogo,
    advisor: "Hyun Oh Song",
    advisor_url: "https://mllab.snu.ac.kr/hyunoh"
  },
  {
    name: "Seoul National University",
    start: "2019.03",
    end: "2024.02",
    degree: "B.S. in Computer Science and Engineering & B.S. in Mathematical Sciences",
    logo: snulogo,
    advisor: null,
    advisor_url: null,
  }
]
</script>

<template>
  <v-card flat>
    <v-card-title>
      <h2 class="title font-weight-light mb-1">Education</h2>
    </v-card-title>
    <v-card-text class="skills-list-container">
      <v-row
        v-for="(item, i) in data"
        :key="i"
        no-gutters
      >
        <v-col cols="1" class="logo">
          <v-img :src="item.logo" />
        </v-col>
        <v-col cols="10">
          <v-card flat>
            <v-card-title class="text-wrap">
              {{ item.name }}
            </v-card-title>
            <v-card-subtitle>
              {{ item.start }} ~ {{ item.end }}
            </v-card-subtitle>
            <v-card-text>
              {{ item.degree }}
              <div v-if="item.advisor !== null">
                <div v-if="item.advisor_url !== null">
                  Advisor: <a :href="item.advisor_url">{{ item.advisor }}</a>
                </div>
                <div v-else>
                  Advisor: {{ item.advisor }}
                </div>
              </div>
            </v-card-text>
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
.education-title {
  font-size: medium;
}

.edu-list-container {
  padding-left: 0;
}

.logo {
  margin-top: 1em;
}


</style>
