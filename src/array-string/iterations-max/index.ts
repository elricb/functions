import max from "../max";

/**
 * Number of times the largest string fits into allocated space
 *
 * ```js
 * import arrayStringIterationsMax from "@elricb/functions/array-string/iterations-max/index.js";
 * const padding = 1;
 * console.log(
 *   arrayStringIterationsMax(["list", "of", "items", "to", "right", "align"], 10, padding * 2)
 * );
 * ```
 */
export default function (a: string[], cols: number, offset = 0) {
  return Math.floor(cols / (max(a) + offset));
}
