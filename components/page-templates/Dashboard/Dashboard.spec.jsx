import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import DashboardComponent from './Dashboard';

describe('<Dashboard />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<DashboardComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
