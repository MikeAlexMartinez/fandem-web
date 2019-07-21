import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import classNames from 'classnames';

import DrawerContents from '../DrawerContents/DrawerContents';

class Navigation extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    container: PropTypes.func,
  };

  state = {
    open: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes, children, container } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classNames(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <Menu />
            </IconButton>
            <Typography variant="h5" color="inherit" noWrap>
              Fandem.io
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          container={container}
          variant="persistent"
          anchor={classes.theme.direction === 'rtl' ? 'right' : 'left'}
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <DrawerContents toggleDrawer={this.handleDrawerToggle} />
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          {children}
        </main>
      </div>
    );
  }
}

export default Navigation;
