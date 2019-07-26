import React from 'react';
import PropTypes from 'prop-types';
import EditProfile from '../components/page-templates/EditProfile/EditProfile';

const UserProfilePage = ({ query: { displayName } }) => (
  <div>
    <EditProfile displayName={displayName} />
  </div>
);

UserProfilePage.propTypes = {
  query: PropTypes.shape({
    displayName: PropTypes.string,
  }),
};

UserProfilePage.defaultProps = {
  query: {
    displayName: '',
  },
};

export default UserProfilePage;
