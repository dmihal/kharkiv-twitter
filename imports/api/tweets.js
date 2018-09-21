import { Mongo } from 'meteor/mongo';

export default Tweets = new Mongo.Collection('tweets');

Tweets.newTweet = function newTweet(message, user) {
  Tweets.insert({ message, user, createdAt: new Date() });
}
