/**
 * Wrap a function with a Promise and function.
 *
 * ```javascript
 * import promiseFunction from "@elricb/functions/promise/function";
 *
 * const f = (resolve, reject) => setTimeout(resolve.bind(null, "Done"), 600);
 * const f2 = (resolve, reject) => setTimeout(resolve.bind(null, "Done"), 600);
 *
 * promiseFunction(f).then((result) =>
 *   console.log(result)
 * );
 *
 * promiseFunction(f2, true)().then((result) =>
 *   console.log(result)
 * );
 * ```
 */
export default function (f: FunctionExecutor, nested: boolean = false) {
  if (!nested) {
    return new Promise(f);
  }

  return function () {
    return new Promise(f);
  };
}
