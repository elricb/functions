const mean = require('./mean').default;

test('mean([1, 2, 3, 2]) = 2', () => {
  expect(mean([1, 2, 3, 2])).toBe(2);
});
