import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { IconButton, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Edit, CheckCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import format from 'date-fns/format';

import EditFixture from '../EditFixture';

import styles from './Fixture.styles';

import { fixturePropType } from '../../general-prop-types';
import { determineFixtureStatus, fixtureStatus } from '../../../utils/fixture-status';

class Fixture extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    // width: PropTypes.string.isRequired,
    fixture: fixturePropType.isRequired,
  };

  state = {
    editFixture: false,
  };

  openDialog = (fixture) => {
    this.setState(prevState => ({
      ...prevState,
      editFixture: true,
      fixtureToEdit: fixture,
    }));
  };

  closeDialog = () => {
    this.setState(prevState => ({
      ...prevState,
      editFixture: false,
      fixtureToEdit: null,
    }));
  };

  render() {
    const { classes, fixture } = this.props;
    const { editFixture } = this.state;
    // console.log(`Width: ${width}`);
    const {
      kickoffTime,
      finished,
      minutes,
      teamHScore,
      teamAScore,
      teamH: { homeTeam: { name: homeName } },
      teamA: { awayTeam: { name: awayName } },
    } = fixture;
    const status = determineFixtureStatus({ minutes, finished });
    return (
      <div className={classnames(classes.fixture, 'flex row jc-end ai-stretch')}>
        <div className={classnames(classes.grow, classes.fixtureInfoGrid)}>
          <div className={classnames('flex row jc-end', status === fixtureStatus.NOT_STARTED ? 'ai-start' : 'ai-center')}>
            <Typography noWrap variant="h5">{homeName}</Typography>
          </div>
          {(!(status === fixtureStatus.NOT_STARTED) && (
            <div className={classnames(classes.fixtureScoreGrid, 'flex jc-center ai-center')}>
              <div className={classnames(classes.teamScore, 'flex jc-center ai-center')}>
                <Typography variant="h5">{teamHScore}</Typography>
              </div>
              <div className={classnames('flex jc-center ai-center')}>
                {((status === fixtureStatus.FINISHED) && (
                  <CheckCircleOutline color="primary" />
                )) || (
                  <RemoveCircleOutline color="secondary" />
                )}
              </div>
              <div className={classnames(classes.teamScore, 'flex jc-center ai-center')}>
                <Typography variant="h5">{teamAScore}</Typography>
              </div>
            </div>
          )) || (
            <div className={classnames('flex column jc-end ai-stretch')}>
              <div className={classnames(classes.grow, 'flex row jc-center ai-center')}>
                <Typography variant="h5">Vs.</Typography>
              </div>
              <div className={classnames('flex row jc-center ai-end')}>
                <div className={classnames(classes.kickoffTime)}>{format(new Date(kickoffTime), 'dd/MM/yyyy h:mma')}</div>
              </div>
            </div>
          )}
          <div className={classnames('flex row jc-start', status === fixtureStatus.NOT_STARTED ? 'ai-start' : 'ai-center')}>
            <Typography noWrap variant="h5">{awayName}</Typography>
          </div>
        </div>
        <div className={classnames(classes.controls, 'flex column jc-center ai-center')}>
          <IconButton
            onClick={() => this.openDialog(fixture)}
          >
            <Edit />
          </IconButton>
        </div>
        {editFixture && (
          <EditFixture
            open={editFixture}
            handleClose={this.closeDialog}
            fixture={fixture}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Fixture);
