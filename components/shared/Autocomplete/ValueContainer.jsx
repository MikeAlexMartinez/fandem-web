import React from 'react';
import PropTypes from 'prop-types';

const ValueContainer = ({
  selectProps,
  children,
}) => (
  <div className={selectProps.classes.valueContainer}>
    {children}
  </div>
);

ValueContainer.propTypes = {
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired,
};

export default ValueContainer;
