import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ForgotComponent from './Forgot';

describe('<Forgot />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ForgotComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
