/**
 * The mean (average) of a data set is found by adding all numbers in
 * the data set and then dividing by the number of values in the set.
 */
export default function (o: ObjectNumberArray) {
  let t = 0,
    i = 0;
  for (const [, value] of Object.entries(o)) {
    i++;
    t += value;
  }
  return Math.round(t / i);
}
