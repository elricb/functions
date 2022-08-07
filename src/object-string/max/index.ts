/**
 * Longest string in an object
 */
export default function (o: ObjectStringArray) {
  return Object.values(o).reduce(function (acc: number, s: string) {
    return acc > s.length ? acc : s.length;
  }, 0);
}
