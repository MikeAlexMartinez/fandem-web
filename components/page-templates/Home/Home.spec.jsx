import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import HomeComponent from './Home';

describe('<Home />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<HomeComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
