import React, { Component } from "react";
import {
  withStyles,
  Paper,
  Typography,
  Divider,
  TextField,
  Button
} from "@material-ui/core";
import Link from "next/link";

import validateEmail from "../../../utils/validators/email";
import validateForm from "../../../utils/validators/form";

import Page from "../../shared/Page/Page";
import Background from "../../shared/Background/Background";

import styles from "./Forgot.styles";

class Forgot extends Component {
  state = {
    form: {
      fields: {
        email: {
          validator: validateEmail(),
          valid: false,
          value: "",
          touched: false,
          error: "",
          errorMessages: {
            required: "An Email is Required",
            format: "Please provide a valid Email format"
          },
          label: "Email"
        }
      },
      isValid: false
    }
  };

  fetchError = id => {
    const field = this.state.form.fields[id];
    const { error, errorMessages } = field;
    return error && errorMessages.hasOwnProperty(error)
      ? errorMessages[error]
      : " ";
  };

  handleChange = e => {
    const { id, value } = e.target;
    const formFields = this.state.form.fields;
    const field = formFields[id];
    let error = "";
    if (field.validator) {
      error = field.validator(value);
    }
    const updatedField = {
      ...field,
      error,
      value,
      touched: true,
      valid: !error
    };
    this.setState(prevState => {
      const updatedFields = {
        ...prevState.form.fields,
        [id]: updatedField
      };
      return {
        ...prevState,
        form: {
          ...prevState.form,
          fields: updatedFields,
          isValid: validateForm(updatedFields)
        }
      };
    });
  };

  render() {
    return (
      <Page>
        <Background>
          <div>
            <div />
          </div>
        </Background>
      </Page>
    );
  }
}

export default Reset;
