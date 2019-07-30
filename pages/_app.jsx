import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ApolloProvider } from 'react-apollo';
import getPageContext from '../utils/get-page-context';
import withApollo from '../lib/with-apollo';


class MyApp extends App {
  // Special Next.js only lifecycle method which runs
  // before Component renders and exposes on props
  // anything that is returned
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // This exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Head>
            <title>fandem.1-0</title>
          </Head>
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <ThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              {/* CssBaseline kickstart an elegant, consistent,
                * and simple baseline to build upon. */}
              <CssBaseline />
              {/* Pass pageContext to the _document though the renderPage enhancer
                  to render collected styles on server-side. */}
              <Component pageContext={this.pageContext} {...pageProps} />
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
