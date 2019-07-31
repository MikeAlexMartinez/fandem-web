import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import AutocompleteComponent from './Autocomplete';

describe('<Autocomplete />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<AutocompleteComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
