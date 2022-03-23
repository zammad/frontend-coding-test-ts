<script lang="ts" setup>import { useQuery, useResult } from '@vue/apollo-composable';
import { GET_ROCKET_INFO } from '../graphql';
import LaunchCard from '../components/LaunchCard.vue';
import Loader from '../components/Loader.vue';

const {loading,error,result} = useQuery(GET_ROCKET_INFO)
const pastLaunches = useResult(result,[],(result) => result.launchesPast)
</script>
<template>
<div class="body h-full">
    <header class="h-1/4">

    </header>
    <main>
        <div class="main w-full grid grid-cols-5 gap-4 bg-base-purple max-w-5xl mx-auto">
            <div class="launch-card" >
                <LaunchCard :past-launches="pastLaunches"/>
            </div>
        </div>
    </main>
    <!-- <Loader v-if="loading"/> -->
</div>
</template>
<style>
</style>