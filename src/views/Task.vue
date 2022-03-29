<script lang="ts" setup>
import LaunchCard from '../components/LaunchCard.vue'
import Loader from '../components/Loader.vue'
import { useQuery, useResult } from '@vue/apollo-composable'
import { GET_PAST_LAUNCHES_INFO } from '../graphql'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useToast } from 'vue-toastification'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const { loading, error, result } = useQuery(GET_PAST_LAUNCHES_INFO)
const pastLaunches = useResult(result, [], (result) => result.launchesPast)
const modules = [Navigation, Pagination]
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
if(error.value?.message !== ""){
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
  <div class="body h-screen bg-base-dark">
    <p
      class="text-2xl text-right cursor-pointer fixed text-white left-3 top-2"
      @click="$router.back()"
    >
      &xlarr;
    </p>
    <header class="h-2/6 grid place-items-center">
      <h1 class="font-spacex text-2xl sm:text-5xl font-bold text-white">
        SPACEX MISSIONS
      </h1>
    </header>
    <Loader v-if="loading" />
    <main v-else class="mx-auto w-full h-4/6 px-6 sm:px-16 md:px-28">
      <swiper
        class="swiper w-full h-72"
        :modules="modules"
        :slides-per-view="4"
        :centeredSlides="true"
        :spaceBetween="30"
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
        :loop="true"
        :pagination="{ type: 'fraction' }"
        slide-active-class="active"
        :breakpoints="swiperOptions.breakpoints"
      >
        <div
          class="parallax-slider-navigation absolute top-1/2 z-40 inset-x-1 sm:inset-x-0 m-auto flex justify-between h-0"
        >
          <div
            class="h-10 sm:h-96 w-10 sm:w-20 rounded-full sm:rounded-none nav-indicator prevArrow"
          >
            <span class="active:animate-ping"> &blacktriangleleft; </span>
          </div>
          <div
            class="h-10 sm:h-96 w-10 sm:w-20 rounded-full sm:rounded-none nav-indicator nextArrow"
          >
            <span class="active:animate-ping"> &blacktriangleright; </span>
          </div>
        </div>
        <SwiperSlide
          class="launch-card"
          v-for="(launch, i) in pastLaunches"
          :key="i"
        >
          <LaunchCard :launchDetails="launch" />
        </SwiperSlide>
      </swiper>
    </main>
  </div>
</template>
<style scoped>
.swiper {
  padding-bottom: 30px;
  height: 330px;
}
.swiper-slide {
  height: 300px;
}
.swiper-pagination-fraction {
  bottom: 0;
}
.nav-indicator {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  transform: translateY(-50%);
  background: rgba(2, 44, 71, 0.863);
}
</style>
