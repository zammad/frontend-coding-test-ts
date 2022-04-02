import { mount } from '@cypress/vue'
import AppVue from '../App.vue'
import Navbar from '../components/Navbar.vue'

describe('Navbar component mounts and routes to task page', () => {
  it('renders the navbar', () => {
    // mount(AppVue)
    mount(Navbar)
  })

  it('Navigation links exist', () => {
    mount(Navbar)
    cy.get(".nav-links").find(".home")
    cy.get(".nav-links").find(".task")
  })
})