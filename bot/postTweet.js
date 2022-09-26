const rwClient = require('./client');
const { generateTweet } = require('../utils');

const postTweet = async () => {
  try {
    const tweetStr = await generateTweet();
    await rwClient.v2.tweet(tweetStr);
  } catch (err) {
    throw new Error(err);
  };
};

postTweet();

setInterval(postTweet, 86400000);