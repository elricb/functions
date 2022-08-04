/**
 * The median is the middle value when a data set
 * is ordered from least to greatest.
 */
export default function (a: Array<string>) {
  const arr = [...a];
  arr.sort((a, b) => a.length - b.length);
  return arr[Math.floor(arr.length * 0.5)].length;
}
