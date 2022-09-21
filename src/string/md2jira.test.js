const md2Jira = require('./md2jira').default;

test('md2Jira()', () => {
  const result = md2Jira(`
# header 1
|thead1|thead2|
|---|---|
|data1|data2|
  `);

  expect(result).toBe(`
h1. header 1
|thead1|thead2|
|---|---|
|data1|data2|
  `);
});
