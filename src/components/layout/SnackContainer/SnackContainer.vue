<template>
  <div class="fixed top-6 right-2">
    <transition-group
      v-bind:enter-to-class="$style.enter_to"
      v-bind:enter-active-class="$style.active_transition"
      v-bind:leave-active-class="$style.active_transition"
    >
      <div
        v-for="(snack, i) in snacks"
        v-bind:key="i"
        v-bind:class="$style.snack"
        class="py-2 px-4 bg-white mt-6 rounded"
      >
        {{ snack.text }}
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { SnackProvider } from './snack.provider'

const { snacks } = inject(SnackProvider)
</script>

<style module>
.snack {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.enter_to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.active_transition {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
</style>
