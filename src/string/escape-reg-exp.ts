/**
 * Convert string to RegExp appropriate string literal
 *
 * ```javascript
 * import escapeRegExp from "@elricb/functions/string/escape-reg-exp";
 *
 * console.log(escapeRegExp("Find this ;&? once."));
 * ```
 */
export default function (base: string): string {
  return base.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
