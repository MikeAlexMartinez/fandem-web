import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ProfilePictureComponent from './ProfilePicture';

describe('<ProfilePicture />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ProfilePictureComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
