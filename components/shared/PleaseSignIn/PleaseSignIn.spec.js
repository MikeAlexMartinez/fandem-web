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
      data: {
        currentUser: null
      }
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

const loadingMocks = [
  {
    request: {
      query: CURRENT_USER_QUERY
    },
    result: {
      data: null,
      loading: true
    }
  }
];

const props = {
  classes: {
    root: "mock"
  }
};

describe("<PleaseSignIn />", () => {
  it("renders the circular progress when loading", async () => {});

  it("renders the child component when the user is signed in", async () => {});

  it("renders SignInForm when no user is signed in", async () => {
    const wrapper = mount(
      <MockedProvider mocks={loadingMocks}>
        <PleaseSignIn {...props} />
      </MockedProvider>
    );
    await wait();
    wrapper.update();

    console.log(wrapper.debug());

    const Progress = wrapper.find("SignInForm");
    expect(Progress.exists()).toBe(true);
  });
});
