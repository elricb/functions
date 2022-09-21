const lastIndexOf = require("./last-index-of").default;

test('lastIndexOf("The quick brown fox jumps over the lazy dog.", ["fox", "lazy"]) = 39', () => {
  expect(
    lastIndexOf("The quick brown fox jumps over the lazy dog.", ["fox", "lazy"])
  ).toStrictEqual([35, 39]);
});
