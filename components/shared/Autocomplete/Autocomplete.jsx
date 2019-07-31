/* eslint-disable react/prop-types, react/jsx-handler-names */

import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { withStyles } from '@material-ui/styles';

import Menu from './Menu';
import ValueContainer from './ValueContainer';
import SingleValue from './SingleValue';
import Placeholder from './Placeholder';
import Option from './Option';
import Control from './Control';
import NoOptionsMessage from './NoOptionsMessage';

import styles from './Autocomplete.styles';

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

const Autocomplete = (props) => {
  const {
    classes,
    theme,
    placeholder,
    list,
    label,
    handleChange,
    initialValue,
  } = props;

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  };

  return (
    <div className={classes.root}>
      <Select
        classes={classes}
        styles={selectStyles}
        options={list}
        // @ts-ignore
        components={components}
        value={initialValue}
        onChange={value => handleChange(value)}
        label={label}
        placeholder={placeholder}
        isClearable
      />
    </div>
  );
};

Autocomplete.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(Autocomplete);
