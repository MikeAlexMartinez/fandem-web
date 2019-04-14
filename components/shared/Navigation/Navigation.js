import React, { Component } from "react";
import {
  withStyles,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Drawer
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import styles from "./Navigation.styles";

import DrawerContents from "../DrawerContents/DrawerContents";

class Navigation extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={`flex`}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menubutton}
            >
              <Menu />
            </IconButton>
            <Typography variant="h5" color="inherit" noWrap>
              Fandem.io
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={classes.theme.direction === "rtl" ? "right" : "left"}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <DrawerContents />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="js">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              <DrawerContents />
            </Drawer>
          </Hidden>
        </nav>
        <main className={`${classes.content} flex`}>{this.props.children}</main>
      </div>
    );
  }
}

export default withStyles(styles)(Navigation);
