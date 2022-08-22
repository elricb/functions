const split = require("./index").default;

test('split-max(["list", "of", "items", "to", "right", "align"], 12, 1)', () => {
  expect(split(["list", "of", "items", "to", "right", "align"], 12, 1)).toStrictEqual([
    ["list", "of"],
    ["items", "to"],
    ["right", "align"]
  ]);
});
