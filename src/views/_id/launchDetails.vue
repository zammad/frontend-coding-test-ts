<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css"
const modules = [Navigation]
</script>
<template>
<div class="container px-28">
    <header class="h-48">
    <img src="" class="w-full h-full" alt="Image showing launch">
</header>
<main>
    <p>{{$route.params.id}}</p>
    <p class="text-3xl font-semibold">Mission Name</p>
    <p class="text-base font-normal">A spacex mission</p>
    <p class="text-base font-normal">Launch Date: ozumba.substr(0, 10)</p>
    <p class="text-base font-normal">Launch Site: ozumba.substr(0, 10)</p>
    <p class="text-base font-normal">Articles:</p>
    <p v-for="n in 3">art {{n}}</p>
    <p class="text-base font-normal">Videos:</p>
    <Swiper :modules="modules" navigation :slides-per-view="4" :space-between="30">
        <SwiperSlide v-for=" n in 12">
            <div class="bg-base-purple-500 text-white p-3 h-40">
                video {{n}}
            </div>
        </SwiperSlide>
    </Swiper>
    <p class="text-base font-normal">Images:</p>
    <Swiper :modules="modules" navigation :slides-per-view="4" :space-between="30">
        <SwiperSlide v-for=" n in 12">
            <div class="bg-base-orange-500 text-white p-3 h-40">
                image {{n}}
            </div>
        </SwiperSlide>
    </Swiper>
    
</main>
</div>
</template>
<style>
</style>