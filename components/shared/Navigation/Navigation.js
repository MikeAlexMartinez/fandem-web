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
import classNames from "classnames";

import styles from "./Navigation.styles";

import DrawerContents from "../DrawerContents/DrawerContents";

class Navigation extends Component {
  state = {
    open: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classNames(classes.menuButton)}
            >
              <Menu />
            </IconButton>
            <Typography variant="h5" color="inherit" noWrap>
              Fandem.io
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          container={this.props.container}
          variant="persistent"
          anchor={classes.theme.direction === "rtl" ? "right" : "left"}
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <DrawerContents />
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Navigation);
