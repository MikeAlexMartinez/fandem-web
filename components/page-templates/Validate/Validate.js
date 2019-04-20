import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

import ValidateEmailForm from "../../shared/ValidateEmailForm/ValidateEmailForm";

import Page from "../../shared/Page/Page";
import Background from "../../shared/Background/Background";

import styles from "./Validate.styles";

const Validate = ({ classes, token }) => (
  <Page>
    <Background>
      <div className={`${classes.root} flex column jc-center ai-center`}>
        <ValidateEmailForm token={token} />
      </div>
    </Background>
  </Page>
);

Validate.propTypes = {
  classes: PropTypes.object.isRequired,
  token: PropTypes.string
};

export default withStyles(styles)(Validate);
