<script lang="ts" setup>
import { Ref } from 'vue'
import { PastLaunches } from '../types/pastLaunches';

interface Props {
  pastLaunches: Readonly<Ref<Readonly<PastLaunches>>>
}
const props = defineProps<Props>()
</script>
<template>
    <div
      class="card rounded-lg hover:shadow-base-purple-900 py-3 hover:border-none hover:shadow-xl hover:bg-base-purple-900 border-white border overflow-hidden transition duration-150 transition-shadow ease-linear"
    >
      <div class="image w-full h-40 p-4">
        <img src="../assets/logo.svg" class="w-full h-full" alt="" />
      </div>
      <div class="details text-left text-base-white">
        <h5 class="p-2">name</h5>
        <h5 class="px-2 text-2xl">Zazoo</h5>
        <p class="p-2">description</p>
        <hr>
        <router-link class="px-2 pt-3 text-md" to="/taskOne">Learn more</router-link>
      </div>
    </div>
</template>
<style>
.zeh {
  color: #431044;
}
</style>
