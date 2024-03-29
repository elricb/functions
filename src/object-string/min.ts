/**
 * Shortest string in an object
 *
 * ```javascript
 * ```
 */
export default function (o: {[index: string | number]: string}) {
  const a = Object.values(o);
  return a.reduce(function (acc: number, s: string) {
    if (acc === -1) return s.length;
    return acc < s.length ? acc : s.length;
  }, -1);
}
