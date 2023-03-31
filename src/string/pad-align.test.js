const padAlign = require("./pad-align").default;

test('padAlign("test", 6)', () => {
  expect(padAlign("test", 6)).toStrictEqual("test  ");
});
