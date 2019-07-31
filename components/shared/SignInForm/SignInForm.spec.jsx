import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import SignInFormComponent from './SignInForm';

describe('<SignInForm />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<SignInFormComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
