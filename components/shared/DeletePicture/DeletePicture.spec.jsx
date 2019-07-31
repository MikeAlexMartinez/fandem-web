import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import DeletePictureComponent from './DeletePicture';

describe('<DeletePicture />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<DeletePictureComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
