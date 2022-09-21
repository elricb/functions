const jira2Md = require("./jira2md").default;

test('jira2md()', async () => {
  const result = jira2Md(`
h1. header 1
**bold**
||thead1||thead2||
|data1|data2|
  `);

  expect(result).toBe(`
# header 1
***bold***

|thead1|thead2|
| --- | --- |
|data1|data2|
  `);
});

