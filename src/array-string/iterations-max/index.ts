import max from "../max";

/**
 * Number of times the largest string fits into allocated space
 * @returns integer | -1 on error
 *
 * ```js
 * import arrayStringIterationsMax from "@elricb/functions/array-string/iterations-max/index.js";
 * const padding = 1;
 * console.log(
 *   arrayStringIterationsMax(["list", "of", "items", "to", "right", "align"], 10, padding * 2)
 * );
 * ```
 */
export default function (iterator: string[], total: number, offset = 0): number {
  return Math.floor(total / (max(iterator) + offset));
}
