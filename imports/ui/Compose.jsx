import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit,
    textAlign: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});


export default
@withStyles(styles)
class Compose extends Component {
  state = {
    message: '',
  }

  postTweet() {
    const callback = err => this.setState({ message: '' });
    Meteor.call('postTweet', this.state.message, callback);
  }

  render() {
    return (
      <Paper className={this.props.classes.root}>
        <TextField
          label="New Tweet"
          multiline
          rows="4"
          value={this.state.message}
          className={this.props.classes.textField}
          onChange={e => this.setState({ message: e.target.value })}
          margin="normal"
        />
        <Button
          variant="raised"
          onClick={() => this.postTweet()}
        >
          Post
        </Button>
      </Paper>
    );
  }
}
