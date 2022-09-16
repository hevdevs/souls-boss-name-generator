const dotenv = require('dotenv');
const { TwitterApi } = require('twitter-api-v2');

dotenv.config({ path: `${__dirname}/.././config.env` });

if (
  !process.env.TWITTER_CONSUMER_KEY ||
  !process.env.TWITTER_CONSUMER_SECRET ||
  !process.env.TWITTER_ACCESS_KEY ||
  !process.env.TWITTER_ACCESS_SECRET
) {
  throw new Error('TWITTER ACCESS KEYS NOT SET');
};

const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_CONSUMER_KEY,
  appSecret: process.env.TWITTER_CONSUMER_SECRET,
  accessToken: process.env.TWITTER_ACCESS_KEY,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

const rwClient = twitterClient.readWrite;

module.exports = rwClient;
