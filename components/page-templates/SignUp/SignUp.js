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
import validatePassword from "../../../utils/validators/password";
import Page from "../../shared/Page/Page";
import Background from "../../shared/Background/Background";

import styles from "./SignUp.styles";

class SignUp extends Component {
  state = {
    form: {
      fields: {
        firstName: {
          valid: false,
          value: "",
          touched: false,
          error: "",
          errorMessages: {
            required: "A First Name is Required"
          },
          label: "First Name"
        },
        lastName: {
          valid: false,
          value: "",
          touched: false,
          error: "",
          errorMessages: {
            required: "A Last Name is Required"
          },
          label: "Last Name"
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
    const field = {
      ...this.state.form.fields[id],
      touched: true,
      error: ((!value || value === "") && "required") || ""
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

  fetchLabel = id => {
    const field = this.state.form.fields[id];
    const { label, error, errorMessages } = field;
    return error && errorMessages.hasOwnProperty(error)
      ? errorMessages[error]
      : label;
  };

  validateForm = () => {
    const { fields } = this.state.form;
    return Object.keys(fields).every(key => {
      const field = fields[key];
      return field.valid;
    });
  };

  handleChange = e => {
    console.log("CHANGED");
    console.log(e.target);
    const { id, value } = e.target;
    const field = this.state.form.fields[id];
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
      return {
        ...prevState,
        form: {
          ...prevState.form,
          fields: {
            ...prevState.form.fields,
            [id]: updatedField
          },
          isValid: this.validateForm()
        }
      };
    });
  };

  render() {
    const {
      form: {
        isValid,
        fields: { email, firstName, lastName, password, confirmPassword }
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
                    label={this.fetchLabel("email")}
                    placeholder="Please enter your email"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                  />
                  {/* First Name */}
                  <TextField
                    error={!!firstName.error}
                    id="firstName"
                    type="text"
                    label={this.fetchLabel("firstName")}
                    placeholder="Please enter your first name"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                  />
                  {/* Last Name */}
                  <TextField
                    error={!!lastName.error}
                    id="lastName"
                    type="text"
                    label={this.fetchLabel("lastName")}
                    placeholder="Please enter your last name"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
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
                    label={this.fetchLabel("password")}
                    placeholder="Please enter a password"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                  />
                  {/* Confirm Password */}
                  <TextField
                    error={!!confirmPassword.error}
                    id="confirmPassword"
                    type="password"
                    label={this.fetchLabel("confirmPassword")}
                    placeholder="Please repeat your password"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
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
