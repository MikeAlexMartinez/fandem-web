import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ResetComponent from './Reset';

describe('<Reset />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ResetComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
