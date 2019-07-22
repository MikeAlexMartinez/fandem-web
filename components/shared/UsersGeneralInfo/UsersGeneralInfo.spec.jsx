import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import UsersGeneralInfoComponent from './UsersGeneralInfo';

describe('<UsersGeneralInfo />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<UsersGeneralInfoComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
