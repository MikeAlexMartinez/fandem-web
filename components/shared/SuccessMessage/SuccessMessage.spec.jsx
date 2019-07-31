import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import SuccessMessageComponent from './SuccessMessage';

describe('<SuccessMessage />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<SuccessMessageComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
