/**
 * Longest string in an array
 *
 * ```js
 * import arrayStringMax from "@elricb/functions/array-string/max";
 *
 * const a = ["list", "of", "items", "to", "right", "align"];
 * const max = arrayStringMax(a);
 *
 * for (let i = 0; i < a.length; i++) {
 *   console.log(a[i].padStart(max - a[i].length));
 * }
 * ```
 */
export default function (a: string[]) {
  let length = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i].length > length) {
      length = a[i].length;
    }
  }

  return length;
}
