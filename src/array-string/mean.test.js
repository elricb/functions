const mean = require('./mean').default;

test('mean(["a", "ab", "abc", "ab"]) = 2', () => {
  expect(mean(["a", "ab", "abc", "ab"])).toBe(2);
});
