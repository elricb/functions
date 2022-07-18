/**
 * Create a promise with optional abort signal
 *
 * const controller = new AbortController();
 * abort((v,x) => v(), controller);
 * controller.abort();
 */
export default function (executor: FunctionExecutor, controller: AbortController) {
  new Promise((resolve, reject) => {
    controller.signal.addEventListener("abort", function () {
      reject();
    });
    executor(resolve, reject);
  });
}
