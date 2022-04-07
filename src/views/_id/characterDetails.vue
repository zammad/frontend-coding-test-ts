<template>
  <div
    class="justify-center w-full xl:max-w-7xl lg:max-w-5xl md:max-w-xl sm:max-w-lg mt-10"
  >
    <h1 class="font-extrabold tracking-tigh text-3xl leading-10">
      Character Detail
    </h1>
    <div class="mt-4">
      <ErrorToast v-if="queryError">
        <template #message>
          There was an error getting the Character Details.
        </template>
      </ErrorToast>

      <Loader v-if="loading"></Loader>

      <template v-else-if="character">
        <CharacterDetail
          v-bind:character="character"
          v-bind:relatives="relatives"
        ></CharacterDetail>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { useRoute } from 'vue-router'
import { onMounted, Ref, ref, watch } from 'vue'
import { CharacterInterface } from '../../types/character'

import Loader from '../../components/Loader.vue'
import CharacterDetail from '../../components/CharacterDetail.vue'
import ErrorToast from '../../components/ErrorToast.vue'

const character: Ref<Array<CharacterInterface>> = ref([])
const queryError = ref(false)
const loading = ref(true)
const route = useRoute()

const relatives: Ref<Array<CharacterInterface>> = ref([])

const getCharacter = async () => {
  loading.value = true
  try {
    const { data } = await axios.get(
      `https://bobsburgers-api.herokuapp.com/characters/${route.params.id}`,
    )
    character.value = data

    if (data.relatives) {
      const getRelatives = Promise.all(
        data.relatives.map(async (relative: string) => {
          if (!relative.startsWith('https://')) return { name: relative }

          const { data } = await axios.get(relative)
          return data
        }),
      ).then((results) => results)

      relatives.value = await getRelatives
    }
  } catch (error) {
    queryError.value = true
  }
  loading.value = false
}

watch(
  () => route.params,
  () => {
    getCharacter()
  },
  { immediate: true },
)

onMounted(async () => {
  getCharacter()
})
</script>
