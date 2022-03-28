import { mount } from '@vue/test-utils'
import ConferenceCard from './ConferenceCard.vue'

test('Should proceed props properly', async () => {
  expect(ConferenceCard).toBeTruthy()

  const wrapper = mount(ConferenceCard, {
    props: {
      name: 'Test name',
      endDate: '2022-03-22',
    },
  })

  expect(wrapper.get('li').find('div').text()).toContain('Test name')
  expect(wrapper.get('li').findAll('div')?.[2]?.text()).toContain('2022-03-22')
  expect(wrapper.get('li').findAll('div')?.[1]?.text()).toContain('')
  expect(wrapper.get('li').findAll('div')?.[3]?.text()).toContain('')
})
