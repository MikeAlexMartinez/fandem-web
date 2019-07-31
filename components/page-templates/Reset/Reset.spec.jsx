import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import WithTheme from '../../../__test__/mocks/WithTheme';import ResetComponent from './Reset';

describe('<ResetComponent  />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <WithTheme>
        <ResetComponent  />
      </WithTheme>,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
