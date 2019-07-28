import { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  static propTypes = {
    value: PropTypes.string,
    validator: PropTypes.func,
    outputValue: PropTypes.func,
  };

  static defaultProps = {
    value: '',
  };

  constructor(props) {
    super(props);
    const { value, validator } = this.props;
    const isValid = validator
      ? validator(value)
      : true;
    this.state = {
      originalValue: value,
      isValid,
      value,
      touched: false,
      hasChanged: false,
      errors: null,
    };
  }

  onBlur = () => {
    this.setState({
      touched: true,
    });
  }

  onChange = (evt) => {
    const { originalValue } = this.state;
    const { validator, outputValue } = this.props;
    const newValue = evt.target.value;
    const hasChanged = newValue !== originalValue;
    const errors = validator
      ? validator(newValue)
      : null;
    const isValid = !(errors);
    const newState = {
      isValid,
      value: newValue,
      touched: true,
      hasChanged,
      errors,
    };
    this.setState(newState);
    outputValue(newState);
  }

  render() {
    const { children } = this.props;
    const functionality = {
      onChange: this.onChange,
      onBlur: this.onBlur,
    };
    // @ts-ignore
    return children(this.state, functionality);
  }
}

export default FormInput;
