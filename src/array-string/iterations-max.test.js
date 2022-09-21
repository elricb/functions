const iterations = require('./iterations-max').default;

test('iterations-max(["a", "ab", "abc", "ab", "abcde"], 28, 2) = 4', () => {
  expect(iterations(["a", "ab", "abc", "ab", "abcde"], 28, 2)).toBe(4);
});

test('iterations-max(["a", "ab", "abc", "ab", "abcde"], -3, 20) = -1', () => {
  expect(iterations(["a", "ab", "abc", "ab", "abcde"], -3, 2)).toBe(-1);
});
