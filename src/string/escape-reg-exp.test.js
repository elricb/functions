const escapeRegExp = require('./escape-reg-exp').default;

test('escapeRegExp("^regexp.*+$") = "\\^regexp\\.\\*\\+\\$"', () => {
  expect(escapeRegExp("^regexp.*+$")).toBe("\\^regexp\\.\\*\\+\\$");
});
