import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { IconButton, withStyles } from '@material-ui/core';
import { ViewModule, AddCircle, Delete } from '@material-ui/icons';

import styles from './ProfilePictureControls.styles';

import AddPicture from '../AddPicture';

class ProfilePictureControls extends React.Component {
  state = {
    gallery: false,
    addPicture: false,
    deletePicture: false,
  };

  openDialog = key => () => {
    this.setState(prevState => ({
      ...prevState,
      [key]: true,
    }));
  };

  closeDialog = key => () => {
    this.setState(prevState => ({
      ...prevState,
      [key]: false,
    }));
  };

  render() {
    const { classes, currentPicture } = this.props;
    const { addPicture } = this.state;
    return (
      <div
        className={classNames(classes.container, 'flex row jc-sb ai-center')}
      >
        <IconButton
          className={classes.icon}
          onClick={this.openDialog('addPicture')}
        >
          <AddCircle />
        </IconButton>
        <IconButton
          className={classes.icon}
          onClick={this.openDialog('gallery')}
        >
          <ViewModule />
        </IconButton>
        {currentPicture.image && (
          <IconButton
            className={classNames(classes.icon)}
            onClick={this.openDialog('deletePicture')}
          >
            <Delete />
          </IconButton>
        )}
        <AddPicture
          open={addPicture}
          handleClose={this.closeDialog('addPicture')}
          title="Choose a Profile Picture"
        />
      </div>
    );
  }
}

ProfilePictureControls.propTypes = {
  classes: PropTypes.object,
  currentPicture: PropTypes.object,
};

export default withStyles(styles)(ProfilePictureControls);
