import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ResetFormComponent from './ResetForm';

describe('<ResetForm />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ResetFormComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
