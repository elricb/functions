const min = require('./index').default;

test('min(["a", "ab", "abc", "ab"]) = 1', () => {
  expect(min(["a", "ab", "abc", "ab"])).toBe(1);
});
