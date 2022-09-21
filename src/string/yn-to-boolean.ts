/**
 * Convert yes/no string result to boolean
 *
 * ```javascript
 * import ynToBoolean from "@elricb/functions/string/yn-to-boolean";
 *
 * console.log(ynToBoolean("y"), "=", true);
 * console.log(ynToBoolean("n"), "=", false);
 * console.log(ynToBoolean("x"), "=", null);
 * ```
 */
export default function (value: string): boolean | null {
  if (value.toLowerCase() == "y" || value.toLowerCase() == "yes") {
    return true;
  }

  if (value.toLowerCase() == "n" || value.toLowerCase() == "no") {
    return false;
  }

  return null;
}
