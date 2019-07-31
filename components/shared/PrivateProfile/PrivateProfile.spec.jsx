import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import PrivateProfileComponent from './PrivateProfile';

describe('<PrivateProfile />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<PrivateProfileComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
