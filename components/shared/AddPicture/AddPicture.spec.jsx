import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import WithTheme from '../../../__test__/mocks/WithTheme';
import AddPictureComponent from './AddPicture';

describe('<AddPicture />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <WithTheme>
        <AddPictureComponent
          open
          handleClose={() => {}}
          title="Add Picture Test"
        />
      </WithTheme>,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
