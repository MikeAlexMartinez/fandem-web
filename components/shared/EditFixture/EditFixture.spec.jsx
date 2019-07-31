import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import WithTheme from '../../../__test__/mocks/WithTheme';
import EditFixtureComponent from './EditFixture';

import { fakeFixture } from '../../../__test__/data/data';

describe('<EditFixture />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <WithTheme>
        <EditFixtureComponent
          open
          fixture={fakeFixture()}
          handleClose={() => {}}
        />
      </WithTheme>,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
