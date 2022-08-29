/**
 * Find/Replace and return index after last match
 * @returns array [index, new string]
 */
export default function splitMatches(
  base: string,
  find: RegExp,
  replace: string
): [number, string] {
  const regexp = new RegExp(find, "g");
  let infiniteCheck = -1;
  let result = "";
  let lastIndex = 0;
  let a;

  while ((a = regexp.exec(base)) !== null) {
    if (infiniteCheck === regexp.lastIndex) {
      break;
    }

    result += base.slice(lastIndex, regexp.lastIndex - a[0].length) + replace;
    lastIndex = regexp.lastIndex;
    infiniteCheck = regexp.lastIndex;
  }

  return [result.length, result + base.slice(lastIndex)];
}
