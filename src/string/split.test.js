const split = require("./split").default;

test('split("IamAlongStringForSplitTest")', () => {
  const longString = "IamAlongStringForSplitTest";

  expect(split(longString, 6)).toStrictEqual(["IamAlo", "ngStri", "ngForS", "plitTe"]);
});
