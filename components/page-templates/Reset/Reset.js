import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

import ResetForm from "../../shared/ResetForm/ResetForm";

import Page from "../../shared/Page/Page";
import Background from "../../shared/Background/Background";

import styles from "./Reset.styles";

const Reset = ({ classes, token }) => (
  <Page>
    <Background>
      <div className={`${classes.root} flex column jc-center ai-center`}>
        <ResetForm token={token} />
      </div>
    </Background>
  </Page>
);

Reset.propTypes = {
  classes: PropTypes.object.isRequired,
  token: PropTypes.string
};

export default withStyles(styles)(Reset);
