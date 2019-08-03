import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Select, MenuItem, OutlinedInput } from '@material-ui/core';

import styles from './ChangeGameweek.styles';
import Gameweeks from '../Gameweeks';
import ErrorMessage from '../ErrorMessage';

const ChangeGameweek = ({ gameweekId, gameweekName, updateGameweek }) => (
  <Gameweeks>
    {({ data, error, loading }) => {
      if (loading) return <div>Loading Gameweeks...</div>;
      const { gameweeks } = data;
      if (error || !gameweeks || gameweeks.length < 1) return <ErrorMessage message="Unable to load gameweeks" />;
      return (
        <Select
          value={gameweekId}
          onChange={evt => updateGameweek(evt.target.value)}
          input={<OutlinedInput fullWidth labelWidth={0} name="gameweek" id="outlined-gameweekinput" />}
        >
          <MenuItem value={gameweekId}>{gameweekName}</MenuItem>
          {gameweeks.map(gameweek => (
            <MenuItem key={gameweek.id} value={gameweek.id}>{gameweek.name}</MenuItem>
          ))}
        </Select>
      );
    }}
  </Gameweeks>
);

ChangeGameweek.propTypes = {
  // classes: PropTypes.object.isRequired,
  gameweekId: PropTypes.string.isRequired,
  gameweekName: PropTypes.string.isRequired,
  updateGameweek: PropTypes.func.isRequired,
};

export default withStyles(styles)(ChangeGameweek);
