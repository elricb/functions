const min = require('./min').default;

test('min int {1: 1, 2: 2, 3: 3, 4: 2} = 1', () => {
  expect(min({1: 1, 2: 2, 3: 3, 4: 2})).toBe(1);
});
