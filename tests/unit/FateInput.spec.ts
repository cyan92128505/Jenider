import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import FateInput from '@/components/FateInput.vue';

describe('FateInput.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(FateInput, {
      props: { msg },
    });
    expect(wrapper.text()).to.include(`${msg} - Fate`);
  });
});
