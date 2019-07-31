import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/styles';

import styles from './ProfilePicture.styles';
import ProfilePictureControls from '../ProfilePictureControls';

const ProfilePicture = ({ classes, profilePicture }) => (
  <div className={classNames(classes.container, 'flex column jc-sb')}>
    <div className={classNames(classes.imageContainer)}>
      {!profilePicture.image && (
        <img
          alt="user default profile"
          src="/static/images/male-profile-image.png"
          className={classNames(classes.photo)}
        />
      )}
      {profilePicture.image && (
        <img
          alt="uploaded user profile"
          src={profilePicture.image}
          className={classNames(classes.photo)}
        />
      )}
    </div>
    <ProfilePictureControls currentPicture={profilePicture} />
  </div>
);

ProfilePicture.propTypes = {
  profilePicture: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
  }),
  classes: PropTypes.object,
};

export default withStyles(styles)(ProfilePicture);
