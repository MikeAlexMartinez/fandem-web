import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import IsAdminComponent from './IsAdmin';

describe('<IsAdmin />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<IsAdminComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
