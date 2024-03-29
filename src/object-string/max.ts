/**
 * Longest string in an object
 *
 * ```javascript
 * ```
 */
export default function (o: {[index: string | number]: string}) {
  return Object.values(o).reduce(function (acc: number, s: string) {
    return acc > s.length ? acc : s.length;
  }, 0);
}
