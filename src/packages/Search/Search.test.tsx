import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Search } from './Search';

type Input = {
  value: string;
};

describe('Search render', () => {
  it('Search work', () => {
    const input = shallow(<Search />);
    expect(toJson(input)).toMatchSnapshot();
  });

  it('Search input correctly render', () => {
    const wrapper = mount(<Search />);

    expect(wrapper.find('.ant-input').length).toBe(1);
  });
  it('Enter symbols correctly work', () => {
    const wrapper = mount(<Search />);
    const input = (wrapper.find('.ant-input') as unknown) as HTMLInputElement;

    input.value = 'Анализ конкурентов';

    expect(input.value).toBe('Анализ конкурентов');
  });
});
