import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Mutation } from 'react-apollo';
import {
  withStyles, Dialog, DialogContent,
  DialogActions, Button, DialogTitle,
  LinearProgress, Typography,
  TextField,
} from '@material-ui/core';

import { GAME_DATA_QUERY } from '../../../db/queries/fpl.queries';
import { UPDATE_FIXTURE_MUTATION } from '../../../db/mutations/fpl.mutations';

import { fixturePropType } from '../../general-prop-types';

import ErrorMessage from '../ErrorMessage';

import styles from './EditFixture.styles';

class EditFixture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixture: props.fixture,
    };
  }

  handleChange = (e) => {
    const { fixture } = this.state;
    const { id, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      fixture: {
        ...fixture,
        [id]: value,
      },
    }));
  }

  render() {
    const { classes, open, handleClose } = this.props;
    const { fixture } = this.state;
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
                  <div className={classnames('flex row jc-sb ai-center')}>
                    <Typography variant="h5">{homeTeamName}</Typography>
                    <TextField
                      id="teamHScore"
                      type="number"
                      value={teamHScore}
                      margin="normal"
                      variant="outlined"
                      // helperText={this.fetchError('name')}
                      // onBlur={this.handleBlur}
                      onChange={this.handleChange}
                    />
                  </div>
                  {/* Away Team - Score */}
                  <div className={classnames('flex row jc-sb ai-center')}>
                    <Typography variant="h5">{awayTeamName}</Typography>
                  </div>
                  {/* Minutes */}
                  {/* kickoffTime */}
                  {/* finished */}
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
