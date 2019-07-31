import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';

import wait from '../../../__test__/utils/wait';
import WithTheme from '../../../__test__/mocks/WithTheme';
import { fakeUser } from '../../../__test__/data/data';

import PleaseSignIn from './PleaseSignIn';

import { CURRENT_USER_QUERY } from '../../../db/queries/account.queries';

const notSignedInMocks = [
  {
    request: {
      query: CURRENT_USER_QUERY,
    },
    result: {
      data: {
        currentUser: null,
      },
    },
  },
];

const signedInMocks = [
  {
    request: {
      query: CURRENT_USER_QUERY,
    },
    result: {
      data: {
        currentUser: fakeUser(),
      },
    },
  },
];

const props = {
  classes: {
    root: 'mock',
  },
};

const Hey = () => <h1>Hey!</h1>;

describe('<PleaseSignIn />', () => {
  it('renders the child component when the user is signed in', async () => {
    const wrapper = mount(
      <MockedProvider mocks={signedInMocks}>
        <WithTheme>
          <PleaseSignIn {...props}>
            <Hey />
          </PleaseSignIn>
        </WithTheme>
      </MockedProvider>,
    );
    await wait(500);
    wrapper.update();

    const Child = wrapper.find('Hey');
    expect(Child.exists()).toBe(true);
  });

  it('renders the circular progress when loading', async () => {
    const wrapper = mount(
      <MockedProvider mocks={notSignedInMocks}>
        <WithTheme>
          <PleaseSignIn {...props}>
            <Hey />
          </PleaseSignIn>
        </WithTheme>
      </MockedProvider>,
    );
    const Progress = wrapper.find('.MuiCircularProgress-root');
    expect(Progress.exists()).toBe(true);
  });

  it('renders SignInForm when no user is signed in', async () => {
    const wrapper = mount(
      <MockedProvider mocks={notSignedInMocks}>
        <WithTheme>
          <PleaseSignIn {...props}>
            <Hey />
          </PleaseSignIn>
        </WithTheme>
      </MockedProvider>,
    );
    await wait();
    wrapper.update();

    const SignInForm = wrapper.find('SignInForm');
    expect(SignInForm.exists()).toBe(true);
    expect(SignInForm.text()).toContain(
      'You must be signed in to view this page...',
    );
  });
});
