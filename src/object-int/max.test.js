const max = require('./max').default;

test('max int {1: 1, 2: 2, 3: 3, 4: 2} = 3', () => {
  expect(max({1: 1, 2: 2, 3: 3, 4: 2})).toBe(3);
});
