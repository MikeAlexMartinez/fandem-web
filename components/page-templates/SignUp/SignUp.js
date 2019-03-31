import React, { Component } from "react";
import {
  withStyles,
  Typography,
  Paper,
  Button,
  TextField,
  Divider
} from "@material-ui/core";
import Link from "next/link";
import validateEmail from "../../../utils/validators/email";
import validatePassword, {
  valuesMatch
} from "../../../utils/validators/password";
import validateForm from "../../../utils/validators/form";
import Page from "../../shared/Page/Page";
import Background from "../../shared/Background/Background";

import styles from "./SignUp.styles";

class SignUp extends Component {
  state = {
    form: {
      fields: {
        name: {
          valid: false,
          value: "",
          touched: false,
          error: "",
          errorMessages: {
            required: "A Name is Required"
          },
          label: "Name"
        },
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
        },
        password: {
          validator: validatePassword(8),
          valid: false,
          value: "",
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

  handleChange = e => {
    const { id, value } = e.target;
    const formFields = this.state.form.fields;
    const field = formFields[id];
    let error = "";
    if (field.validator) {
      error = field.validator(value);
    }
    if (error === "" && field.formValidator) {
      error = field.formValidator(formFields, value);
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
    const {
      form: {
        isValid,
        fields: { email, name, password, confirmPassword }
      }
    } = this.state;
    const { classes } = this.props;
    return (
      <Page>
        <Background>
          <div className={`${classes.root} flex column jc-center ai-center`}>
            <div className={`${classes.columnItem}`}>
              <Paper className={`${classes.paper} flex column `} elevation={1}>
                <Typography variant="h5" className={`${classes.heading}`}>
                  Create An Account
                </Typography>
                <Divider />
                <div className={classes.inputGroup}>
                  {/* Email */}
                  <TextField
                    error={!!email.error}
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="Please enter your Email"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    helperText={this.fetchError("email")}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                  />
                  {/* Name */}
                  <TextField
                    error={!!name.error}
                    id="name"
                    type="text"
                    label="Name"
                    placeholder="Please enter your Name"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    helperText={this.fetchError("name")}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                  />
                </div>
                <Divider />

                <div className={classes.inputGroup}>
                  {/* Password */}
                  <TextField
                    error={!!password.error}
                    id="password"
                    type="password"
                    label="Password"
                    placeholder="Please enter a Password"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    helperText={this.fetchError("password")}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                  />
                  {/* Confirm Password */}
                  <TextField
                    error={!!confirmPassword.error}
                    id="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    placeholder="Please repeat your Password"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    helperText={this.fetchError("confirmPassword")}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                  />
                </div>
              </Paper>
            </div>
            <div
              className={`${classes.columnItem} flex row jc-center ai-center`}
            >
              <Link href="/">
                <Button
                  className={classes.buttons}
                  variant="outlined"
                  color="secondary"
                >
                  Home
                </Button>
              </Link>
              <Button
                className={classes.buttons}
                variant="contained"
                color="secondary"
                disabled={!isValid}
              >
                Sign Up
              </Button>
            </div>
            <div className={classes.columnItem}>
              <Typography variant="body2">
                <Link href="/signin">
                  <a>Already have an account? Login</a>
                </Link>
              </Typography>
            </div>
          </div>
        </Background>
      </Page>
    );
  }
}

export default withStyles(styles)(SignUp);
