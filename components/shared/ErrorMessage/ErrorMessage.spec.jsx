import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ErrorMessageComponent from './ErrorMessage';

describe('<ErrorMessage />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <ErrorMessageComponent
        message="Test Message"
      />,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
