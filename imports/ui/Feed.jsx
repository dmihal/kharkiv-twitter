import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Tweets from '../api/tweets';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit,
  },
});

const tracker = () => {
  return {
    tweets: Tweets.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
};

export default
@withStyles(styles)
@withTracker(tracker)
class Feed extends Component {
  render() {
    const tweets = this.props.tweets.map(
      link => this.makeLink(link)
    );

    return (
      <Paper className={this.props.classes.root}>
        <Typography variant="headline">Feed</Typography>
        <List>{ tweets }</List>
      </Paper>
    );
  }

  makeLink(tweet) {
    const user = Meteor.users.findOne(tweet.user);
    return (
        <ListItem key={tweet._id}>
          <Avatar src={user && user.services.facebook.picture.data.url}>
          </Avatar>
          <ListItemText
            primary={tweet.message}
            secondary={user && user.profile.name}
          />
        </ListItem>
    );
  }
}
