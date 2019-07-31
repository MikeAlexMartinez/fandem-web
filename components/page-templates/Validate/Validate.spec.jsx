import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ValidateComponent from './Validate';

describe('<Validate />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ValidateComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
