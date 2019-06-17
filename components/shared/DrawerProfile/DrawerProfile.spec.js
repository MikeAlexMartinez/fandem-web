import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { MockedProvider } from "react-apollo/test-utils";

import DrawerProfile from "./DrawerProfile";

const classes = {
  userProfile: {},
  imgContainer: {},
  photo: {},
  spinnerContainer: {},
  greeting: {},
  greetingText: {},
  actions: {}
};

describe("<DrawerProfile />", () => {
  it("renders and matches snapshot", async () => {
    const wrapper = mount(
      <MockedProvider>
        <DrawerProfile classes={classes} />
      </MockedProvider>
    );

    const drawerProfile = wrapper.find("DrawerProfile");

    expect(toJSON(drawerProfile)).toMatchSnapshot();
  });
});
