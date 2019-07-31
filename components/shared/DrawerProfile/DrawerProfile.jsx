import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Link from 'next/link';
import { Typography, CircularProgress, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Edit } from '@material-ui/icons';

import CurrentUser from '../CurrentUser';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import styles from './DrawerProfile.styles';

const DrawerProfile = ({ classes }) => (
  <CurrentUser>
    {({ data, loading, error }) => {
      if (error) {
        return <ErrorMessage message="Error retrieving user information" />;
      }

      if (loading) {
        return (
          <div
            className={classNames(
              classes.spinnerContainer,
              'flex row jc-center ai-center',
            )}
          >
            <CircularProgress size={80} />
          </div>
        );
      }

      if (data && data.currentUser) {
        const { currentUser } = data;
        const profilePicture = currentUser
          && currentUser.profilePicture
          && currentUser.profilePicture.length === 1
          && currentUser.profilePicture[0].photo;
        return (
          <div
            className={classNames(
              classes.userProfile,
              'flex column jc-start ai-stretch',
            )}
          >
            {/* picture, edit button & notifs */}
            <div className={classNames('flex row jc-sb ai-start')}>
              <div className={classNames(classes.imgContainer)}>
                {(!profilePicture || !profilePicture.image) && (
                  <img
                    alt="profile placeholder"
                    src="/static/images/male-profile-image.png"
                    className={classNames(classes.photo)}
                  />
                )}
                {profilePicture && profilePicture.image && (
                  <img
                    alt="profile"
                    src={profilePicture.image}
                    className={classNames(classes.photo)}
                  />
                )}
              </div>
              {/* Actions */}
              <div
                className={classNames(
                  classes.actions,
                  'flex column jc-start ai-end',
                )}
              >
                <Fab>
                  <Link href="/editprofile">
                    <Edit />
                  </Link>
                </Fab>
              </div>
            </div>
            {/* greeting */}
            <div
              className={classNames(
                classes.greeting,
                'flex row jc-center ai-center',
              )}
            >
              <Typography
                variant="subtitle2"
                className={classNames(classes.greetingText)}
              >
                Hello
                {' '}
                {currentUser.name}
              </Typography>
            </div>
          </div>
        );
      }

      return <ErrorMessage message="No Current User Retrieved" />;
    }}
  </CurrentUser>
);

DrawerProfile.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(DrawerProfile);
