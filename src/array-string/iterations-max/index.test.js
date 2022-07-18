const iterations = require('./index').default;

test('iterations-max(["a", "ab", "abc", "ab", "abcde"], 28, 2) = 4', () => {
  expect(iterations(["a", "ab", "abc", "ab", "abcde"], 28, 2)).toBe(4);
});
