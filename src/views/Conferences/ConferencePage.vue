<template>
  <div class="justify-center w-full m-auto p-10">
    <h1 class="font-extrabold tracking-tigh text-3xl leading-10">
      Conference card
    </h1>
    <section
      v-if="!fetching"
      class="flex flex-col gap-16 w-full justify-between"
    >
      <section
        class="flex flex-col gap-4 justify-start rounded shadow-lg p-16 bg-gray-50"
      >
        <h2 class="text-xl font-bold">{{ conference.name }}</h2>
        <div>{{ conference.slogan }}</div>
        <a
          v-bind:title="conference.name"
          v-bind:href="conference.websiteUrl"
          class="text-blue-500"
          target="_blank"
          rel="noopener"
        >
          HomePage
        </a>
        <div class="flex justify-center gap-6">
          <div>from: {{ conference.startDate }}</div>
          <div>to: {{ conference.startDate }}</div>
        </div>
      </section>
      <section
        v-if="conference.allSpeakers?.length"
        class="flex flex-col gap-4 justify-end rounded shadow-lg p-8 flex-1 bg-gray-50"
      >
        <ul class="flex flex-col gap-2">
          <li
            v-for="(speaker, index) in conference.allSpeakers"
            v-bind:key="index"
            class="flex justify-start gap-6 px-8 py-4 shadow-8 border-2 mb-4 last:mb-0 hover:bg-blue-100 rounded"
          >
            <img
              v-if="speaker.image?.url"
              v-bind:src="speaker.image.url"
              v-bind:title="speaker.image.title"
              v-bind:alt="speaker.image.title"
              class="rounded-full w-32 h-32"
            />
            <div class="flex flex-col w-full gap-6 h-32">
              <div class="font-bold text-gray-600">{{ speaker.name }}</div>
              <div>{{ speaker.aboutShort }}</div>
            </div>
          </li>
        </ul>
      </section>
    </section>
    <div v-else>Loading conference...</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useGetConferenceQuery } from '../../generated/graphql'
import useFetchingSnack from '../../hooks/fetchingSnack.hook'

const { params } = useRoute()

const { data, fetching, error } = useGetConferenceQuery({
  variables: { id: params?.id || '' },
  requestPolicy: 'network-only',
})

const conference = computed(() => data.value?.conference || {})

useFetchingSnack(fetching, error)
</script>
