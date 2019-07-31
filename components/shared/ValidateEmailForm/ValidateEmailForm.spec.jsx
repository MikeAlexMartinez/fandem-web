import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ValidateEmailFormComponent from './ValidateEmailForm';

describe('<ValidateEmailForm />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ValidateEmailFormComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
