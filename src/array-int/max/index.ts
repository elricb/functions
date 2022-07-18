// largest number in an array
export default function (a: Array<number>) {
  return a.reduce(function (last: number, current: number) {
    return last > current ? last : current;
  }, 0);
}
