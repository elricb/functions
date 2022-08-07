/**
 * Lowest number in an array
 */
export default function (a: number[]) {
  return a.reduce(function (last: number, current: number) {
    return last < current ? last : current;
  }, a[0]);
}
