/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Mutation } from 'react-apollo';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  LinearProgress,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { CLOUDINARY_ENDPOINT } from '../../../config';

import { ADD_PROFILE_PICTURE } from '../../../db/mutations/account.mutations';
import { CURRENT_USER_QUERY } from '../../../db/queries/account.queries';

import ErrorMessage from '../ErrorMessage/ErrorMessage';

import styles from './AddPicture.styles';

class AddPicture extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  }

  state = {
    image: '',
    errorUploading: false,
    uploading: false,
    deleteToken: '',
  };

  handleSave = async (addProfilePicture) => {
    const { handleClose } = this.props;
    await addProfilePicture();
    handleClose();
  };

  uploadPicture = async (evt) => {
    const { image, deleteToken } = this.state;

    this.setState({
      uploading: true,
      errorUploading: false,
    });
    const { files } = evt.target;

    if (image && deleteToken) {
      const data = new FormData();
      data.append('token', deleteToken);
      try {
        const res = await fetch(`${CLOUDINARY_ENDPOINT}/delete_by_token`, {
          method: 'POST',
          body: data,
        });
        await res.json();
      } catch (e) {
        console.log('error deleting previous image');
        console.error(e);
      }
    }
    if (files && files.length > 0) {
      try {
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'fandem-test');
        const res = await fetch(`${CLOUDINARY_ENDPOINT}/image/upload`, {
          method: 'POST',
          body: data,
        });
        const file = await res.json();
        this.setState({
          image: file.secure_url,
          uploading: false,
          deleteToken: file.delete_token,
        });
      } catch (e) {
        console.error(e);
        this.setState({
          uploading: false,
          errorUploading: true,
        });
      }
    }
  };

  render() {
    const {
      classes, open, handleClose, title,
    } = this.props;
    const { image, errorUploading, uploading } = this.state;
    const variables = { image };
    return (
      <Mutation
        mutation={ADD_PROFILE_PICTURE}
        variables={variables}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(addProfilePicture, { loading, error }) => (
          <Dialog
            open={open}
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
          >
            {uploading || loading ? (
              <LinearProgress variant="query" />
            ) : (
              <LinearProgress variant="determinate" value={0} />
            )}
            <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
            <DialogContent>
              <div
                className={classNames(
                  classes.container,
                  'flex column jc-center ai-stretch',
                )}
              >
                {image && (
                  <img
                    alt="profile preview"
                    width="180"
                    src={image}
                    className={classes.image}
                  />
                )}
                <Button variant="contained" color="secondary" component="label">
                  <input
                    accept="image/*"
                    type="file"
                    className={classes.input}
                    onChange={this.uploadPicture}
                  />
                  {image ? 'Change Image' : 'Choose An Image'}
                </Button>
                {(errorUploading || error) && (
                  <ErrorMessage message="Error uploading image!" />
                )}
              </div>
            </DialogContent>
            <DialogActions
              className={classNames(
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
              <Button
                onClick={() => this.handleSave(addProfilePicture)}
                variant="contained"
                color="primary"
                type="submit"
                disabled={loading || uploading}
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Mutation>
    );
  }
}

export default withStyles(styles)(AddPicture);
