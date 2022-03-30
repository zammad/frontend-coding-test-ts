import { mount } from '@cypress/vue'
import LaunchCard from '../components/LaunchCard.vue'
describe('LaunchCard component mounts', () => {
  it('renders the Launch Card which should contain a button before query', () => {
    mount(LaunchCard)
    cy.get("a").should("contain.text","Learn More")
    cy.get(".card>div>h5>span").should("contain.text","Mission")
  })
})