import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ProfilePictureControls from "../ProfilePictureControls";

const ProfilePicture = ({ classes, profilePicture }) => (
  <div
    className={classNames(classes.container, `flex column jc-sb ai-stretch`)}
  >
    <div
      className={classNames(
        classes.imageContainer,
        `flex row jc-center ai-center`
      )}
    >
      {!profilePicture.image && (
        <img
          src="/static/images/male-profile-image.png"
          className={classNames(classes.photo)}
        />
      )}
      {profilePicture.image && (
        <img src={profilePicture.image} className={classNames(classes.photo)} />
      )}
    </div>
    <ProfilePictureControls currentPicture={profilePicture} />
  </div>
);

ProfilePicture.propTypes = {
  profilePicture: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string
  }),
  classes: PropTypes.object
};

export default ProfilePicture;
