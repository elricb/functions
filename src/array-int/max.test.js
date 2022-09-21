const max = require("./max").default;

test("max([1, 2, 3, 2]) = 3", () => {
  expect(max([1, 2, 3, 2])).toBe(3);
});
