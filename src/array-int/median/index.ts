/**
 * The median is the middle value when a data set
 * is ordered from least to greatest.
 */
export default function (a: Array<number>) {
  const a1 = [...a];
  a1.sort((a, b) => a - b);
  return a1[Math.floor(a1.length * 0.5)];
}
