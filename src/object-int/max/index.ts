/**
 * largest int in the object
 */
export default function (o: ObjectNumberArray) {
  return Object.values(o).reduce(function (acc, i) {
    return acc > i ? acc : i;
  }, 0);
}
