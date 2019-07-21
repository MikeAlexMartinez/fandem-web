import React from 'react';
import Navigation from '../../shared/Navigation';

import Page from '../../shared/Page/Page';
import PleaseSignIn from '../../shared/PleaseSignIn';
import IsAdmin from '../../shared/IsAdmin';

const Admin = () => (
  <Page>
    <PleaseSignIn>
      <Navigation>
        <IsAdmin>You are an admin!</IsAdmin>
      </Navigation>
    </PleaseSignIn>
  </Page>
);

export default Admin;
