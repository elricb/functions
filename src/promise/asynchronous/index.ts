/**
 * Asynchronously resolve array of Promise executor functions.
 *
 * ```js
 * const a = [
 *   (resolve, reject) => setTimeout(resolve.bind(null, 1), 1000),
 *   (resolve, reject) => setTimeout(resolve.bind(null, 2), 1000),
 *   (resolve, reject) => setTimeout(resolve.bind(null, 3), 1000)
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
  return Promise.all(iterator);
}
