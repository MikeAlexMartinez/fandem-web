import React from "react";
import { withStyles } from "@material-ui/core";
import Page from "../../shared/Page/Page";
import Background from "../../shared/Background/Background";
import SignInForm from "../../shared/SignInForm/SignInForm";

import styles from "./SignIn.styles";

const SignIn = ({ classes }) => (
  <Page>
    <Background>
      <div className={`${classes.root} flex column jc-center ai-center`}>
        <SignInForm />
      </div>
    </Background>
  </Page>
);

export default withStyles(styles)(SignIn);
