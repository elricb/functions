const max = require('./max').default;

test('max(["a", "ab", "abc", "ab"]) = 3', () => {
  expect(max(["a", "ab", "abc", "ab"])).toBe(3);
});
