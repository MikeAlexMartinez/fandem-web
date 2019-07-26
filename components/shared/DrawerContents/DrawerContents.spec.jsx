import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import DrawerContentsComponent from './DrawerContents';

describe('<DrawerContents />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <DrawerContentsComponent
        toggleDrawer={() => {}}
      />,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
