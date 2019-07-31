import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import GlobalStylesComponent from './GlobalStyles';

describe('<GlobalStyles />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<GlobalStylesComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
