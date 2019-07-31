import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ProfilePictureControlsComponent from './ProfilePictureControls';

describe('<ProfilePictureControls />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ProfilePictureControlsComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
