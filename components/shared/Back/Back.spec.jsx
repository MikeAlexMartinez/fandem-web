import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import BackComponent from './Back';

describe('<Back />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<BackComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
