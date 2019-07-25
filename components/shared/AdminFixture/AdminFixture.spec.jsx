import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import AdminFixtureComponent from './AdminFixture';

describe('<AdminFixture />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<AdminFixtureComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
