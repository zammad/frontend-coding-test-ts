<script lang="ts" setup>

import LaunchCard from '../components/LaunchCard.vue';
import Loader from '../components/Loader.vue';
import { useQuery, useResult } from '@vue/apollo-composable';
import { GET_PAST_LAUNCHES_INFO } from '../graphql';
const {loading,error,result} = useQuery(GET_PAST_LAUNCHES_INFO)
const pastLaunches = useResult(result,[],(result) => result.launchesPast)
</script>
<template>
<div class="body h-full bg-base-white">
    <header class="h-1/4">

    </header>
    <Loader v-if="loading"/>
    <main v-else>
        <div class="main w-full grid grid-cols-5 gap-4 bg-base-purple max-w-5xl mx-auto ">
            <div class="launch-card"  v-for="(launch, i) in pastLaunches" :key="i" >
                <LaunchCard :launchDetails="launch" />
            </div>
        </div>
    </main>
</div>
</template>
<style>
</style>