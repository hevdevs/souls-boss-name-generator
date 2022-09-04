const dotenv = require("dotenv");
const { TwitterApi } = require("twitter-api-v2");

dotenv.config({ path: `${__dirname}/config.env` });

const twitterClient = new TwitterApi({
	appKey: process.env.TWITTER_CONSUMER_KEY,
	appSecret: process.env.TWITTER_CONSUMER_SECRET,
	accessToken: process.env.TWITTER_ACCESS_KEY,
	accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

console.log(process.env.TWITTER_ACCESS_KEY);

const rwClient = twitterClient.readWrite;

module.exports = rwClient;
