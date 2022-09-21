const max = require('./max').default;

test('max string {0: "a", 1: "ab", 2: "abc", 3: "ab"} = 3', () => {
  expect(max({0: "a", 1: "ab", 2: "abc", 3: "ab"})).toBe(3);
});
