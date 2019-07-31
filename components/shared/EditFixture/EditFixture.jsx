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
// import { DateTimePicker } from '@material-ui/pickers';
import { GAME_DATA_QUERY } from '../../../db/queries/fpl.queries';
import { UPDATE_FIXTURE_MUTATION } from '../../../db/mutations/fpl.mutations';

import { fixturePropType } from '../../general-prop-types';

import ErrorMessage from '../ErrorMessage';
import FormInput from '../FormInput';

import styles from './EditFixture.styles';

class EditFixture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }

  captureChange = key => (value) => {
    const { form } = this.state;
    console.log(value);
    this.setState(prevState => ({
      ...prevState,
      form: {
        ...form,
        [key]: value,
      },
    }));
  }

  toggleCheckbox = key => (evt) => {
    const { target } = evt;
    this.setState(prevState => ({
      ...prevState,
      form: {
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
      fplCode,
      teamHScore,
      teamAScore,
      finished,
      kickoffTime,
      minutes,
      event,
      teamH,
      teamA,
    } = fixture;
    const eventId = (event && event.id) || 'placeholder-id';
    const homeTeamName = (teamH && teamH.homeTeam && teamH.homeTeam.name) || '';
    const awayTeamName = (teamA && teamA.awayTeam && teamA.awayTeam.name) || '';
    const variables = {
      fplCode,
      teamHScore,
      teamAScore,
      finished,
      kickoffTime,
      minutes,
      eventId,
    };
    const hasFinished = form && (typeof form.finished === 'boolean')
      ? form.finished
      : !!(finished);
    return (
      <Mutation
        mutation={UPDATE_FIXTURE_MUTATION}
        variables={variables}
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
                    <FormInput value={`${(teamHScore || 0)}`} outputValue={this.captureChange('teamHScore')}>
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
                    <FormInput value={`${(teamAScore || 0)}`} outputValue={this.captureChange('teamAScore')}>
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
                    <FormInput value={`${(minutes || 0)}`} outputValue={this.captureChange('minutes')}>
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
                  {/* kickoffTime */}
                  <div className={classnames(classes.formRow, 'flex row jc-center ai-center')}>
                    <div className={classnames(classes.kickoffContainer)}>
                      {/* <DateTimePicker
                        label="DateTimePicker"
                        inputVariant="outlined"
                        value={kickoffTime}
                        onChange={this.captureChange('kickoffTime')}
                      /> */}
                      {/* <TextField
                        id="datetime-local"
                        label="Kickoff Time"
                        type="datetime-local"
                        defaultValue={kickoffTime}
                        className={classes.kickoffTime}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      /> */}
                    </div>
                  </div>
                  {/* finished */}
                  <div className={classnames(classes.formRow, 'flex row jc-end ai-center')}>
                    <Typography variant="h5">Finished</Typography>
                    <div className={classnames(classes.toggleRow, 'flex row jc-end')}>
                      <Switch
                        checked={hasFinished}
                        onChange={this.toggleCheckbox('finished')}
                        color="primary"
                      />
                    </div>
                  </div>
                  {/* gameweek */}
                </div>
              </DialogContent>
              <DialogActions
                className={classnames(
                  classes.actions,
                  'flex row jc-sb ai-center',
                )}
                classes={{
                  root: classes.actionRoot,
                  action: classes.actionRoot,
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
                    console.log('Submitting Form');
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
