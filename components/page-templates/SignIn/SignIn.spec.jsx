import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import SignInComponent from './SignIn';

describe('<SignIn />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<SignInComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
