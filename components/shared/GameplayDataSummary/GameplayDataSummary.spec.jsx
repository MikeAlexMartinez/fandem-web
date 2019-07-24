import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import GameplayDataSummaryComponent from './index';

describe('<GameplayDataSummary />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <GameplayDataSummaryComponent
        toggleGameweek={() => {}}
      />,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
