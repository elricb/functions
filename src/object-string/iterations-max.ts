import max from "./max";

/**
 * How many times does largest string fit into allocated space
 *
 * ```javascript
 * import iterationsMax from "@elricb/functions/object-string/iterations-max";
 *
 * console.log(iterationsMax(
 *   {"test1": "value1", "test2": "value2", "test3": "value3"},
 *   10,
 *   0
 * ));
 * ```
 */
export default function (
  o: {
    [index: string | number]: string;
  },
  cols: number,
  offset = 0
) {
  return Math.floor(cols / (max(o) + offset));
}
