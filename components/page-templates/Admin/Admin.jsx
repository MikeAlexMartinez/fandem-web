import React from 'react';
import Navigation from '../../shared/Navigation';

import Page from '../../shared/Page/Page';
import PleaseSignIn from '../../shared/PleaseSignIn';
import IsAdmin from '../../shared/IsAdmin';
import UsersGeneralInfo from '../../shared/UsersGeneralInfo';

const Admin = () => (
  <Page>
    <PleaseSignIn>
      <Navigation>
        <IsAdmin>
          <UsersGeneralInfo />
        </IsAdmin>
      </Navigation>
    </PleaseSignIn>
  </Page>
);

export default Admin;
