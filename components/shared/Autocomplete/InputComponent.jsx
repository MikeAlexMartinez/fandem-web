import React from 'react';
import PropTypes from 'prop-types';

const InputComponent = ({ inputRef, ...props }) => <div ref={inputRef} {...props} />;

InputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export default InputComponent;
