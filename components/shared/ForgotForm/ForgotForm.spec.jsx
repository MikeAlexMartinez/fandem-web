import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ForgotFormComponent from './ForgotForm';

describe('<ForgotForm />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ForgotFormComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
