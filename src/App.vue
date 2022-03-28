<template>
  <div
    class="min-w-full min-h-screen font-sans text-sm antialiased bg-gray-100 text-center"
  >
    <router-view />
    <teleport to="#popups">
      <SnackContainer />
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { provideClient } from '@urql/vue'
import SnackContainer from './components/layout/SnackContainer/SnackContainer.vue'
import provideSnack from './components/layout/SnackContainer/snack.provider'

provideClient({ url: 'https://api.react-finland.fi/graphql' })
provideSnack()
</script>
