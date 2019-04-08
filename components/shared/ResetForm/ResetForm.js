import React, { Component } from "react";
import {
  withStyles,
  Paper,
  Typography,
  Divider,
  TextField,
  Button,
  LinearProgress
} from "@material-ui/core";
import Link from "next/link";
import Router from "next/router";
import { Mutation } from "react-apollo";

// Utils
import validateHexToken from "../../../utils/validators/hexToken";
import validatePassword, {
  valuesMatch
} from "../../../utils/validators/password";
import validateForm from "../../../utils/validators/form";

import { RESET_PASSWORD_MUTATION } from "../../../db/mutations/account.mutations";

import styles from "./ResetForm.styles";

class ResetForm extends Component {
  constructor(props) {
    super(props);

    const token = props.token || "";
    const hexValidator = validateHexToken(40);
    const tokenError = hexValidator(token);
    this.state = {
      form: {
        fields: {
          resetToken: {
            validator: hexValidator,
            valid: tokenError === null,
            value: token,
            touched: false,
            error: tokenError || "",
            errorMessages: {
              required: "A Token is Required",
              format:
                "The token should be a valid Hex string with 40 characters"
            },
            label: "Reset Token"
          },
          password: {
            validator: validatePassword(8),
            valid: false,
            value: "",
            checking: false,
            touched: false,
            error: "",
            errorMessages: {
              required: "A Password is Required",
              format: "Password must be at least 8 characters"
            },
            label: "Password"
          },
          confirmPassword: {
            formValidator: valuesMatch("password"),
            valid: false,
            value: "",
            checking: false,
            touched: false,
            error: "",
            errorMessages: {
              mismatch: "Your passwords must match"
            },
            label: "Confirm Password"
          }
        },
        isValid: false
      }
    };
  }

  handleBlur = e => {
    const { id, value } = e.target;
    const currentField = this.state.form.fields[id];
    const field = {
      ...currentField,
      touched: true,
      error: ((!value || value === "") && "required") || currentField.error
    };
    this.setState(prevState => {
      return {
        ...prevState,
        form: {
          ...prevState.form,
          fields: {
            ...prevState.form.fields,
            [id]: field
          }
        }
      };
    });
  };

  fetchError = id => {
    const field = this.state.form.fields[id];
    const { error, errorMessages } = field;
    return error && errorMessages.hasOwnProperty(error)
      ? errorMessages[error]
      : " ";
  };

  render() {
    return <div />;
  }
}

export default withStyles(styles)(ResetForm);
