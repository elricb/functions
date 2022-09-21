const iterations = require('./iterations-max').default;

test('iterations-max({1: "a", 2: "abc", 3: "ab", 4: "abcde"}, 28, 2) = 4', () => {
  expect(iterations({1: "a", 2: "abc", 3: "ab", 4: "abcde"}, 28, 2)).toBe(4);
});
