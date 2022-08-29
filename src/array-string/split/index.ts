/**
 * Split array into even fractions of character whole
 *
 * ```js
 * import max from "@elricb/functions/array-string/max/index.js";
 * import split from "@elricb/functions/array-string/split-max/index.js";
 * const iterator = ["list", "of", "items", "to", "right", "align"];
 * console.log(
 *   split(iterator, max(iterator) + 1, 15)
 * );
 * ```
 */
export default function (
  iterator: string[],
  fraction: number,
  whole: number
): string[][] | null {
  const result = [];
  const max = Math.floor(whole / fraction);

  if (max < 1) {
    return null;
  }

  for (let i = 0; i < iterator.length; i += max) {
    result.push(iterator.slice(i, i + max));
  }

  return result;
}
