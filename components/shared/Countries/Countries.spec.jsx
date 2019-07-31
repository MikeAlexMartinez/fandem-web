import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import CountriesComponent from './Countries';

describe('<Countries />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<CountriesComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
