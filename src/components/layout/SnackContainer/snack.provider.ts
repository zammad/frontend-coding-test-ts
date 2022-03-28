import { provide, ref } from 'vue'

export const SnackProvider = Symbol('snack')

export type SnackProviderType = ReturnType<typeof provideSnack>

export type Snack = {
  text: string
  duration: number
}

export default function provideSnack() {
  const snacks = ref<Snack[]>([])

  function showSnack(snack: Snack) {
    snacks.value?.push(snack)
    setTimeout(() => {
      snacks.value?.shift()
    }, snack.duration || 3000)
  }

  const state = {
    snacks,
    showSnack,
  }

  provide(SnackProvider, state)

  return state
}
