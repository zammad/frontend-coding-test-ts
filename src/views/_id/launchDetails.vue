<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import { useQuery, useResult } from '@vue/apollo-composable'
import { GET_LAUNCHES_DETAILS } from '../../graphql'
import { useRoute } from 'vue-router'
import { LaunchDetails } from '../../types/launchDetails'
import { Ref } from 'vue'
import Loader from '../../components/Loader.vue'
import { useToast } from 'vue-toastification'
import 'swiper/css'
const modules = [Navigation]
const route = useRoute()
const { loading, error, result } = useQuery(GET_LAUNCHES_DETAILS, {
  id: route.params.id,
})
const launchDetails: Readonly<Ref<Readonly<LaunchDetails>>> = useResult(
  result,
  [],
  (result) => result.launch,
)
const swiperOptions = {
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 4,
    },
  },
}
const toast = useToast()
if(error.value?.message !== undefined){
  toast.error({
    timeout: 2000,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
    content: error.value?.message, 
  })
}
</script>
<template>
  <Loader v-if="loading" />
  <div v-else class="px-6 sm:px-16 md:px-28 bg-base-dark text-white">
    <header
      class="h-56 rounded-b-md overflow-clip shadow-2xl shadow-dark-900 grid place-items-center"
    >
      <img
        v-if="launchDetails.links.flickr_images.length > 0"
        :src="launchDetails.links.flickr_images[0]"
        class="w-full h-full object-cover"
        alt="Image showing launch"
      />
      <p v-else class="text-3xl">{{ launchDetails.mission_name }}</p>
    </header>
    <p class="text-3xl text-right cursor-pointer" @click="$router.back()">
      &xlarr;
    </p>
    <main class="pb-10">
      <div class="details">
        <div>
          <p class="text-3xl font-semibold">{{ launchDetails.mission_name }}</p>
          <p class="text-base font-normal pb-4">{{ launchDetails.details }}</p>
          <p class="text-base font-semibold pb-2">
            Launch Date:
            <span class="font-normal">{{
              launchDetails.launch_date_local.substring(0, 10)
            }}</span>
          </p>
          <p class="text-base font-semibold pb-3">
            Launch Site:
            <span class="font-normal">{{
              launchDetails.launch_site.site_name_long
            }}</span>
          </p>
          <p class="text-base font-semibold pb-3">
            Mission success:
            <span class="font-normal">{{
              launchDetails.launch_success ? 'Success' : 'Failed'
            }}</span>
          </p>
        </div>
        <div>
          <p class="text-base font-semibold pb-3">
            Rocket Name:
            <span class="font-normal">{{
              launchDetails.rocket.rocket_name
            }}</span>
          </p>
          <p class="text-base font-semibold pb-3">
            Rocket Description:
            <span class="font-normal">{{
              launchDetails.rocket.rocket.description
            }}</span>
          </p>
          <p class="text-base font-semibold pb-3">
            Rocket Status:
            <span class="font-normal">{{
              launchDetails.rocket.rocket.active ? 'Active' : 'Inactive'
            }}</span>
          </p>
        </div>
      </div>
      <p class="text-base font-semibold pb-2">
        Related Article:
        <a :href="launchDetails.links.article_link" class="font-normal">{{
          launchDetails.links.article_link ?? 'No articles published'
        }}</a>
      </p>
      <p class="text-base font-semibold py-3">Mission clip:</p>
      <div class="max-w-sm">
        <a :href="launchDetails.links.video_link" target="_blank">
          <div
            class="bg-black text-white p-3 h-40 grid place-items-center rounded-md hover:bg-opacity-80"
          >
            <span class="text-6xl active:animate-ping"
              >&blacktriangleright;</span
            >
          </div>
        </a>
      </div>
      <p class="text-base font-normal py-3">Images:</p>
      <Swiper
        :modules="modules"
        navigation
        :slides-per-view="4"
        :space-between="30"
        :breakpoints="swiperOptions.breakpoints"
        v-if="launchDetails.links.flickr_images.length > 0"
      >
        <SwiperSlide
          v-for="(image, index) in launchDetails.links.flickr_images"
          :key="index"
        >
          <div class="h-40 rounded-md overflow-hidden">
            <img
              :src="image"
              class="w-full h-full object-cover"
              alt="Launch Images"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <p v-else class="font-normal text-base">No images available to display</p>
    </main>
  </div>
</template>
<style>
/* enter transitions */
  .toast-enter-from {
    opacity: 0;
    transform: translateY(-60px);
  }
  /* .toast-enter-to {
    opacity: 1;
    transform: translateY(0);
  } */
  .toast-enter-active {
    transition: all 0.3s ease;
  }
  /* leave transitions */
  /* .toast-leave-from {
    opacity: 1;
    transform: translateY(0);
  } */
  .toast-leave-to {
    opacity: 0;
    transform: translateY(-60px);
  }
  .toast-leave-active {
    transition: all 0.3s ease;
  }
  </style>
