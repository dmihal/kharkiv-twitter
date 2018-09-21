import { Meteor } from 'meteor/meteor';
import Tweets from '/imports/api/tweets';
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (Tweets.find().count() === 0 && Meteor.users.find().count() > 0) {
    Tweets.newTweet('Welcome to KharkivJS', Meteor.users.findOne()._id);

    Tweets.newTweet('I\'m so excited to talk about Meteor.js :D', Meteor.users.findOne()._id);

    Tweets.newTweet('Let me know if you have any questions!', Meteor.users.findOne()._id);
  }

  ServiceConfiguration.configurations.upsert(
    { service: 'facebook' },
    { $set: Meteor.settings.facebook }
  );
});
