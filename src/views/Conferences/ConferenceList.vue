<template>
  <div class="justify-center min-w-md px-16 py-10">
    <h1 class="font-extrabold tracking-tigh text-3xl leading-10">
      Conference cards
    </h1>
    <ul v-if="!fetching" class="flex flex-col gap-2">
      <router-link
        v-for="conference in conferences?.conferences || []"
        v-bind:key="conference.id"
        v-bind:to="{ name: 'ConferencePage', params: { id: conference.id } }"
      >
        <ConferenceCard
          v-bind:name="conference.name"
          v-bind:start-date="conference.startDate"
          v-bind:end-date="conference.endDate"
          v-bind:slogan="conference.slogan"
        ></ConferenceCard>
      </router-link>
    </ul>
    <div v-else>Loading conferences...</div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { useListConferencesQuery } from '../../generated/graphql'
import useFetchingSnack from '../../hooks/fetchingSnack.hook'
import { SnackProvider } from '../../components/layout/SnackContainer/snack.provider'
import ConferenceCard from '../../components/ConferenceCard/ConferenceCard.vue'

const {
  data: conferences,
  fetching,
  error,
} = useListConferencesQuery({
  requestPolicy: 'network-only',
})

const { showSnack } = inject(SnackProvider)

useFetchingSnack(fetching, error)
</script>
