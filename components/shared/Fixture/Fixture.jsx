import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles, IconButton, Typography } from '@material-ui/core';
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
    editFixture: null,
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
          <div className={classnames('flex row jc-end')}>
            <Typography noWrap variant="h5">{homeName}</Typography>
          </div>
          {(!(status === fixtureStatus.NOT_STARTED) && (
            <div>
              <div className={classnames(classes.teamScore)}>
                {teamHScore}
              </div>
              {((status === fixtureStatus.FINISHED) && (
                <CheckCircleOutline color="primary" />
              )) || (
                <RemoveCircleOutline color="secondary" />
              )}
              <div className={classnames(classes.teamScore)}>
                {teamAScore}
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
          <div className={classnames('flex row jc-start')}>
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
        <EditFixture
          open={editFixture}
          handleClose={this.closeDialog}
          fixture={fixture}
          title="Update Fixture"
        />
      </div>
    );
  }
}

export default withStyles(styles)(Fixture);
