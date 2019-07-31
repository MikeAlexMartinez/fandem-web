import React from 'react';
import PropTypes from 'prop-types';
import UserProfile from '../components/page-templates/UserProfile';

const ProfilePage = ({ query: { displayName } }) => (
  <div>
    <UserProfile userName={displayName} />
  </div>
);

ProfilePage.propTypes = {
  query: PropTypes.shape({
    displayName: PropTypes.string,
  }),
};

ProfilePage.defaultProps = {
  query: {
    displayName: '',
  },
};

export default ProfilePage;
