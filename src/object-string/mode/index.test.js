const mode = require('./index').default;

test('mode string {1: "a", 2: "ab", 3: "abcd", 4: "abc", 5: "abcde", 6: "ab"} = 2', () => {
  expect(mode({1: "a", 2: "ab", 3: "abcd", 4: "abc", 5: "abcde", 6: "ab"})).toBe(2);
});
