const median = require('./index').default;

test('median(["a", "ab", "abcd", "abc", "abcde"]) = 3', () => {
  expect(median(["a", "ab", "abcd", "abc", "abcde"])).toBe(3);
});
