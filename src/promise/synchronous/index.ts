// synchronously resolve array of Promise executor functions.
export default async function (
  iterator: Iterable<FunctionExecutor>,
  callback: Function
): Promise<any> {
  for (const executor of iterator) {
    callback(await new Promise(executor));
  }
}
