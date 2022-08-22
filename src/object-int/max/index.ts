/**
 * Largest int in the object
 */
export default function (o: {[index: string | number]: number}) {
  return Object.values(o).reduce(function (acc, i) {
    return acc > i ? acc : i;
  }, 0);
}
