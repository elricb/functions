const mean = require('./mean').default;

test('mean string {0: "a", 1: "ab", 2: "abc", 3: "ab"} = 2', () => {
  expect(mean({0: "a", 1: "ab", 2: "abc", 3: "ab"})).toBe(2);
});
