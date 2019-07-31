import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import WithTheme from '../../../__test__/mocks/WithTheme';
import EditProfileFormComponent from './EditProfileForm';
import { fakeUser, fakeCountries, fakeTeams } from '../../../__test__/data/data';

const countries = {
  data: {
    countries: fakeCountries(),
  },
};

const teams = {
  data: {
    teams: fakeTeams(),
  },
};

describe('<EditProfileForm />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <WithTheme>
        <EditProfileFormComponent
          user={fakeUser()}
          countries={countries}
          teams={teams}
        />
      </WithTheme>,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
