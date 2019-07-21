import React from 'react';
import Navigation from '../../shared/Navigation';

import Page from '../../shared/Page/Page';
import PleaseSignIn from '../../shared/PleaseSignIn';

const Admin = () => (
  <Page>
    <PleaseSignIn>
      <Navigation>
        <div>This is The Admin!</div>
      </Navigation>
    </PleaseSignIn>
  </Page>
);

export default Admin;
