// shortest string in an array
export default function (a: Array<string>) {
  return a.reduce(function (last: number, current: string) {
    if (last === -1) return current.length;
    return last < current.length ? last : current.length;
  }, -1);
}
