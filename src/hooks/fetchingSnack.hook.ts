import { inject, Ref, watch } from 'vue'
import { CombinedError } from '@urql/vue'
import {
  SnackProvider,
  SnackProviderType,
} from '../components/layout/SnackContainer/snack.provider'

export default function useFetchingSnack(
  fetching: Ref<boolean>,
  error: Ref<CombinedError | undefined>,
) {
  const { showSnack } = inject(SnackProvider) as SnackProviderType

  watch(fetching, () => {
    if (!error.value) showSnack({ text: 'Loaded', duration: 3000 })
    else showSnack({ text: `Error:${error.value}`, duration: 3000 })
  })
}
