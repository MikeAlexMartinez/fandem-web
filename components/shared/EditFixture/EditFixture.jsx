import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Mutation } from 'react-apollo';
import {
  Dialog, DialogContent,
  DialogActions, Button, DialogTitle,
  LinearProgress, Typography,
  TextField, Switch,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { DateTimePicker } from '@material-ui/pickers';
import { GAME_DATA_QUERY } from '../../../db/queries/fpl.queries';
import { UPDATE_FIXTURE_MUTATION } from '../../../db/mutations/fpl.mutations';

import { fixturePropType } from '../../general-prop-types';

import ErrorMessage from '../ErrorMessage';
import FormInput from '../FormInput';

import styles from './EditFixture.styles';
import ChangeGameweek from '../ChangeGameweek/ChangeGameweek';

class EditFixture extends Component {
  constructor(props) {
    super(props);
    const { fixture } = props;
    const {
      fplCode,
      teamHScore,
      teamAScore,
      finished,
      kickoffTime,
      minutes,
      event,
    } = fixture;
    this.state = {
      form: {
        fplCode,
        teamHScore: teamHScore || 0,
        teamAScore: teamAScore || 0,
        finished,
        kickoffTime,
        minutes: minutes || 0,
        eventId: event.id,
      },
    };
  }

  captureChange = key => (value) => {
    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        [key]: value,
      },
    }));
  }

  toggleCheckbox = key => (evt) => {
    const { target } = evt;
    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        [key]: target.checked,
      },
    }));
  }

  render() {
    const {
      classes, open, handleClose, fixture,
    } = this.props;
    const { form } = this.state;
    const {
      teamHScore,
      teamAScore,
      finished,
      kickoffTime,
      minutes,
      eventId,
    } = form;
    const {
      event: { name: eventName },
      teamH,
      teamA,
    } = fixture;
    const homeTeamName = (teamH && teamH.homeTeam && teamH.homeTeam.name) || '';
    const awayTeamName = (teamA && teamA.awayTeam && teamA.awayTeam.name) || '';
    return (
      <Mutation
        mutation={UPDATE_FIXTURE_MUTATION}
        variables={form}
        refetchQueries={[{
          query: GAME_DATA_QUERY,
        }]}
      >
        {(updateFixture, { error, loading }) => (
          <form>
            {error && <ErrorMessage message="Error updating fixture" />}
            <Dialog
              open={open}
            >
              {loading ? (
                <LinearProgress variant="query" />
              ) : (
                <LinearProgress variant="determinate" value={0} />
              )}
              <DialogTitle id="scroll-dialog-title">Edit Fixture</DialogTitle>
              <DialogContent>
                <div className={classnames('flex column jc-start ai-stretch')}>
                  {/* Home Team - Score */}
                  <div className={classnames(classes.formRow, 'flex row jc-sb ai-center')}>
                    <Typography variant="h5">{homeTeamName}</Typography>
                    <FormInput value={`${teamHScore}`} outputValue={val => this.captureChange('teamHScore')(+val)}>
                      {({
                        // isValid, hasChanged,
                        touched, errors, value,
                      }, {
                        onChange, onBlur,
                      }) => (
                        <div className={classnames('flex row jc-end')}>
                          <div className={classnames(classes.thinInput)}>
                            <TextField
                              id="teamHScore"
                              type="text"
                              value={value}
                              variant="outlined"
                              InputProps={{
                                classes: {
                                  input: classes.inputOverride,
                                },
                              }}
                              helperText={touched && errors}
                              onBlur={onBlur}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      )}
                    </FormInput>
                  </div>
                  {/* Away Team - Score */}
                  <div className={classnames(classes.formRow, 'flex row jc-sb ai-center')}>
                    <Typography variant="h5">{awayTeamName}</Typography>
                    <FormInput value={`${teamAScore}`} outputValue={val => this.captureChange('teamAScore')(+val)}>
                      {({
                        // isValid, hasChanged,
                        touched, errors, value,
                      }, {
                        onChange, onBlur,
                      }) => (
                        <div className={classnames('flex row jc-end')}>
                          <div className={classnames(classes.thinInput)}>
                            <TextField
                              id="teamAScore"
                              type="text"
                              value={value}
                              variant="outlined"
                              InputProps={{
                                classes: {
                                  input: classes.inputOverride,
                                },
                              }}
                              error={touched && errors}
                              helperText={touched && errors}
                              onBlur={onBlur}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      )}
                    </FormInput>
                  </div>
                  {/* Minutes */}
                  <div className={classnames(classes.formRow, 'flex row jc-sb ai-center')}>
                    <Typography variant="h5">Minutes</Typography>
                    <FormInput value={`${minutes}`} outputValue={val => this.captureChange('minutes')(+val)}>
                      {({
                        // isValid, hasChanged,
                        touched, errors, value,
                      }, {
                        onChange, onBlur,
                      }) => (
                        <div className={classnames('flex row jc-end')}>
                          <div className={classnames(classes.thinInput)}>
                            <TextField
                              id="minutes"
                              type="text"
                              InputProps={{
                                classes: {
                                  input: classes.inputOverride,
                                },
                              }}
                              value={value}
                              variant="outlined"
                              error={touched && errors}
                              helperText={touched && errors}
                              onBlur={onBlur}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      )}
                    </FormInput>
                  </div>
                  {/* gameweek */}
                  <div className={classnames('flex row jc-center ai-center')}>
                    <div className={classnames(classes.selectGameweekContainer)}>
                      <ChangeGameweek
                        gameweekId={eventId}
                        gameweekName={eventName}
                        updateGameweek={this.captureChange('eventId')}
                      />
                    </div>
                  </div>
                  {/* kickoffTime */}
                  <div className={classnames('flex row jc-center ai-center')}>
                    <div className={classnames(classes.kickoffContainer)}>
                      <DateTimePicker
                        label="Date & Kickoff Time"
                        inputVariant="outlined"
                        value={kickoffTime}
                        onChange={this.captureChange('kickoffTime')}
                      />
                    </div>
                  </div>
                  {/* finished */}
                  <div className={classnames(classes.formRow, 'flex row jc-end ai-center')}>
                    <Typography variant="h5">Finished</Typography>
                    <div className={classnames(classes.toggleRow, 'flex row jc-end')}>
                      <Switch
                        checked={finished}
                        onChange={this.toggleCheckbox('finished')}
                        color="primary"
                      />
                    </div>
                  </div>
                </div>
              </DialogContent>
              <DialogActions
                className={classnames(
                  classes.actions,
                  'flex row jc-sb ai-center',
                )}
                classes={{
                  root: classes.actionRoot,
                  spacing: classes.actions,
                }}
              >
                <Button
                  type="button"
                  onClick={handleClose}
                  variant="outlined"
                  color="secondary"
                >
                  Cancel
                </Button>
                {/* onClick={() => this.handleSave(addProfilePicture)} */}
                {/* disabled={loading || uploading} */}
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={false}
                  onClick={async () => {
                    try {
                      await updateFixture();
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </form>
        )}
      </Mutation>
    );
  }
}

EditFixture.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  fixture: fixturePropType.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(EditFixture);
