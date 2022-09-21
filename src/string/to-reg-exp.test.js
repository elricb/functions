const toRegExp = require('./to-reg-exp').default;

test('toRegExp("hi?") = RegExp("hi\?")', () => {
  expect("You will say hi?".replace(toRegExp("hi?"), "bye.")).toBe("You will say bye.");
});
