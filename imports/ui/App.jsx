import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Typography from '@material-ui/core/Typography';
import Compose from './Compose';
import Header from './Header';
import Feed from './Feed';

const App = ({ user }) => (
  <div>
    <Header />
    <Typography variant="display3">Welcome to Meteor!</Typography>
    {user && (
      <Compose />
    )}
    <Feed />
  </div>
);

const tracker = () => {
  return {
    user: Meteor.user(),
  };
};

export default withTracker(tracker)(App);
