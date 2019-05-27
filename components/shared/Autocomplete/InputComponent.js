import React from "react";
import PropTypes from "prop-types";

function InputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

InputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default InputComponent;
