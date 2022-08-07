/**
 * Create a promise with optional abort signal
 * Not compatable in all env, to deprecate or rewrite
 *
 * const controller = new AbortController();
 * abort((v,x) => v(), controller);
 * controller.abort();
 */
export default function (
  executor: FunctionExecutor,
  controller: AbortController
) {
  return new Promise((resolve, reject) => {
    if ("addEventListener" in controller.signal) {
      controller.signal.addEventListener("abort", function () {
        reject();
      });
    }

    executor(resolve, reject);
  });
}
