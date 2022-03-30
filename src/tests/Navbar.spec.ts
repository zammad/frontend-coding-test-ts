import { mount } from '@cypress/vue'
import Navbar from '../components/Navbar.vue'

describe('Navbar component mounts and routes to task page', () => {
  it('renders the navbar', () => {
    mount(Navbar)
  })

  it('routes to task page', () => {
    mount(Navbar)
    cy.get(".nav-links").find("a").eq(1).should("contain","Task").click()
    cy.location("pathname").should("eq","/task")
  })
})