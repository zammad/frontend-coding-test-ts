<script lang="ts" setup>import { PastLaunches } from '../types/pastLaunches';

interface Props {
  launchDetails: PastLaunches
}
const props = defineProps<Props>()


</script>
<template>
      <div
      v-if="props.launchDetails.links.flickr_images.length>0"
      class="card rounded-lg hover:shadow-base-purple-900 py-3 hover:border-none hover:shadow-xl hover:bg-base-purple-900 border-black border overflow-hidden duration-150 transition-shadow ease-linear"
    >
      <div class="image w-full h-40 p-4">
        <img :src="props.launchDetails.links.flickr_images[0]" class="w-full h-full" alt="" />
      </div>
      <div class="details text-left text-black">
        <h5 class="p-2">Name</h5>
        <h5 class="px-2 text-2xl">{{props.launchDetails.mission_name}}</h5>
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
