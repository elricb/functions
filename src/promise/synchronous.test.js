const synchronous = require("./synchronous").default;

it("promise/synchronous", async () => {
  const results = [];
  const tests = [
    resolve => {
      setTimeout(() => resolve(55), 20);
    },
    resolve => {
      setTimeout(() => resolve(22), 30);
    },
    resolve => {
      setTimeout(() => resolve(33), 10);
    }
  ];
  const callback = value => {
    results.push(value);
  };

  await synchronous(tests, callback);
  expect(results).toStrictEqual([55, 22, 33]);
});
