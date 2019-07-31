import React from 'react';
import { withStyles } from '@material-ui/styles';

import Title from '../Title';

import styles from './UsersGeneralInfo.styles';

const UsersGeneralInfo = () => (
  <div>
    <Title title="Fandem Users" />
    <div>Fandem Users high level information</div>
  </div>
);

export default withStyles(styles)(UsersGeneralInfo);
