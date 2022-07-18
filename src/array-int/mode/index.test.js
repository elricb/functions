const mode = require('./index').default;

test('mode([1, 2, 4, 3, 5, 4]) = 4', () => {
  expect(mode([1, 2, 4, 3, 5, 4])).toBe(4);
});
