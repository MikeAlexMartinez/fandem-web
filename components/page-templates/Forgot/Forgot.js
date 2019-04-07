import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

import ForgotForm from "../../shared/ForgotForm/ForgotForm";

import Page from "../../shared/Page/Page";
import Background from "../../shared/Background/Background";

import styles from "./Forgot.styles";

const Forgot = ({ classes }) => (
  <Page>
    <Background>
      <div className={`${classes.root} flex column jc-center ai-center`}>
        <ForgotForm />
      </div>
    </Background>
  </Page>
);

export default withStyles(styles)(Forgot);
