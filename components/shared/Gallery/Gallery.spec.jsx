import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import GalleryComponent from './Gallery';

describe('<Gallery />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<GalleryComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
