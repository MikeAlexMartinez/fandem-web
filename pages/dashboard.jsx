import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../components/page-templates/Dashboard';

const DashboardPage = ({ query: { emailToken } }) => (
  <div>
    <Dashboard token={emailToken} />
  </div>
);

DashboardPage.propTypes = {
  query: PropTypes.shape({
    emailToken: PropTypes.string,
  }),
};

DashboardPage.defaultProps = {
  query: {
    emailToken: '',
  },
};

export default DashboardPage;
