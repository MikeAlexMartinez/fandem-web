import React from 'react';
import { Query } from 'react-apollo';
import { GAME_DATA_QUERY } from '../../../db/queries/fpl.queries';

const GameData = ({ children }) => (
  <Query query={GAME_DATA_QUERY}>
    {payload => children(payload)}
  </Query>
);

export default GameData;
