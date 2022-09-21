const min = require('./min').default;

test('min(["a", "ab", "abc", "ab"]) = 1', () => {
  expect(min(["a", "ab", "abc", "ab"])).toBe(1);
});
