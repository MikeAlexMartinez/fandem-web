import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { adopt } from 'react-adopt';

import GlobalStyles from '../../shared/GlobalStyles';
import PleaseSignIn from '../../shared/PleaseSignIn';
import Navigation from '../../shared/Navigation';
import CurrentUser from '../../shared/CurrentUser';
import PremTeams from '../../shared/PremTeams';
import Countries from '../../shared/Countries';
import EditProfileForm from '../../shared/EditProfileForm';
import ErrorMessage from '../../shared/ErrorMessage';

import styles from './EditProfile.styles';
import {
  composedHasError,
  composedIsLoading,
} from '../../../utils/composed-utils';

const Composed = adopt({
  currentUser: ({ render }) => <CurrentUser>{render}</CurrentUser>,
  premTeams: ({ render }) => <PremTeams>{render}</PremTeams>,
  countries: ({ render }) => <Countries>{render}</Countries>,
});

const EditProfile = ({ displayName }) => {
  console.log(displayName);
  return (
    <GlobalStyles>
      <PleaseSignIn>
        <Navigation>
          <Composed>
            {(composedResponse) => {
              if (composedHasError(composedResponse)) {
                return (
                  <ErrorMessage message="Error Loading Profile Information" />
                );
              }
              if (composedIsLoading(composedResponse)) {
                return (
                  <CircularProgress
                    style={{
                      height: '200px',
                      width: '200px',
                    }}
                    color="secondary"
                  />
                );
              }
              const { currentUser, countries, premTeams } = composedResponse;
              return (
                <EditProfileForm
                  user={currentUser}
                  countries={countries}
                  teams={premTeams}
                />
              );
            }}
          </Composed>
        </Navigation>
      </PleaseSignIn>
    </GlobalStyles>
  );
}

EditProfile.propTypes = {
  displayName: PropTypes.string.isRequired,
};

export default withStyles(styles)(EditProfile);
