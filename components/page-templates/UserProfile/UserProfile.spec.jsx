import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import UserProfileComponent from './UserProfile';

describe('<UserProfile />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<UserProfileComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
