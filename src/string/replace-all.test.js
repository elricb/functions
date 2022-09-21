const replaceAll = require('./replace-all').default;

test('replaceAll("hi hi hi", "hi", "bye") = "bye bye bye"', () => {
  expect(replaceAll("hi hi hi", "hi", "bye")).toBe("bye bye bye");
});
