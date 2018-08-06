import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  MenuItem,
  Menu,
  Typography,
  IconButton
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon
} from '@material-ui/icons';
import withRoot from '../withRoot';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  state = {
    auth: true,
    anchorEl: null,
    anchorSidebar: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenuSidebar = event => {
    this.setState({ anchorSidebar: event.currentTarget });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  
  handleCloseSidebar = () => {
    this.setState({ anchorSidebar: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl, anchorSidebar } = this.state;
    const open = Boolean(anchorEl);
    const openSidebar = Boolean(anchorSidebar);

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.handleMenuSidebar}
              aria-owns={openSidebar ? 'menu-sidebar' : null}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-sidebar"
              anchorEl={anchorSidebar}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openSidebar}
              onClose={this.handleCloseSidebar}
            >
              <MenuItem><Link to="/">Home</Link></MenuItem>
              <MenuItem><Link to="/favorites">Favorites</Link></MenuItem>
            </Menu>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {/* Photos */}
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(MenuAppBar));