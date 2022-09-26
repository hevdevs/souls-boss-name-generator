const rwClient = require('./client');
const { generateTweet } = require('../utils');

process.on('SIGTERM', (signal) => {
	console.log(`Process ${process.pid} received a SIGTERM signal, exiting process.`);
	process.exit(0);
});

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