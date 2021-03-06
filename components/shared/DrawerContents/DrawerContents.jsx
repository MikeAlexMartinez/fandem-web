import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import {
  ChevronLeft,
  ChevronRight,
  Help,
  ExitToAppRounded,
  BallotOutlined,
  Settings,
} from '@material-ui/icons';

import DrawerProfile from '../DrawerProfile';

import styles from './DrawerContents.style';

const DrawerContents = ({ classes, theme, toggleDrawer }) => (
  // Profile
  // Contests
  // Settings
  // Help
  // Logout
  <div className={`${classes.drawerContainer} flex column jc-sb`}>
    {/* Top Half */}
    <div>
      {/* Toolbar header */}
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => toggleDrawer()}>
          {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      {/* Profile */}
      <DrawerProfile />

      {/* Contests */}
      <div>
        <ListItem button>
          <ListItemIcon>
            <BallotOutlined />
          </ListItemIcon>
          <ListItemText primary="Contests" />
        </ListItem>
      </div>
    </div>

    {/* Bottom Half */}
    <div>
      <List>
        {/* Settings */}
        <ListItem button>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>

        {/* Help */}
        <ListItem button>
          <ListItemIcon>
            <Help />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>

        {/* Logout */}
        <ListItem button>
          <ListItemIcon>
            <ExitToAppRounded />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  </div>
);

DrawerContents.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(DrawerContents);
