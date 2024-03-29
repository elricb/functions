/**
 * The median is the middle value when a data set
 * is ordered from least to greatest.
 */
export default function (a: string[]) {
  const array = [...a];
  array.sort((a, b) => a.length - b.length);

  return array[Math.floor(array.length * 0.5)].length;
}
