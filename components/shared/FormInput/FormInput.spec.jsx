import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import FormInputComponent from './FormInput';

describe('<FormInput />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <FormInputComponent value="test value">
        {(formState, { onChange, onBlur }) => (
          <input {...formState} onChange={onChange} onBlur={onBlur} />
        )}
      </FormInputComponent>,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
