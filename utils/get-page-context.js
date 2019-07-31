import { SheetsRegistry } from 'jss';
import {
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import muiTheme from '../styles/mui-theme';

const theme = createMuiTheme(muiTheme);

function createPageContext() {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName(),
  };
}

let pageContext;

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
}
