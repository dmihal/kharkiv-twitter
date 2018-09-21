import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
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

Meteor.methods({
  postTweet(message) {
    check(this.userId, String);
    Tweets.newTweet(message, this.userId);
  },
});

Meteor.publish('recentTweets', function() {
  return [
    Tweets.find({}, {
      sort: {
        createdAt: -1,
      },
      limit: 10,
    }),
    Meteor.users.find({}, {
      fields: {
        'profile.name': 1,
        'services.facebook.picture': 1,
      },
    }),
  ];
})
