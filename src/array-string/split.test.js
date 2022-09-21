const split = require("./split").default;

test('split(["list", "of", "items", "to", "right", "align"], 6, 13) regular test', () => {
  expect(split(["list", "of", "items", "to", "right", "align"], 6, 13)).toStrictEqual([
    ["list", "of"],
    ["items", "to"],
    ["right", "align"]
  ]);
});

test('split(["list", "of", "items", "to", "right", "align"], 13, -1) invalid test', () => {
  expect(split(["list", "of", "items", "to", "right", "align"], 13, -1)).toStrictEqual(null);
});
