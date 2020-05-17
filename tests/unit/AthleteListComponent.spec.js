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
    const athletes = [];
    const wrapper = mount(AthleteList, {
      propsData: { athletes },
    });
    expect(wrapper.text()).to.include(athletes);
  });
});
