import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  withStyles, Dialog, DialogContent,
  DialogActions, Button, DialogTitle,
} from '@material-ui/core';

import { fixturePropType } from '../../general-prop-types';

import styles from './EditFixture.styles';

class EditFixture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixture: props.fixture,
    };
  }

  render() {
    const { classes, open, handleClose } = this.props;
    const { fixture } = this.state;
    return (
      <Dialog
        open={open}
      >
        <DialogTitle id="scroll-dialog-title">Edit Fixture</DialogTitle>
        <DialogContent>{JSON.stringify(fixture)}</DialogContent>
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
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
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
