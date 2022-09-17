const fs = require('fs/promises');
const ENV = process.env.NODE_ENV || 'dev';

async function getWords(wordType) {
    try {
        const fileNames = await fs.readdir(`${__dirname}/db/${ENV}-data`);
        const wordFiles = fileNames.map((file) => {
            return file.slice(0, -6);
        });
        if (!wordFiles.includes(wordType)) return "";
        const wordArr = await fs.readFile(`${__dirname}/db/test-data/${wordType}s.json`);
        const parsedWordsArr = JSON.parse(wordArr);
        const randomWord = parsedWordsArr[Math.floor(Math.random() * parsedWordsArr.length)][wordType];
        return randomWord;
    }
    catch (err) {
        throw new Error(err);
    };
};

async function formulateTweet(templateStr) {
    try {
        const wordArr = templateStr.split(' ');
        const tweetArr = [];
        for (const word of wordArr) {
            if (word === 'of' || word === 'the') {
                tweetArr.push(word);
            } else {
                const randomWord = await getWords(word);
                tweetArr.push(randomWord);
            };
        };
        return tweetArr.join(' ');
    }
    catch (err) {
        throw new Error(err);
    };
};

function selectTemplate(templateArr) {
    const templateIndex = Math.floor(Math.random() * templateArr.length);
    return templateArr[templateIndex];
};

async function generateTweet() {
    const templateArr = [
		'noun of concept',
		'adj noun',
		'noun noun',
		'verb noun',
		'place noun',
		'concept noun',
		'adj verb noun',
		'adj noun of concept',
		'adj noun of the place',
		'verb concept noun',
		'adj verb noun of the place',
		'adj noun of the verb concept',
    ];
    try {
        const templateStr = await selectTemplate(templateArr);
        const result = formulateTweet(templateStr);
        return result;
    }
    catch (err) {
        throw new Error(err);
    };
};

module.exports = { getWords, formulateTweet, selectTemplate, generateTweet };