import { mount } from '@cypress/vue'
import CharacterCard from '../components/CharacterCard.vue'

describe('CharacterCard component mounts', () => {
  it('renders the Launch Card which should contain a button before query', () => {
    const character = {
      id: 5,
      name: 'Al',
      image: 'https://bobsburgers-api.herokuapp.com/images/characters/5.jpg',
      gender: 'Male',
      age: '70s',
      occupation: 'Retired',
      firstEpisode: '"Crawl Space"',
      voicedBy:
        'H. Jon Benjamin ("Crawl Space"), Sam Seder ("It Snakes a Village")',
      url: 'https://bobsburgers-api.herokuapp.com/characters/5',
    }
    mount(CharacterCard, {
      props: {
        character,
        relatives: [],
      },
    })
    cy.get('.read-more').find('.link-read-more')
  })
})
