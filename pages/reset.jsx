import React from 'react';
import PropTypes from 'prop-types';
import Reset from '../components/page-templates/Reset/Reset';

const ResetPage = ({ query: { resetToken } }) => (
  <div>
    <Reset token={resetToken} />
  </div>
);

ResetPage.propTypes = {
  query: PropTypes.shape({
    resetToken: PropTypes.string,
  }),
};

ResetPage.defaultProps = {
  query: {
    resetToken: '',
  },
};

export default ResetPage;
