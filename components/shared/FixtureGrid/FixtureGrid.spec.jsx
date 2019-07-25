import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import FixtureGridComponent from './FixtureGrid';

describe('<FixtureGrid />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<FixtureGridComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
