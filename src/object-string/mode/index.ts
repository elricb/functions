/**
 * The mode is the number that occurs most often in a data set.
 */
export default function (o: ObjectStringArray) {
  const a = Object.values(o).map(s => s.length);

  return Object.values(
    a.reduce((count, e) => {
      if (!(e in count)) {
        count[e] = [0, e];
      }

      count[e][0]++;
      return count;
    }, {})
  ).reduce((a, v) => (v[0] < a[0] ? a : v), [0, null])[1];
}
