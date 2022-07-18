const median = require('./index').default;

test('median([1, 2, 4, 3, 5]) = 3', () => {
  expect(median([1, 2, 4, 3, 5])).toBe(3);
});
