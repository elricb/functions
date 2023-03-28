/**
 * Split string into even fractions of character whole
 *
 * ```js
 * import split from "@elricb/functions/string/split";
 *
 * const longString = ["OneLongUnbrokenString"];
 * console.log(split(longString, 6));
 * ```
 */
function split(text: string, whole: number): string[] {
  return text.match(new RegExp(`.{${whole}}`, "g"));
}

export default split;
