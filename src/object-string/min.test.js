const min = require('./min').default;

test('min string {1: "a", 2: "ab", 3: "abc", 4: "ab"} = 1', () => {
  expect(min({1: "a", 2: "ab", 3: "abc", 4: "ab"})).toBe(1);
});
