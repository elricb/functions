/**
 * The median is the middle value when a data set
 * is ordered from least to greatest.
 */
export default function (o: {[index: string | number]: number}) {
  const a1 = Object.values(o);
  a1.sort((a, b) => a - b);
  return a1[Math.floor(a1.length * 0.5)];
}
