const mode = require('./index').default;

test('mode(["a", "ab", "abcd", "abc", "abcde", "ab"]) = 2', () => {
  expect(mode(["a", "ab", "abcd", "abc", "abcde", "ab"])).toBe(2);
});
