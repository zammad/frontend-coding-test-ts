<script lang="ts" setup>
import { PastLaunches } from '../types/pastLaunches'

// interface Props {
//   launchDetails: PastLaunches
// }
// const props = defineProps<Props>()
const props = defineProps(['launchDetails'])

// custom image for missions without flickr_images
const flickr_images = [
  'https://live.staticflickr.com/65535/50618376646_8f52c31fc4_o.jpg',
  'https://live.staticflickr.com/65535/50618376731_43ddaab1b8_o.jpg',
  'https://live.staticflickr.com/65535/50618376671_ba4e60af7c_o.jpg',
  'https://live.staticflickr.com/65535/50618376351_ecfdee4ab2_o.jpg',
  'https://live.staticflickr.com/65535/50618727917_01e579c4d9_o.jpg',
  'https://live.staticflickr.com/65535/50618355216_2872d1fe98_o.jpg',
  'https://live.staticflickr.com/65535/50618354801_ff3e722884_o.jpg',
  'https://live.staticflickr.com/65535/50618463487_41642939a4_o.jpg',
  'https://live.staticflickr.com/65535/50617619613_5630422345_o.jpg',
  'https://live.staticflickr.com/65535/50617619668_d680d7319c_o.jpg',
  'https://live.staticflickr.com/65535/50617625523_a7484e0abf_o.jpg',
  'https://live.staticflickr.com/65535/50618469202_fa86f88ab3_o.jpg',
  'https://live.staticflickr.com/65535/50617625183_8554412cee_o.jpg',
  'https://live.staticflickr.com/65535/50618470472_fb8e6507d7_o.jpg',
  'https://live.staticflickr.com/65535/50617626838_c0c71de1f7_o.jpg',
  'https://live.staticflickr.com/65535/50617626738_aa3997aaea_o.jpg',
  'https://live.staticflickr.com/65535/50617626408_fb0bba0f89_o.jpg',
]

// Function is used for missions without preview images
const getRandomImage = () => {
  return Math.floor(Math.random() * flickr_images.length)
}

</script>
<template>
  <div
    class="card rounded-lg h-full bg-base-white shadow-base-white custom-shadow-heavy hover:.custom-shadow-light overflow-hidden duration-150 transition-shadow ease-linear"
  >
    <div class="image w-full h-40">
      <img
        :src="
          props.launchDetails.links.flickr_images[0] ??
          flickr_images[getRandomImage()]
        "
        class="w-full h-full"
        alt=""
      />
    </div>
    <div class="details text-left text-black p-3">
        <h5 class="text-lg font-semibold"><span class="animate-pulse">Mission</span> {{ props.launchDetails.mission_name }}</h5>
        <p class="text-sm pb-2">{{ props.launchDetails.launch_year }}</p>
        <p class="text-sm pb-2 absolute bottom-2 left-2">{{ props.launchDetails.launch_success ? 'Successful⚡🔥' : 'Failed🚧' }}</p>
      <router-link class="bg-black absolute bottom-2 right-2 text-white text-sm p-2 py-1 rounded-md" :to="`/${props.launchDetails.id}/launchDetails`">Learn more</router-link>
    </div>
  </div>
</template>
<style>
.custom-shadow-heavy {
  box-shadow: 0px 12px 16px -2px rgba(41, 39, 41, 0.62);
  -webkit-box-shadow: 0px 12px 16px -2px rgba(41, 39, 41, 0.62);
  -moz-box-shadow: 0px 12px 16px -2px rgba(41, 39, 41, 0.62);
}
.card:hover {
  box-shadow: 0px 12px 16px -2px rgba(143, 143, 143, 0.62);
  -webkit-box-shadow: 0px 12px 16px -2px rgba(143, 143, 143, 0.62);
  -moz-box-shadow: 0px 12px 16px -2px rgba(143, 143, 143, 0.62);
}
</style>
