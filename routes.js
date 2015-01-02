var urls = require('./app/enums/urlConstants').urls;
module.exports = function (app) {
  var tweetController = require('./app/controllers/tweetController');
  app.get(urls.API.FETCH_TWEETS, tweetController.showTweetFeed);

  var testController = require('./app/controllers/testController');
  app.get(urls.WEB.HOME_PAGE, testController.showHomePage);
  app.get(urls.WEB.TEST_REACT_JSX, testController.showTestReactJSX);
  app.get(urls.WEB.TEST_REACT_JS, testController.showTestReactWithoutJSX);

};