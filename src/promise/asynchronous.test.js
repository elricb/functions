const asynchronous = require("./asynchronous").default;

it("promise/asynchronous", async () => {
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

  const results = await asynchronous(tests);
  expect(results).toEqual(expect.arrayContaining([55, 22, 33]));
});
