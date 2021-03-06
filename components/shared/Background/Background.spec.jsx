import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import WithTheme from '../../../__test__/mocks/WithTheme';
import BackgroundComponent from './Background';

describe('<BackgroundComponent />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <WithTheme>
        <BackgroundComponent>
          <div>Test!</div>
        </BackgroundComponent>
      </WithTheme>,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
