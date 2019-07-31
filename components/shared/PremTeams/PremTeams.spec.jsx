import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import WithTheme from '../../../__test__/mocks/WithTheme';import PremTeamsComponent from './PremTeams';

describe('<PremTeamsComponent  />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <WithTheme>
        <PremTeamsComponent>
          {() => (
            <div>Hey!</div>
          )}
        </PremTeamsComponent>
      </WithTheme>,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
