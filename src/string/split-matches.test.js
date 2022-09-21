const splitMatches = require('./split-matches').default;

test('splitMatches("hi,hi,hi", ",") = ["hi","hi","hi"]', () => {
  expect(splitMatches("hi,hi,hi", ",")).toEqual(["hi","hi","hi"]);
});
