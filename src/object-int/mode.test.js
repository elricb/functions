const mode = require('./mode').default;

test('mode int {1: 1, 2: 2, 3: 4, 4: 3, 5: 5, 6: 2} = 2', () => {
  expect(mode({1: 1, 2: 2, 3: 4, 4: 3, 5: 5, 6: 2})).toBe(2);
});
