/**
 * Longest string in an array
 *
 * ```js
 * import arrayStringMax from "@elricb/functions/array-string/max/index.js";
 * console.log(arrayStringMax(["a", "aa"]));
 * ```
 */
export default function (a: string[]) {
  return a.reduce(function (last: number, current: string) {
    return last > current.length ? last : current.length;
  }, 0);
}
