import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import WithTheme from '../../../__test__/mocks/WithTheme';
import ChangeGameweekComponent from './ChangeGameweek';

describe('<ChangeGameweekComponent  />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <WithTheme>
        <ChangeGameweekComponent />
      </WithTheme>,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
