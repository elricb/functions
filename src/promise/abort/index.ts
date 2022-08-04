/**
 * Create a promise with optional abort signal
 * Not compatable in all env, to deprecate or rewrite
 *
 * const controller = new AbortController();
 * abort((v,x) => v(), controller);
 * controller.abort();
 */
export default function (executor: FunctionExecutor, controller: AbortController) {
  new Promise((resolve, reject) => {
    // controller.signal.addEventListener("abort", function () {
    //   reject();
    // });
    executor(resolve, reject);
  });
}
