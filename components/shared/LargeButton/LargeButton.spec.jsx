import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import WithTheme from '../../../__test__/mocks/WithTheme';import LargeButtonComponent from './LargeButton';

describe('<LargeButton />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <LargeButtonComponent
        text="Test Prop 1"
        type="Test Prop 2"
        variant="Test Prop 3"
        handler={() => {}}
      />,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
