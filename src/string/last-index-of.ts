/**
 * Position before and after last string found.
 * @returns Array<lastIndex, afterLastIndex> | [-1, -1] not found
 *
 * ```javascript
 * import lastIndexOf from "@elricb/functions/string/last-index-of";
 *
 * console.log(lastIndexOf("Find the last instance of one word in a sentence.", ["one", /word/]));
 * ```
 */
const lastIndexOf = function (
  needle: RegExp | string,
  haystack: string
): number[] {
  let result = [-1, -1];

  if (needle instanceof RegExp) {
    const word = needle.exec(haystack);
    if (word !== null) {
      result = [needle.lastIndex, needle.lastIndex + word[0].length];
    }
  } else if (typeof needle === "string") {
    const index = haystack.lastIndexOf(needle);
    if (index !== -1) {
      result = [index, index + needle.length];
    }
  }

  return result;
};

export default function (
  haystack: string,
  needles: RegExp | string | Array<RegExp | string>
): number[] {
  let last = [-1, -1];

  if (!Array.isArray(needles)) {
    return lastIndexOf(needles, haystack);
  }

  for (let i = 0; i < needles.length; i++) {
    const index = lastIndexOf(needles[i], haystack);
    last = index[1] > last[1] ? index : last;
  }

  return last;
}
