// ##### Simple example 1 #####
// A simple example to get my latest tweet and write to a HTML element with
// id "example1". Also automatically hyperlinks URLS and user mentions and
// hashtags.
var config1 = {
  "id": '<r:site:data name="twitter_widget_id" />',
  "domId": 'example1',
  "maxTweets": 5,
  "enableLinks": true
};
twitterFetcher.fetch(config1);
