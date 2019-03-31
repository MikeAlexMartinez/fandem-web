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
import validatePassword from "../../../utils/validators/password";
import validateForm from "../../../utils/validators/form";

import Page from "../../shared/Page/Page";
import Background from "../../shared/Background/Background";

import styles from "./SignIn.styles";

class SignIn extends Component {
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
        },
        password: {
          validator: validatePassword(8),
          valid: false,
          value: "",
          touched: false,
          error: "",
          errorMessages: {
            required: "A Password is Required",
            format: "Password should be at least 8 characters"
          },
          label: "Password"
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
        fields: { email, password }
      }
    } = this.state;
    const { classes } = this.props;
    return (
      <Page>
        <Background>
          <div className={`${classes.root} flex column jc-center ai-center`}>
            <div className={`${classes.columnItem}`}>
              <Paper className={`${classes.paper} flex column`} elevation={1}>
                <Typography variant="h5" className={`${classes.heading}`}>
                  Sign In
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
                  {/* Password */}
                  <TextField
                    error={!!email.error}
                    id="password"
                    type="password"
                    label="Password"
                    placeholder="Please enter your Password"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    helperText={this.fetchError("password")}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                  />
                </div>
                <Divider />
                <div className={`${classes.columnItem} ${classes.linkText}`}>
                  <Typography variant="body2">
                    <Link href="/forgot">
                      <a>Forgotten Password?</a>
                    </Link>
                  </Typography>
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
                Sign In
              </Button>
            </div>
            <div className={classes.columnItem}>
              <Typography variant="body2">
                <Link href="/signup">
                  <a>Dont't have an account? Sign Up</a>
                </Link>
              </Typography>
            </div>
          </div>
        </Background>
      </Page>
    );
  }
}

export default withStyles(styles)(SignIn);
