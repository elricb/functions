import iterationsMax from "../iterations-max";

/**
 * Split array into multiple based on maximum character space allowance.
 *
 * ```js
 * import split from "@elricb/functions/array-string/split-max/index.js";
 * const padding = 1;
 * console.log(
 *   split(["list", "of", "items", "to", "right", "align"], 10, padding * 2)
 * );
 * ```
 */
export default function (a: string[], cols: number, offset = 0) {
  const result = [];
  const max = iterationsMax(a, cols, offset);

  for (let i = 0; i < a.length; i += max) {
    result.push(a.slice(i, i + max));
  }

  return result;
}
