const replaceAll = require('./index').default;

test('replaceAll("hi hi hi", "hi", "bye") = "bye bye bye"', () => {
  expect(replaceAll("hi hi hi", "hi", "bye")).toBe("bye bye bye");
});
