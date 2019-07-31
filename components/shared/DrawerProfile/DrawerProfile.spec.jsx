import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import WithTheme from '../../../__test__/mocks/WithTheme';

import DrawerProfile from './DrawerProfile';

describe('<DrawerProfile />', () => {
  it('renders and matches snapshot', async () => {
    const wrapper = mount(
      <MockedProvider>
        <WithTheme>
          <DrawerProfile />
        </WithTheme>
      </MockedProvider>,
    );

    const drawerProfile = wrapper.find('DrawerProfile');

    expect(toJSON(drawerProfile)).toMatchSnapshot();
  });
});
