import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import AddPictureComponent from './AddPicture';

describe('<AddPicture />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <AddPictureComponent
        open
        handleClose={() => {}}
        title="Add Picture Test"
      />,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
