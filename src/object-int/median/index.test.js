const median = require('./index').default;

test('median string {1: 1, 2: 2, 3: 4, 4: 3, 5: 5} = 3', () => {
  expect(median({1: 1, 2: 2, 3: 4, 4: 3, 5: 5})).toBe(3);
});
