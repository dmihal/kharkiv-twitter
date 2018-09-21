import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Links from '../api/links';

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
    links: Links.find().fetch(),
  };
};

export default
@withStyles(styles)
@withTracker(tracker)
class Info extends Component {
  render() {
    const links = this.props.links.map(
      link => this.makeLink(link)
    );

    return (
      <Paper className={this.props.classes.root}>
        <Typography variant="headline">Learn Meteor!</Typography>
        <List>{ links }</List>
      </Paper>
    );
  }

  makeLink(link) {
    return (
      <ListItem key={link._id} href={link.url} target="_blank" divider component="a" button>
        {link.title}
      </ListItem>
    );
  }
}
