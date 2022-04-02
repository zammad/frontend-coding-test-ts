import { mount} from '@cypress/vue'
import LaunchCard from '../components/LaunchCard.vue'

describe('LaunchCard component mounts', () => {

  it('renders the Launch Card which should contain a button before query', () => {
    const launchDetails = {
      mission_name: "Saturn 5",
      links: {
        flickr_images: ["https://live.staticflickr.com/65535/50618376731_43ddaab1b8_o.jpg"],
      },
      launch_success: true,
      id: "100",
      launch_year: "2020",
    }
    mount(LaunchCard,{
      props: {
        launchDetails
      },
    })
    cy.get(".details").find(".learn-more")
    
    
  })
})