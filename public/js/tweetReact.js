/*** @jsx React.DOM */

var tweetReact = {
  renderTweetData: function (tweets, section) {
    var Tweet = React.createClass({
      render: function () {
        return (
            <div className='tweet-item'>
              <div className='row'>
                <div className='col-xs-2'>
                  <div className='tweet-img'>
                    <img src={this.props.imgUrl} />
                  </div>
                </div>
                <div className='col-xs-10'>
                  <div className='tweet-user'>@{this.props.username}</div>
                  <div className='tweet-msg'>{this.props.text}</div>
                </div>
                <div className='col-xs-12'>
                  <div className='tweet-actions'>
                    <div className='tweet-img-sprite reply' data-id={this.props.id} title='Reply'></div>
                    <div className='tweet-img-sprite favorite' data-id={this.props.id} title='Favorite'></div>
                    <div className='tweet-img-sprite retweet' data-id={this.props.id} title='Retweet'></div>
                  </div>
                </div>
              </div>
            </div>
            )
      }
    });
    var TweetList = React.createClass({
      render: function () {
        var tweetItem = this.props.data.map(function (tweet) {
          return <Tweet text={tweet.text} username={tweet.user.screen_name} imgUrl={tweet.user.profile_image_url} id={tweet.id} />
        });
        return (
            <div className='tweet-item-list'>
              {tweetItem}
            </div>
            )
      }
    });
    React.render(<TweetList data={tweets} />, document.getElementById('tweet-' + section));
  }
};