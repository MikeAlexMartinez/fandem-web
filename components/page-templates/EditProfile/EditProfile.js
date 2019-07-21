import React from "react";
import { withStyles, CircularProgress } from "@material-ui/core";
import { adopt } from "react-adopt";

import Page from "../../shared/Page/Page";
import PleaseSignIn from "../../shared/PleaseSignIn";
import Navigation from "../../shared/Navigation";
import CurrentUser from "../../shared/CurrentUser";
import PremTeams from "../../shared/PremTeams/PremTeams";
import Countries from "../../shared/Countries/Countries";
import EditProfileForm from "../../shared/EditProfileForm/EditProfileForm";

import styles from "./EditProfile.styles";
import {
  composedHasError,
  composedIsLoading
} from "../../../utils/composed-utils";
import ErrorMessage from "../../shared/ErrorMessage/ErrorMessage";

const Composed = adopt({
  currentUser: ({ render }) => <CurrentUser>{render}</CurrentUser>,
  premTeams: ({ render }) => <PremTeams>{render}</PremTeams>,
  countries: ({ render }) => <Countries>{render}</Countries>
});

const EditProfile = props => (
  <Page>
    <PleaseSignIn>
      <Navigation>
        <Composed>
          {composedResponse => {
            if (composedHasError(composedResponse)) {
              return (
                <ErrorMessage message={"Error Loading Profile Information"} />
              );
            }
            if (composedIsLoading(composedResponse)) {
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
  </Page>
);

export default withStyles(styles)(EditProfile);
