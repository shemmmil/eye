import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { Money } from './Money';

describe('Money Render', () => {
  it('Money render correctly', () => {
    const wrapper = mount(<Money />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
