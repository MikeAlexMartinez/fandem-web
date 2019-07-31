import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './GlobalStyles.styles';

const Page = ({ children }) => <div>{children}</div>;

export default withStyles(styles)(Page);
