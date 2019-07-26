import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import EditFixtureComponent from './EditFixture';

import { fakeFixture } from '../../../__test__/data/data';

describe('<EditFixture />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <EditFixtureComponent
        open
        fixture={fakeFixture()}
        handleClose={() => {}}
      />,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
