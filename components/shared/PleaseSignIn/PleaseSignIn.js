import { Query } from "react-apollo";
import { CircularProgress } from "@material-ui/core";

import { CURRENT_USER_QUERY } from "../../../db/queries/account.queries";

import Page from "../Page/Page";
import Background from "../Background/Background";
import SignInForm from "../SignInForm/SignInForm";

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading, error }) => {
      if (loading) {
        return (
          <Page>
            <Background>
              <div
                className={`${
                  props.classes.root
                } flex column jc-center ai-center`}
              >
                <CircularProgress
                  style={{
                    height: "200px",
                    width: "200px"
                  }}
                  color="secondary"
                />
              </div>
            </Background>
          </Page>
        );
      }
      if (!data || !data.currentUser) {
        return (
          <Page>
            <Background>
              <div
                className={`${
                  props.classes.root
                } flex column jc-center ai-center`}
              >
                <SignInForm message="You must be signed in to view this page..." />
              </div>
            </Background>
          </Page>
        );
      }
      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;
