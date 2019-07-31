import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import EditProfileComponent from './EditProfile';

describe('<EditProfile />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<EditProfileComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
