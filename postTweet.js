const rwClient = require("../twitter-bot/client");

const tweet = async () => {
    try {
        await rwClient.v2.tweet("test");
    } catch (err) {
        console.log(err);
    };
};

tweet();