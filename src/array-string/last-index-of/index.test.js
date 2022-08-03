const lastIndexOf = require('./index').default;

test('lastIndexOf("The quick brown fox jumps over the lazy dog.", ["fox", "lazy"]) = 39', () => {
  expect(lastIndexOf("The quick brown fox jumps over the lazy dog.", ["fox", "lazy"])).toBe(39);
});
