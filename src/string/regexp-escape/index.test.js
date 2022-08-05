const regexpEscape = require('./index').default;

test('regexpEscape("^regexp.*+$") = "\\^regexp\\.\\*\\+\\$"', () => {
  expect(regexpEscape("^regexp.*+$")).toBe("\\^regexp\\.\\*\\+\\$");
});
