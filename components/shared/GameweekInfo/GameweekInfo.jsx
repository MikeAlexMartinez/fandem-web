import React from 'react';
import PropTypes from 'prop-types';

import {
  Card, Typography, CardContent,
} from '@material-ui/core';

import format from 'date-fns/format';
import { gameweekPropType } from '../../general-prop-types';

const GameweekInfo = ({ gameweek, title }) => (
  <Card>
    {(!gameweek && (
      <CardContent>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">No gameweek information available</Typography>
      </CardContent>
    )) || (
      <CardContent>
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
};

export default GameweekInfo;
