import { shallow } from 'enzyme';
import React from 'react';

test('should pass', () => {
  const wrapper = shallow(<p>Hello, World</p>);
  expect(wrapper.text()).toBe('Hello, World');
});
