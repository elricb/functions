/**
 * Replace all instances of string inside string
 *
 * ```javascript
 * ```
 */
import escapeRegExp from "./escape-reg-exp";

export default function (base: string, find: string, replace: string): string {
  return base.replace(new RegExp(escapeRegExp(find), "g"), replace);
}
