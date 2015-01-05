var tweetConnection = require('../connections/tweetConnection');

exports.searchTweetFeed = function (params, successCallback, failureCallback) {
  tweetConnection.searchTweetFeed(params, successCallback, failureCallback);
};

exports.searchHomeTimelineFeed = function (params, successCallback, failureCallback) {
  tweetConnection.searchHomeTimelineFeed(params, successCallback, failureCallback);
};

exports.searchUserTimelineFeed = function (params, successCallback, failureCallback) {
  tweetConnection.searchUserTimelineFeed(params, successCallback, failureCallback);
};

exports.sendStatusUpdate = function (params, successCallback, failureCallback) {
  tweetConnection.sendStatusUpdate(params, successCallback, failureCallback);
};

exports.retweetStatusUpdate = function (tweetID, successCallback, failureCallback) {
  tweetConnection.retweetStatusUpdate(tweetID, successCallback, failureCallback);
};

exports.favoriteTweet = function (params, successCallback, failureCallback) {
  tweetConnection.favoriteTweet(params, successCallback, failureCallback);
};