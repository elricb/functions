/**
 * The mean (average) of a data set is found by adding all numbers in
 * the data set and then dividing by the number of values in the set.
 */
export default function (a: number[]) {
  let t = 0;
  for (let i = 0; i < a.length; i++) t += a[i];
  return Math.round(t / a.length);
}
