/* eslint-disable react/prop-types, react/jsx-handler-names */

import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { withStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";

import Menu from "./Menu";
import ValueContainer from "./ValueContainer";
import SingleValue from "./SingleValue";
import Placeholder from "./Placeholder";
import Option from "./Option";
import Control from "./Control";
import NoOptionsMessage from "./NoOptionsMessage";

import styles from "./Autocomplete.styles";

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

class Autocomplete extends React.Component {
  state = {
    single: null
  };

  handleChange = name => value => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { classes, theme, placeholder, list, label } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        "& input": {
          font: "inherit"
        }
      })
    };

    return (
      <div className={classes.root}>
        <Select
          classes={classes}
          styles={selectStyles}
          options={list}
          components={components}
          value={this.state.single}
          onChange={this.handleChange("single")}
          label={label}
          placeholder={""}
          isClearable
        />
      </div>
    );
  }
}

Autocomplete.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Autocomplete);
