const ynToBoolean = require('./index').default;

test('ynToBoolean("Y") = true', () => {
  expect(ynToBoolean("Y")).toBe(true);
});
