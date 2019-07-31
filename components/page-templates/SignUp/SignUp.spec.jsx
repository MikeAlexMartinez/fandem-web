import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import SignUpComponent from './SignUp';

describe('<SignUp />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<SignUpComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
