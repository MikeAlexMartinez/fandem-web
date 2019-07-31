import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import clsx from 'clsx';
import { CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { CURRENT_USER_QUERY } from '../../../db/queries/account.queries';

import Background from '../Background';
import SignInForm from '../SignInForm';

import styles from './PleaseSignIn.styles';

const PleaseSignIn = ({ classes, children }) => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) {
        return (
          <Background>
            <div
              className={clsx(
                classes.root,
                'flex column jc-center ai-center',
              )}
            >
              <CircularProgress
                style={{
                  height: '200px',
                  width: '200px',
                }}
                color="secondary"
              />
            </div>
          </Background>
        );
      }
      if (!data || !data.currentUser) {
        return (
          <Background>
            <div
              className={clsx(
                classes.root,
                'flex column jc-center ai-center',
              )}
            >
              <SignInForm message="You must be signed in to view this page..." />
            </div>
          </Background>
        );
      }
      return children;
    }}
  </Query>
);

PleaseSignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PleaseSignIn);
