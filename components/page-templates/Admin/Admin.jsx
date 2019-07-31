import React from 'react';
import { withStyles } from '@material-ui/styles';

import Navigation from '../../shared/Navigation';
import GlobalStyles from '../../shared/GlobalStyles';
import PleaseSignIn from '../../shared/PleaseSignIn';
import IsAdmin from '../../shared/IsAdmin';
import UsersGeneralInfo from '../../shared/UsersGeneralInfo';
import GameplayInfo from '../../shared/GameplayInfo';

import styles from './Admin.styles';

const Admin = () => (
  <GlobalStyles>
    <PleaseSignIn>
      <Navigation>
        <IsAdmin>
          <UsersGeneralInfo />
          <GameplayInfo />
        </IsAdmin>
      </Navigation>
    </PleaseSignIn>
  </GlobalStyles>
);

export default withStyles(styles)(Admin);
