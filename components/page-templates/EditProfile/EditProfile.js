import React from "react";
import { withStyles } from "@material-ui/core";
import { adopt } from "react-adopt";

import Page from "../../shared/Page/Page";
import PleaseSignIn from "../../shared/PleaseSignIn/PleaseSignIn";
import Navigation from "../../shared/Navigation/Navigation";
import CurrentUser from "../../shared/CurrentUser/CurrentUser";
import EditProfileForm from "../../shared/EditProfileForm/EditProfileForm";

import styles from "./EditProfile.styles";

const Composed = adopt({
  currentUser: ({ render }) => <CurrentUser>{render}</CurrentUser>,
  premTeams: () => {},
  countries: () => {}
});

const EditProfile = props => (
  <Page>
    <PleaseSignIn>
      <Navigation>
        <CurrentUser>
          {({ data: { currentUser } }, error, loading) => {
            if (loading) {
              return (
                <CircularProgress
                  style={{
                    height: "200px",
                    width: "200px"
                  }}
                  color="secondary"
                />
              );
            }
            if (error || !currentUser) {
              return <div>Error fetching current user</div>;
            }
            return <EditProfileForm user={currentUser} />;
          }}
        </CurrentUser>
      </Navigation>
    </PleaseSignIn>
  </Page>
);

export default withStyles(styles)(EditProfile);
