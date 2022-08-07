/**
 * The mode is the number that occurs most often in a data set.
 */
export default function (array: number[]) {
  return Object.values(
    array.reduce((count, key) => {
      if (!(key in count)) {
        count[key] = [0, key];
      }

      count[key][0]++;
      return count;
    }, {})
  ).reduce((array, v) => (v[0] < array[0] ? array : v), [0, null])[1];
}
