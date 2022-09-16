const { selectTemplate, formulateTweet, getWords } = require('../utils');

describe('selectTemplate (tweet length)', () => {
    test('returns a string', () => {
        const testTemplateArr = ['adj noun', 'noun noun', 'adj verb noun']
        expect(typeof selectTemplate(testTemplateArr)).toBe('string')
    });
    test("returns a new string", () => {
        const testTemplateArr = ['adj noun', 'noun noun', 'adj verb noun'];
        selectTemplate(testTemplateArr);
        expect(testTemplateArr).toEqual([
            'adj noun',
            'noun noun',
            'adj verb noun',
        ]);
    });
    test("input is not mutated", () => {
        const testTemplateArr = [
            'adj noun',
            'noun noun',
            'adj verb noun',
        ];
        expect(selectTemplate(testTemplateArr)).not.toBe(testTemplateArr);
    });
    test('output is a random template string selected from input arr', () => {
        const testTemplateArr = [
            'adj noun',
            'noun noun',
            'adj verb noun',
        ];
        const result = selectTemplate(testTemplateArr);
        expect(testTemplateArr.includes(result)).toBe(true);
    });
});

describe("formulateTweet", () => {
    test("returns empty string when given empty string", async () => {
        expect(typeof await formulateTweet("")).toBe("string");
        expect(await formulateTweet("")).toBe("");
    });
    test("input is not mutated", async () => {
        const testStr = "adj noun";
        await formulateTweet(testStr)
        expect(testStr).toEqual("adj noun")
    });
    test("returns a new string", async () => {
        const testStr = 'noun of concept';
        const result = await formulateTweet(testStr);
        expect(result).not.toBe(testStr);
    });
});

describe('getWords', () => {
    test('should return a string', async () => {
        const result = await getWords('adj');
        expect(typeof result).toBe('string');
    });
    test('input is not mutated', async () => {
        const input = 'adj';
        await getWords(input);
        expect(input).toEqual('adj');
    });
    test('returns a new string', async () => {
        const input = 'noun';
        const result = await getWords(input);
        expect(result).not.toBe(input);
    });
});
