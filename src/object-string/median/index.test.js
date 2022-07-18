const median = require('./index').default;

test('median string {0: "a", 1: "ab", 2: "abcd", 3: "abc", 4: "abcde"} = 3', () => {
  expect(median({0: "a", 1: "ab", 2: "abcd", 3: "abc", 4: "abcde"})).toBe(3);
});
