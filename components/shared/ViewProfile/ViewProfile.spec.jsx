import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ViewProfileComponent from './ViewProfile';

describe('<ViewProfile />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ViewProfileComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
