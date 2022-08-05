/**
 * Convert stream to string
 *
 * ```js
 * import {Readable} from "stream";
 * import readableToString from "@elricb/functions/promise/readable-to-string/index.js";
 * const rs = Readable.from('Good morning!', {encoding: 'utf8'}),
 * console.log(await readableToString(rs));
 * ```
 */
export default async function readableToString(readable) {
  let result = "";
  for await (const chunk of readable) {
    result += chunk;
  }
  return result;
}
