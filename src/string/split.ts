/**
 * Split string into even fractions of character whole
 *
 * ```js
 * import split from "@elricb/functions/string/split";
 *
 * const longString = ["OneLongUnbrokenString"];
 * console.log(split(longString, 6));
 *
 * [ 'OneLon', 'gUnbro', 'kenStr', 'ing' ]
 * ```
 */
function split(text: string, whole: number): string[] {
  const result = [];

  for (let i = 0; i < text.length; i += whole) {
    result.push(text.slice(i, i + whole));
  }

  return result;
}

export default split;
