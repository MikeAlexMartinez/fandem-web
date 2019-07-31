import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import WithTheme from '../../../__test__/mocks/WithTheme';
import GlobalStylesComponent from './GlobalStyles';

describe('<GlobalStyles />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <WithTheme>
        <GlobalStylesComponent />
      </WithTheme>,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
