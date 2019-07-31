import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import BackgroundComponent from './Background';

describe('<Background />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<BackgroundComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
