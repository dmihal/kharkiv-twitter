import React from 'react';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import Hello from './Hello.jsx';
import Info from './Info.jsx';

const App = () => (
  <div>
    <Header />
    <Typography variant="display3">Welcome to Meteor!</Typography>
    <Hello />
    <Info />
  </div>
);

export default App;
