const wrap = require("./wrap").default;

test('wrap("I am a long string for wrap Test")', () => {
  const longString = "I am a long string for wrap test";

  expect(wrap(longString, 8)).toStrictEqual([
    "I am a",
    "long",
    "string",
    "for wrap",
    "test"
  ]);
});
