const min = require('./index').default;

test('min([1, 2, 3, 2]) = 1', () => {
  expect(min([1, 2, 3, 2])).toBe(1);
});
