/**
 * longest string in an array
 */
export default function (a: Array<string>) {
  return a.reduce(function (last: number, current: string) {
    return last > current.length ? last : current.length;
  }, 0);
}
