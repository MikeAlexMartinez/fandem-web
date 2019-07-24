import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Typography, withStyles } from '@material-ui/core';

import { gameweekPropType } from '../../general-prop-types';

import GameweekInfo from '../GameweekInfo';

import styles from './GameplayDataSummary.styles';

const GameplayDataSummary = ({
  classes, previousGameweek, currentGameweek, nextGameweek, seasonInfo, toggleGameweek,
}) => (
  <div className={classnames(classes.seasonInfoContainer, 'flex column jc-start ai-stretch')}>
    <div className={classnames(classes.seasonInfo, 'flex row jc-sb ai-end')}>
      <Typography variant="h4">{seasonInfo.competition}</Typography>
      <Typography variant="h5" className={classnames(classes.compYear)}>{seasonInfo.label}</Typography>
    </div>
    <div className={classnames('flex row jc-sb ai-center')}>
      <GameweekInfo gameweek={previousGameweek} title="Previous Gameweek" toggleGameweek={toggleGameweek} />
      <GameweekInfo gameweek={currentGameweek} title="Current Gameweek" toggleGameweek={toggleGameweek} />
      <GameweekInfo gameweek={nextGameweek} title="Next Gameweek" toggleGameweek={toggleGameweek} />
    </div>
  </div>
);

GameplayDataSummary.propTypes = {
  previousGameweek: gameweekPropType,
  currentGameweek: gameweekPropType,
  nextGameweek: gameweekPropType,
  seasonInfo: PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    competition: PropTypes.string.isRequired,
  }),
  classes: PropTypes.object,
  toggleGameweek: PropTypes.func.isRequired,
};

export default withStyles(styles)(GameplayDataSummary);
