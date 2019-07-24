import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import GameweekInfoComponent from './index';

describe('<GameweekInfo />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<GameweekInfoComponent title="test title" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
