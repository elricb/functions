/**
 * Wrap a function with a Promise and function.
 */
export default function (f: FunctionExecutor) {
  return function () {
    return new Promise(f);
  };
};
