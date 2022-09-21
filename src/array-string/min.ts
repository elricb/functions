/**
 * Shortest string in an array
 */
export default function (a: string[]) {
  return a.reduce(function (last: number, current: string) {
    if (last === -1) return current.length;
    return last < current.length ? last : current.length;
  }, -1);
}
