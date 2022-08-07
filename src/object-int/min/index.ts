/**
 * Shortest number in an object
 */
export default function (o: ObjectNumberArray) {
  const a = Object.values(o);
  return a.reduce(function (acc, i) {
    return acc < i ? acc : i;
  }, a[0]);
}
