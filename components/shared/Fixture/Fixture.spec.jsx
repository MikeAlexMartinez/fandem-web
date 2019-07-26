import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import FixtureComponent from './Fixture';

import { fakeFixture } from '../../../__test__/data/data';

describe('<Fixture />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <FixtureComponent
        fixture={fakeFixture()}
      />,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
