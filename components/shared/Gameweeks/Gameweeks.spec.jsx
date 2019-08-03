import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';

import wait from '../../../__test__/utils/wait';

import Gameweeks from './index';
import { GAMEWEEKS_QUERY } from '../../../db/queries/fpl.queries';
import { fakeGameweeks } from '../../../__test__/data/data';
import TestQueryChild from '../../../__test__/mocks/TestQueryChild';

const successMock = [
  {
    request: {
      query: GAMEWEEKS_QUERY,
    },
    result: {
      data: {
        gameweeks: fakeGameweeks(),
      },
    },
  },
];

const errorMock = [
  {
    request: {
      query: GAMEWEEKS_QUERY,
    },
    result: {
      data: null,
      error: true,
    },
  },
];


function testGameweeksChild({ data, error, loading }) {
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  if (error) {
    return <div className="error">Error!</div>;
  }
  if (data && data.gameweeks) {
    const { gameweeks } = data;
    return (
      <div>
        {gameweeks && gameweeks.length > 0 && gameweeks.map(
          gameweek => <div key={gameweek.id} id={gameweek.id}>{gameweek.name}</div>,
        )}
      </div>
    );
  }
  return <div className="no-data">No Data found</div>;
}
testGameweeksChild.propTypes = {
  data: PropTypes.shape({
    gameweeks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })),
  }),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

describe('<GameData />', () => {
  it('renders child component with passed results', async () => {
    const wrapper = mount(
      <MockedProvider mocks={successMock} addTypename={false}>
        <Gameweeks>
          {testGameweeksChild}
        </Gameweeks>
      </MockedProvider>,
    );

    await wait(500);
    wrapper.update();
  });
  it('renders error component on error', async () => {
    const wrapper = mount(
      <MockedProvider mocks={errorMock} addTypename={false}>
        <Gameweeks>
          {testGameweeksChild}
        </Gameweeks>
      </MockedProvider>,
    );

    await wait(500);
    wrapper.update();

    const ErrorComponent = wrapper.find('div.error');
    expect(ErrorComponent.text()).toEqual('Error!');
  });
  it('renders loading component when loading', async () => {
    const wrapper = mount(
      <MockedProvider mocks={successMock} addTypename={false}>
        <Gameweeks>
          {TestQueryChild}
        </Gameweeks>
      </MockedProvider>,
    );

    const LoadingComponent = wrapper.find('div.loading');
    expect(LoadingComponent.text()).toEqual('Loading...');
  });
});
