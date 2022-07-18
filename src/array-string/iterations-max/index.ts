import max from "../max";

// number of times the largest string fits into allocated space
export default function (a: Array<string>, cols: number, offset = 0) {
  return Math.floor(cols / (max(a) + offset));
}
