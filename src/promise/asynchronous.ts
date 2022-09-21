/**
 * Asynchronously resolve array of Promise executor functions.
 *
 * ```js
 * import promiseAsynchronous from "@elricb/functions/promise/asynchronous";
 *
 * const a = [
 *   (resolve, reject) => setTimeout(resolve.bind(null, 1), 400),
 *   (resolve, reject) => setTimeout(resolve.bind(null, 2), 200),
 *   (resolve, reject) => setTimeout(resolve.bind(null, 3), 300)
 * ];
 *
 * promiseAsynchronous(a).then((arrayResults) =>
 *   console.log(arrayResults, "All done")
 * );
 * ```
 */
export default async function (
  iterator: Iterable<FunctionExecutor>
): Promise<any> {
  const promises = [];
  for (const executor of iterator) {
    promises.push(new Promise(executor));
  }

  return Promise.all(promises);
}
