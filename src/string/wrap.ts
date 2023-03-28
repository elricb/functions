/**
 * Split string on spaces to fit into character whole.
 *
 * ```js
 * import wrap from "@elricb/functions/string/wrap";
 *
 * const longString = ["list of items to wrap into a max character area."];
 * console.log(wrap(longString, 16));
 * ```
 */
function wrap(text: string, whole: number): string[] {
  const output = [];

  let position = 0;
  let rowStart = 0;
  let rowEnd = 0;
  let lastSpace = 0;

  while (position < text.length) {
    rowStart = position;
    rowEnd = 0;
    lastSpace = 0;

    for (; rowEnd === 0 && position < text.length; position++) {
      const char = text.charAt(position);
      const row = position - rowStart;

      // We are at the allotted whole
      if (row >= whole) {
        // Allotment landed exactly on a space.
        if (char === " ") {
          rowEnd = position;
          continue;
        }

        // No spaces yet in the row, so we chop the word.
        if (lastSpace === 0) {
          rowEnd = position;
          continue;
        }

        // Chop at last space
        rowEnd = lastSpace;
        position = lastSpace;
        continue;
      }

      if (char === " ") {
        lastSpace = position;
      }
    }

    output.push(text.substring(rowStart, rowEnd || position));
  }

  return output;
}

export default wrap;
