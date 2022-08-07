import max from "../max";

/**
 * How many times does largest string fit into allocated space
 */
export default function (o: ObjectStringArray, cols: number, offset = 0) {
  return Math.floor(cols / (max(o) + offset));
}
