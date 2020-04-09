import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Header } from './Header';

describe('Header Render', () => {
  it('Middle navigation list items correctly renders', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('li')).toHaveLength(5);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
