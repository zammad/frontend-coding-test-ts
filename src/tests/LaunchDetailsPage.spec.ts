import { mount } from '@cypress/vue'
import LaunchDetails from '../views/_id/LaunchDetails.vue'


describe('LaunchDetails component mounts', () => {
    it('renders the Launch DetailsPage with informations', () => {
        mount(LaunchDetails, {
            props: {
                id: "100",
                links: {
                    flickr_images: ["https://live.staticflickr.com/65535/50618376671_ba4e60af7c_o.jpg"],
                    article_link: "article link",
                    video_link: "video link"
                },
                launch_success: true,
                launch_site: {
                    site_name_long: "omega xlr"
                },
                launch_date_local: "2020-10-24T11:31:00-04:00",
                rocket: {
                    rocket_name: "Saturn 5",
                    rocket: {
                        active: true,
                        description: "An active rocket named Saturn 5",
                    }
                },
                details: "The details of the rockets description",
                mission_name: "Space x",
            },
            
        })
        cy.location("pathname").should("eq", "/:id/launchDetails")
        cy.get('[data-cy=mission_name]').contains('Space')
        cy.get('[data-cy=launch_details]').contains("The details of the rockets description")
        cy.get('[data-cy=launch_date]').contains("2020-10-24T11:31:00-04:00")
        cy.get('[data-cy=launch_site]').contains("omega xlr")
        cy.get('[data-cy=mission_success]').contains("Success")
        cy.get('[data-cy=rocket_name]').contains("Saturn 5")
        cy.get('[data-cy=rocket_description]').contains("An active rocket named Saturn 5")
        cy.get('[data-cy=rocket_status]').contains("Active")
    })
    it('routes back to the task page', () => {
        mount(LaunchDetails)
        cy.get(".launch-details").find("p").first().click()
        cy.location("pathname").should("eq", "/task")
    })

})