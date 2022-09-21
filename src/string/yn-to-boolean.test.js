const ynToBoolean = require('./yn-to-boolean').default;

test('ynToBoolean("Y") = true', () => {
  expect(ynToBoolean("Y")).toBe(true);
});
