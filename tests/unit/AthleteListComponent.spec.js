/* eslint-disable */
import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import AthleteList from '@/components/AthleteList.vue';

describe('AthleteList.vue', () => {
  it('renders props.athletes when passed empty array', () => {
    const athletes = [];
    const wrapper = mount(AthleteList, {
      propsData: { athletes },
    });
    expect(wrapper.props('athletes')).to.be.empty;
  });

  it('renders props.athletes when passed array with values', () => {
    const athletes = [
      {
        id: 1,
        city: 'Barcelona',
        year: '2012',
        athletes: [
          {
            id: 1,
            name: "Arianna",
            surname: "Fontana",
            photo: "some_base64_string",
            score: 9
          }
        ]
      }
    ];
    const wrapper = mount(AthleteList, {
      propsData: { athletes },
    });
    const headline = wrapper.findAll('.game-headline');
    const athleteCard = wrapper.findAll('.athlete-bottom-card');
    expect(headline.contains('h2')).to.be.true;
    expect(headline.at(0).text()).to.contain('Barcelona 2012');
    expect(athleteCard.at(0).text()).to.contain('Arianna Fontana');
  });
});
