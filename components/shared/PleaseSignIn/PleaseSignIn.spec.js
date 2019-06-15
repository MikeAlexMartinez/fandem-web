import { mount } from "enzyme";
import { MockedProvider } from "react-apollo/test-utils";

import { fakeUser } from "../../../test/data/data";
import wait from "../../../test/utils/wait";

import PleaseSignIn from "./PleaseSignIn";
import { CURRENT_USER_QUERY } from "../../../db/queries/account.queries";

const notSignedInMocks = [
  {
    request: {
      query: CURRENT_USER_QUERY
    },
    result: {
      data: {}
    }
  }
];

const signedInMocks = [
  {
    request: {
      query: CURRENT_USER_QUERY
    },
    result: {
      data: {
        currentUser: fakeUser()
      }
    }
  }
];

const props = {
  classes: {
    root: "mock"
  }
};

describe("<PleaseSignIn />", () => {
  it("renders the child component when the user is signed in", async () => {
    const Hey = () => <h1>Hey!</h1>;
    const wrapper = mount(
      <MockedProvider mocks={signedInMocks}>
        <PleaseSignIn {...props}>
          <Hey />
        </PleaseSignIn>
      </MockedProvider>
    );
    await wait(500);
    wrapper.update();

    console.log(wrapper.debug());

    const Child = wrapper.find("Hey");
    expect(Child.exists()).toBe(true);
  });

  it("renders the circular progress when loading", async () => {
    const wrapper = mount(
      <MockedProvider mocks={notSignedInMocks}>
        <PleaseSignIn {...props} />
      </MockedProvider>
    );

    const Progress = wrapper.find("CircularProgress");
    expect(Progress.exists()).toBe(true);
  });

  it("renders SignInForm when no user is signed in", async () => {
    const wrapper = mount(
      <MockedProvider mocks={notSignedInMocks}>
        <PleaseSignIn {...props} />
      </MockedProvider>
    );
    await wait();
    wrapper.update();

    const SignInForm = wrapper.find("SignInForm");
    expect(SignInForm.exists()).toBe(true);
  });
});
