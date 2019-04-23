import React from "react";
import { withStyles } from "@material-ui/core";

// Components
import Page from "../../shared/Page/Page";
import Background from "../../shared/Background/Background";
import SignUpForm from "../../shared/SignUpForm/SignUpForm";

import styles from "./SignUp.styles";

const SignUp = props => (
  <Page>
    <Background>
      <SignUpForm />
    </Background>
  </Page>
);

export default withStyles(styles)(SignUp);
