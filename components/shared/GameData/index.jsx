import React from 'react';
import { Query } from 'react-apollo';
import { GAME_DATA_QUERY } from '../../../db/queries/fpl.queries';

const GameData = props => (
  <Query {...props} query={GAME_DATA_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

export default GameData;
