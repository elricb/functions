const promiseWrap = require("./index").default;

it("promise/function", async () => {
  const test = resolve => {
    setTimeout(() => resolve(55), 20);
  };

  const results = await promiseWrap(test);
  expect(results).toEqual(55);
});

it("promise/function nested", async () => {
  const test = resolve => {
    setTimeout(() => resolve(55), 20);
  };

  const promiseFunc = promiseWrap(test, true);
  const results = await promiseFunc();
  expect(results).toEqual(55);
});
