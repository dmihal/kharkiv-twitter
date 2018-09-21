import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Header({ classes, user }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.grow}>
          Kharkiv-Twitter
        </Typography>
        {user ? (
          <Typography color="inherit">{user.profile.name}</Typography>
        ) : (
          <Button color="inherit" onClick={() => Meteor.loginWithFacebook()}>Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const tracker = () => {
  return {
    user: Meteor.user(),
  };
};

export default withStyles(styles)(withTracker(tracker)(Header));
