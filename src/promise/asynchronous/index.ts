// asynchronously resolve array of Promise executor functions.
export default async function (
  iterator: Iterable<FunctionExecutor>
): Promise<any> {
  return Promise.all(iterator);
}
