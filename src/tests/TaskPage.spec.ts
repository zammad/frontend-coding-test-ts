import { mount } from '@cypress/vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import LaunchCardVue from '../components/LaunchCard.vue'
import Task from '../views/Task.vue'


describe('Task component mounts', () => {
  it('renders the TaskPage', () => {
    mount(Task)
  })
  it('routes back to the home page', () => {
    mount(Task)
    cy.get(".body").find("p").first().click()
    cy.location("pathname").should("eq","/")
  })
  it("should contain 10 launch cards in a swiper carousel component",() => {
    mount(Task)
    const swiper = mount(Swiper)
    const slides = mount(SwiperSlide)
    const launchCard = mount(LaunchCardVue)
    swiper.should("contain",slides)
    slides.should("contain",launchCard)
    slides.should("have.length.at.least",10)
  })
})