/**
 * The mode is the number that occurs most often in a data set.
 */
export default function (o: {[index: string | number]: string}) {
  const a = Object.values(o).map(s => s.length);

  return Object.values(
    a.reduce((count, key) => {
      if (!(key in count)) {
        count[key] = [0, key];
      }

      count[key][0]++;
      return count;
    }, {})
  ).reduce((a, v) => (v[0] < a[0] ? a : v), [0, null])[1];
}
