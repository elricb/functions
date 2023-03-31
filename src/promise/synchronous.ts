/**
 * Synchronously resolve array of Promise executor functions.
 *
 * ```js
 * import promiseSynchronous from "@elricb/functions/promise/synchronous";
 *
 * const a = [
 *   (resolve, reject) => setTimeout(resolve.bind(null, 1), 600),
 *   (resolve, reject) => setTimeout(resolve.bind(null, 2), 500),
 *   (resolve, reject) => setTimeout(resolve.bind(null, 3), 200)
 * ];
 *
 * promiseSynchronous(a, (i) => console.log(`Promise ${i} done.`)).then(() =>
 *   console.log("All done")
 * );
 * ```
 */
export default async function (
  iterator: FunctionExecutor[],
  callback: Function = () => {}
): Promise<any> {
  /**
   * Requires minimum target es2015
   * for (const executor of iterator) {
   *   callback(await new Promise(executor));
   * }
   */

  for (let i = 0; i < iterator.length; i++) {
    callback(await new Promise(iterator[i]));
  }
}
