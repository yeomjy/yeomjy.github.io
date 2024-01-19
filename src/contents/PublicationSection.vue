<script setup lang="ts">
import { useDisplay } from "vuetify"
import ad23_img from "@/assets/pub/img/ad23.gif"
import ccm24_img from "@/assets/pub/img/ccm24.png"

const display = useDisplay()
const display_name = display.name
console.log(display_name.value)
function is_mobile() {
  switch (display_name.value) {
    case "xs":
      return true
    case "sm":
      return true
    default:
      return false
  }
}

type AuthorType = {
  firstname: string
  lastname: string
  homepage: string | null
}
type PublicationType = {
  title: string
  source: string
  year: number
  authors: AuthorType[]
  detail: string
  paperurl: string
  codeurl: string
  projecturl: string | null
  bibtex: string
  imgpath: string
}

function get_name(a: AuthorType) {
  return `${a.firstname} ${a.lastname}`
}

// Author info in MLLAB

const jyyeom: AuthorType = {
  firstname: "Junyoung",
  lastname: "Yeom",
  homepage: "https://yeomjy.com",
}

const hosong: AuthorType = {
  firstname: "Hyun Oh",
  lastname: "Song",
  homepage: "https://mllab.snu.ac.kr/hyunoh",
}

const jhkim: AuthorType = {
  firstname: "Jang-Hyun",
  lastname: "Kim",
  homepage: "https://janghyun1230.github.io",
}

const symoon: AuthorType = {
  firstname: "Seungyong",
  lastname: "Moon",
  homepage: "https://symoon11.github.io",
}

const data: PublicationType[] = [
  {
    title: "Compressed Context Memory For Online Language Model Interaction",
    source: "ICLR",
    year: 2024,
    authors: [
      jhkim,
      jyyeom,
      {
        firstname: "Sangdoo",
        lastname: "Yun",
        homepage: "https://sangdooyun.github.io",
      },
      hosong,
    ],
    detail:
      "In modern NLP systems such as ChatGPT, the contextual information grows continuously " +
      "during the interaction, " +
      "which requires quadratic computational resource. " +
      "Therefore, we propose a novel context compression algorithm for Large Language Models " +
      "that can be trained with lightweight adapter.",
    paperurl: "https://arxiv.org/abs/2312.03414",
    codeurl: "https://github.com/snu-mllab/Context-Memory",
    projecturl: "https://janghyun1230.github.io/memory",
    bibtex: "bib/ccm24.txt",
    imgpath: ccm24_img,
  },
  {
    title:
      "Discovering Hierarchical Achievements in Reinforcement Learning via Contrastive Learning",
    source: "NeurIPS",
    year: 2023,
    authors: [
      symoon,
      jyyeom,
      {
        firstname: "Bumsoo",
        lastname: "Park",
        homepage: null,
      },
      hosong,
    ],
    detail:
      "Reinforcement learning in procedurally generated environments " +
      "with hierarchical achievements is a challenging problem. " +
      "We propose a novel contrastive learning method that can be trained jointly " +
      "with model-free RL algorithms such as PPO.",
    paperurl: "https://arxiv.org/abs/2307.03486",
    codeurl: "https://github.com/snu-mllab/Achievement-Distillation",
    projecturl: null,
    bibtex: "bib/ad23.txt",
    imgpath: ad23_img,
  },
]
</script>
<template>
  <v-card flat>
    <v-card-title>
      <h2 class="title font-weight-light mb-1">Publications</h2>
    </v-card-title>
    <v-card-text>
      <v-row v-for="(item, i) in data" :key="i" align="center">
        <template v-if="is_mobile()">
          <v-col cols="12">
            <v-card flat density="compact">
              <v-card-title class="publication-title text-wrap">
                {{ item.title }}
              </v-card-title>
              <v-card-subtitle class="paper-info">
                <div>
                  <v-img :src="item.imgpath" />
                </div>
                <div class="text-wrap">
                  <span v-for="(author, i) in item.authors" :key="i">
                    <span v-if="author === jyyeom && author.homepage !== null">
                      <a :href="author.homepage">
                        <b>{{ get_name(author) }}</b>
                      </a>
                    </span>
                    <span v-else-if="author.homepage !== null">
                      <a :href="author.homepage">{{ get_name(author) }} </a>
                    </span>
                    <span v-else>
                      {{ get_name(author) }}
                    </span>
                    <template v-if="i < item.authors.length - 1">, </template>
                  </span>
                </div>

                <div class="paper-source text-wrap">
                  {{ item.source }} {{ item.year }}
                </div>
                <nav class="text-wrap">
                  <a :href="item.paperurl">Paper</a>
                  <a :href="item.codeurl">Code</a>
                  <a v-if="item.projecturl !== null" :href="item.projecturl"
                    >Project Page</a
                  >
                  <a :href="item.bibtex">BibTeX</a>
                </nav>
              </v-card-subtitle>
              <v-card-text class="paper-detail">
                {{ item.detail }}
              </v-card-text>
            </v-card>
          </v-col>
        </template>

        <template v-else>
          <v-col cols="4" md="4">
            <v-img :src="item.imgpath" />
          </v-col>
          <v-col cols="8" md="8">
            <v-card flat density="compact">
              <v-card-title class="publication-title text-wrap">
                {{ item.title }}
              </v-card-title>
              <v-card-subtitle class="paper-info">
                <div class="text-wrap">
                  <span v-for="(author, i) in item.authors" :key="i">
                    <span v-if="author === jyyeom && author.homepage !== null">
                      <a :href="author.homepage">
                        <b>{{ get_name(author) }}</b>
                      </a>
                    </span>
                    <span v-else-if="author.homepage !== null">
                      <a :href="author.homepage">{{ get_name(author) }} </a>
                    </span>
                    <span v-else>
                      {{ get_name(author) }}
                    </span>
                    <template v-if="i < item.authors.length - 1">, </template>
                  </span>
                </div>

                <div class="paper-source text-wrap">
                  {{ item.source }} {{ item.year }}
                </div>
                <nav class="text-wrap">
                  <a :href="item.paperurl">Paper</a>
                  <a :href="item.codeurl">Code</a>
                  <a v-if="item.projecturl !== null" :href="item.projecturl"
                    >Project Page</a
                  >
                  <a :href="item.bibtex">BibTeX</a>
                </nav>
              </v-card-subtitle>
              <v-card-text class="paper-detail">
                {{ item.detail }}
              </v-card-text>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}

.publication-title {
  font-size: medium;
  word-break: keep-all;
  padding-right: 0;
}

.my-info {
  font-weight: bold;
}

nav {
  font-size: 12px;
  margin-top: 0.5em;
  padding-left: 0;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  /* background-color: transparent; */
}

/* nav a:first-of-type {
  border: 0;
  padding-left: 0;
} */

nav a:last-of-type {
  border-right: 1px solid var(--color-border);
}

.paper-source {
  margin-top: 0.5em;
  font-style: italic;
}

.paper-info {
  opacity: 1;
}

.paper-detail {
  padding-top: 0.5em;
  padding-right: 0;
}
</style>
