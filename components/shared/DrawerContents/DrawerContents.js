import React from "react";
import {
  List,
  ListItem,
  withStyles,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import {
  Help,
  ExitToAppRounded,
  BallotOutlined,
  Settings
} from "@material-ui/icons";

import styles from "./DrawerContents.style";

const DrawerContents = ({ classes, closeMenu }) => (
  // Profile
  // Contests
  // Settings
  // Help
  // Logout
  <div className={`${classes.drawerContainer} flex column jc-sb`}>
    {/* Top Half */}
    <div>
      {/* Profile */}
      <div className={classes.userProfile}>User Profile</div>

      {/* Contests */}
      <div>
        <ListItem button>
          <ListItemIcon>
            <BallotOutlined />
          </ListItemIcon>
          <ListItemText primary={`Contests`} />
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
          <ListItemText primary={`Settings`} />
        </ListItem>

        {/* Help */}
        <ListItem button>
          <ListItemIcon>
            <Help />
          </ListItemIcon>
          <ListItemText primary={`Help`} />
        </ListItem>

        {/* Logout */}
        <ListItem button>
          <ListItemIcon>
            <ExitToAppRounded />
          </ListItemIcon>
          <ListItemText primary={`Logout`} />
        </ListItem>
      </List>
    </div>
  </div>
);

export default withStyles(styles)(DrawerContents);
