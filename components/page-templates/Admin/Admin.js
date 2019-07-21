import React from 'react';
import Navigation from '../../shared/Navigation/Navigation';

import Page from '../../shared/Page/Page';
import PleaseSignIn from '../../shared/PleaseSignIn';

const Admin = () => (
  <Page>
    <PleaseSignIn>
      <Navigation>This is The Admin!</Navigation>
    </PleaseSignIn>
  </Page>
);

export default Admin;
