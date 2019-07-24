import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Typography, CardContent, withStyles,
} from '@material-ui/core';
import format from 'date-fns/format';
import { gameweekPropType } from '../../general-prop-types';

import styles from './GameweekInfo.styles';

const GameweekInfo = ({ gameweek, title, toggleGameweek }) => (
  <Card>
    {(!gameweek && (
      <CardContent>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">No gameweek information available</Typography>
      </CardContent>
    )) || (
      <CardContent onClick={() => toggleGameweek(gameweek.fplEventId)}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{gameweek.name}</Typography>
        <Typography variant="body2">{`Deadline: ${format(new Date(gameweek.deadlineTime), 'dd/MM/yyyy h:mma')}`}</Typography>
      </CardContent>
    )}
  </Card>
);

GameweekInfo.propTypes = {
  title: PropTypes.string.isRequired,
  gameweek: gameweekPropType,
  toggleGameweek: PropTypes.func.isRequired,
};

export default withStyles(styles)(GameweekInfo);
