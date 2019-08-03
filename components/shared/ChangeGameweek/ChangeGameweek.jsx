import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import styles from './ChangeGameweek.styles';
import UnselectedGameweeks from '../UnselectedGameweeks';
import ErrorMessage from '../ErrorMessage';
import Autocomplete from '../Autocomplete';

const ChangeGameweek = ({ classes, gameweekId, gameweekName, updateGameweek }) => (
  <UnselectedGameweeks
    gameweekId={gameweekId}
  >
    {(unselectedGameweeks, { error, loading }) => {
      if (error) return <ErrorMessage message="Unable to load gameweeks" />;
      if (loading) return <div>Loading...</div>;
      return (
        <Autocomplete
          initialValue={gameweekName}
          list={unselectedGameweeks.data.gameweek}
          handleChange={change => updateGameweek(change)}
          placeholder="Select A Gameweek"
          label="Gameweek"
        />
      );
    }}
  </UnselectedGameweeks>
);

ChangeGameweek.propTypes = {
  classes: PropTypes.object.isRequired,
  gameweekId: PropTypes.number.isRequired,
  gameweekName: PropTypes.string.isRequired,
  updateGameweek: PropTypes.func.isRequired,
};

export default withStyles(styles)(ChangeGameweek);
