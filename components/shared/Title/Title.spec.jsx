import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import TitleComponent from './Title';

const classes = {
  root: {
    test: 'test',
  },
  content: {
    test: 'test',
  },
  title: {
    test: 'test',
  },
  controls: {
    test: 'test',
  },
};

describe('<Title />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <TitleComponent classes={classes} title="Test Title">
        <div>Children</div>
      </TitleComponent>,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
