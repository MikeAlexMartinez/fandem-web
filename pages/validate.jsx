import React from 'react';
import PropTypes from 'prop-types';
import Validate from '../components/page-templates/Validate/Validate';

const ValidatePage = ({ query: { emailValidationToken } }) => (
  <div>
    <Validate token={emailValidationToken} />
  </div>
);

ValidatePage.propTypes = {
  query: PropTypes.shape({
    emailValidationToken: PropTypes.string,
  }),
};

ValidatePage.defaultProps = {
  query: {
    emailValidationToken: '',
  },
};

export default ValidatePage;
