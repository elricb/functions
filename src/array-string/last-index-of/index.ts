/**
 * Position after last string found
 */
export default function (s: string, a: string[]): number {
  let last = -1;

  for (let i = 0; i < a.length; i++) {
    let j = s.lastIndexOf(a[i]);

    if (j !== -1) {
      j += a[i].length;
      last = j > last ? j : last;
    }
  }

  return last;
}
