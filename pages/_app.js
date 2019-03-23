import App, { Container } from 'next/app';
import Page from '../components/high-level/Page/Page';

// import { ApolloProvider } from 'react-apollo';
// import withApollo from '../lib/with-apollo';

//comment
class MyApp extends App {
  // Special Next.js only lifecycle method which runs
  // before Component renders and exposes on props
  // anything that is returned
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {};
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }
  //   // This exposes the query to the user
  //   pageProps.query = ctx.query;
  //   return { pageProps };
  // }

  render() {
    const { Component, /*pageProps*/ } = this.props;
    return (
      <Container>
        <Page>
          {/* <Component {...pageProps} /> */}
          <Component />
        </Page>
      </Container>
    );
  }
}

export default MyApp;