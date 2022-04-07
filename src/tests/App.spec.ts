import { mount } from '@cypress/vue'
import App from '../App.vue'

describe('App component mounts', () => {
  it('renders the homepage', () => {
    mount(App)
  })
})
