<template>
  <div
    class="justify-center xl:max-w-7xl lg:max-w-5xl md:max-w-xl sm:max-w-lg mt-10"
  >
    <h1 class="font-extrabold tracking-tigh text-3xl leading-10">
      Bob's Burguers Character List
    </h1>
    <div class="mt-8">
      <ErrorToast v-if="queryError">
        <template #message>
          There was an error getting the Character List.
        </template>
      </ErrorToast>

      <Loader v-if="loading"></Loader>

      <template v-else-if="characters">
        <swiper
          v-bind:slides-per-view="4"
          v-bind:space-between="50"
          class="grid"
        >
          <swiper-slide
            v-for="character in characters"
            v-bind:key="character.id"
            class="flex"
          >
            <CharacterCard v-bind:character="character"></CharacterCard>
          </swiper-slide>
        </swiper>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { onMounted, Ref, ref } from 'vue'
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/vue'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css'
import { CharacterInterface } from '../types/character'

import Loader from '../components/Loader.vue'
import CharacterCard from '../components/CharacterCard.vue'
import ErrorToast from '../components/ErrorToast.vue'

const characters: Ref<Array<CharacterInterface>> = ref([])
const queryError = ref(false)
const loading = ref(true)

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://bobsburgers-api.herokuapp.com/characters/?limit=18',
    )
    characters.value = data
  } catch (error) {
    queryError.value = true
  }
  loading.value = false
})
</script>
