import React from "react";
import { withStyles } from "@material-ui/core";

import Page from "../../shared/Page/Page";
import PleaseSignIn from "../../shared/PleaseSignIn";
import Navigation from "../../shared/Navigation/Navigation";

import styles from "./UserProfile.styles";
import CurrentUser from "../../shared/CurrentUser";

const UserProfile = props => (
  <Page>
    <PleaseSignIn>
      <Navigation>
        <CurrentUser>
          {({ data: { currentUser } }, error, loading) => {
            return (
              <div>
                <div>User Profile: {props.userName}</div>
                <div>
                  Current User: {JSON.stringify(currentUser.displayName)}
                </div>
              </div>
            );
          }}
        </CurrentUser>
      </Navigation>
    </PleaseSignIn>
  </Page>
);

export default withStyles(styles)(UserProfile);
