import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import GameplayInfoComponent from './GameplayInfo';

describe('<GameplayInfo />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<GameplayInfoComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
