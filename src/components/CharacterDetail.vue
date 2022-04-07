<template>
  <div
    class="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 grid flex content-between"
  >
    <div class="my-4">
      <a href="#" class="flex justify-center">
        <img class="rounded-t-lg" v-bind:src="props.character.image" alt="" />
      </a>
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ props.character.name }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ props.character.occupation }}
      </p>
    </div>
    <div class="px-10 pt-10 grid grid-cols-2 gap-4">
      <p class="flex mb-3 font-normal text-gray-700 dark:text-gray-400">
        <span
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-1"
        >
          Gender:
        </span>
        {{ props.character.gender }}
      </p>
      <p class="flex mb-3 font-normal text-gray-700 dark:text-gray-400">
        <span
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-1"
        >
          Age:
        </span>
        {{ props.character.age }}
      </p>
      <p class="flex mb-3 font-normal text-gray-700 dark:text-gray-400">
        <span
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-1"
        >
          Hair Color:
        </span>
        {{ props.character.hairColor }}
      </p>
      <p class="flex mb-3 font-normal text-gray-700 dark:text-gray-400">
        <span
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-1"
        >
          First Episode:
        </span>
        {{ props.character.firstEpisode }}
      </p>
      <p class="flex mb-3 font-normal text-gray-700 dark:text-gray-400">
        <span
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-1"
        >
          Voiced By:
        </span>
        {{ props.character.voicedBy }}
      </p>
    </div>
    <div v-if="relatives.length > 0" class="p-10 rounded-lg">
      <div class="flex justify-between items-center mb-4">
        <h5
          class="text-xl font-bold leading-none text-gray-900 dark:text-white"
        >
          Relatives
        </h5>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li v-for="relative of relatives" v-bind:key="relative.name">
            <div class="flex items-center space-x-4 py-3 sm:py-4">
              <div class="flex-shrink-0">
                <div
                  v-if="relative.image"
                  class="flex justify-center relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
                >
                  <img
                    class="h-16 rounded-full"
                    v-bind:src="relative.image"
                    alt="Relative Image"
                  />
                </div>
                <div
                  v-else
                  class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
                >
                  <svg
                    class="absolute w-12 h-12 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-medium text-gray-900 truncate dark:text-white">
                  {{ relative.name }}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {{ relative.occupation }}
                </p>
              </div>
              <router-link
                v-if="relative.id"
                v-bind:key="relative.id"
                v-bind:to="`/${relative.id}/characterDetails`"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                View Details
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  character: {
    type: Object,
    required: true,
  },
  relatives: {
    type: Array,
    required: true,
  },
})
</script>
