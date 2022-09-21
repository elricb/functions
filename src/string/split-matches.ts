/**
 * Less performative than String.prototype.split, but serves as a sample of RegExp.prototype.exec
 *
 * ```javascript
 * import splitMatches from "@elricb/functions/string/split-matches"
 *
 * const parts = splitMatches("Find matches in this string and replace matches.", /matches/);
 * console.log(parts.join("instances"));
 * ```
 */
export default function splitMatches(base: string, find: RegExp): string[] {
  const regexp = new RegExp(find, "g");
  const result = [];
  let infiniteCheck = -1;
  let lastIndex = 0;
  let a;

  while ((a = regexp.exec(base)) !== null) {
    if (infiniteCheck === regexp.lastIndex) {
      break;
    }

    result.push(base.slice(lastIndex, regexp.lastIndex - a[0].length));
    lastIndex = regexp.lastIndex;
    infiniteCheck = regexp.lastIndex;
  }

  result.push(base.slice(lastIndex));

  return result;
}
