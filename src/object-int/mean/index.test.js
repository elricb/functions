const mean = require('./index').default;

test('mean int {1: 1, 2: 2, 3: 3, 4: 2} = 2', () => {
  expect(mean({1: 1, 2: 2, 3: 3, 4: 2})).toBe(2);
});
