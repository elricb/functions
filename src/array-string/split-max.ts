import max from "./max";
import split from "./split";

/**
 * Split array into multiple based on maximum character space allowance.
 *
 * ```js
 * import split from "@elricb/functions/array-string/split-max";
 * const padding = 1;
 * console.log(
 *   split(["list", "of", "items", "to", "right", "align"], 10, padding * 2)
 * );
 * ```
 */
export default function (
  iterator: string[],
  total: number,
  offset = 0
): string[][] {
  return split(iterator, max(iterator) + offset, total);
}
