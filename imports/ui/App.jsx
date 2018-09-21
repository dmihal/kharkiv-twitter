import React from 'react';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import Feed from './Feed';

const App = () => (
  <div>
    <Header />
    <Typography variant="display3">Welcome to Meteor!</Typography>
    <Feed />
  </div>
);

export default App;
