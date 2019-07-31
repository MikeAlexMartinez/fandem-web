import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import PremTeamsComponent from './PremTeams';

describe('<PremTeams />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<PremTeamsComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
