import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit,
  },
});

export default
@withStyles(styles)
class Hello extends Component {
  state = {
    counter: 0,
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <Paper className={this.props.classes.root}>
        <Button onClick={() => this.increment()} variant="raised">Click Me</Button>
        <Typography>You've pressed the button {this.state.counter} times.</Typography>
      </Paper>
    );
  }
}
