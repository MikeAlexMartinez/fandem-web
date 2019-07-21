import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import TemplateComponent from './Template';

describe('<Template />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<TemplateComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
