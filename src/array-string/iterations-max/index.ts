import max from "../max";

/**
 * Number of times the largest string fits into allocated space
 *
 * ```js
 * import arrayStringIterationsMax from "@elricb/functions/array-string/iterations-max/index.js";
 *
 * const a = ["list", "of", "items", "to", "right", "align"];
 * const max = arrayStringIterationsMax(a);
 *
 * for (let i = 0; i < a.length; i++) {
 *   console.log(a[i].padStart(max - a[i].length));
 * }
 * ```
 */
export default function (a: string[], cols: number, offset = 0) {
  return Math.floor(cols / (max(a) + offset));
}
