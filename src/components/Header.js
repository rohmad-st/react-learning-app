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
import { Menu as MenuIcon } from '@material-ui/icons';
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

class Header extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  state = {
    anchorEl: null
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.handleMenu}
              aria-owns={open ? 'menu-sidebar' : null}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-sidebar"
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
              <MenuItem component={Link} to="/">Home</MenuItem>
              <MenuItem component={Link} to="/show_favorite">Favorites</MenuItem>
            </Menu>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {/* Photos */}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Header));