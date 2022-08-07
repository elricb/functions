/**
 * Largest number in an array
 */
export default function (array: number[]) {
  return array.reduce(function (last: number, current: number) {
    return last > current ? last : current;
  }, 0);
}
