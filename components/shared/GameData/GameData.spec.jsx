import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';

import wait from '../../../__test__/utils/wait';

import GameData from './index';
import { GAME_DATA_QUERY } from '../../../db/queries/fpl.queries';
import { fakeGameData } from '../../../__test__/data/data';
import TestQueryChild from '../../../__test__/mocks/TestQueryChild';

const loadingMock = [
  {
    request: {
      query: GAME_DATA_QUERY,
    },
    result: {
      loading: true,
    },
  },
];

const seasonId = 'testSeasonId';
const successMock = [
  {
    request: {
      query: GAME_DATA_QUERY,
    },
    result: {
      data: fakeGameData(seasonId),
    },
  },
];

const errorMock = [
  {
    request: {
      query: GAME_DATA_QUERY,
    },
    result: {
      error: true,
    },
  },
];

describe('<GameData />', () => {
  it('renders child component with passed results', async () => {
    const wrapper = mount(
      <MockedProvider mocks={successMock} addTypename={false}>
        <GameData>
          {TestQueryChild}
        </GameData>
      </MockedProvider>,
    );

    await wait(500);
    wrapper.update();

    const SeasonComponent = wrapper.find(`div#${seasonId}`);
    expect(SeasonComponent.text()).toEqual('Premier League');
  });
});
