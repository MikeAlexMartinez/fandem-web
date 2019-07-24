import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  withStyles, ExpansionPanel, ExpansionPanelSummary, Typography,
  ExpansionPanelDetails,
} from '@material-ui/core';
import { ExpandMore, CheckCircle, Alarm } from '@material-ui/icons';
import addDays from 'date-fns/addDays';
import isWithinInterval from 'date-fns/isWithinInterval';

import { gameweekDetailPropType } from '../../general-prop-types';

import styles from './GameweekAccordion.styles';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const isWithinOneDay = (deadlineTime) => {
  const deadline = new Date(deadlineTime);
  const startDate = addDays(deadline, -1);
  return isWithinInterval(new Date(), {
    start: startDate,
    end: deadline,
  });
};

const GameweekAccordion = ({
  gameweeks,
  openGameweek,
  toggleGameweek,
  classes,
}) => (
  <div className={classnames(classes.root)}>
    {(gameweeks && gameweeks.length > 0 && gameweeks.map(gameweek => (
      <ExpansionPanel
        key={gameweek.id}
        expanded={openGameweek === gameweek.fplEventId}
        onChange={(evt, expanded) => toggleGameweek(expanded ? gameweek.fplEventId : null)}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          {gameweek.isCurrent && (
            <div className={classnames(classes.marginRight)}>
              <CheckCircle color="primary" />
            </div>
          )}
          {isWithinOneDay(gameweek.deadlineTime) && (
            <div className={classnames(classes.marginRight)}>
              <Alarm />
            </div>
          )}
          <Typography className={classnames(classes.heading, classes.paddingLeft)}>
            {gameweek.name}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {gameweek.fixtures.map(fixture => (
            <Typography key={fixture.id}>{`Fixture Id: ${fixture.fixtureId}`}</Typography>
          ))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ))) || (
      <ErrorMessage message="No gameweeks loaded..." />
    )}
  </div>
);

GameweekAccordion.propTypes = {
  gameweeks: PropTypes.arrayOf(gameweekDetailPropType),
  openGameweek: PropTypes.number,
  toggleGameweek: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

GameweekAccordion.defaultProps = {
  openGameweek: -1,
};

export default withStyles(styles)(GameweekAccordion);
