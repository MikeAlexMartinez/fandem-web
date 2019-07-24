import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import GameweekAccordionComponent from './GameweekAccordion';

import { fakeGameData } from '../../../__test__/data/data';

const gameData = fakeGameData('testSeasonId');
const gameweeks = gameData[0].events;

describe('<GameweekAccordion />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <GameweekAccordionComponent
        gameweeks={gameweeks}
        openGameweek={1}
        toggleGameweek={() => {}}
      />,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
