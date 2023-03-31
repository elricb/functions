/**
 * Align a string through padding based in a set character width.
 */
function padAlign(
  text: string,
  textWidth: number,
  align: "left" | "center" | "right" = "left"
): string {
  switch (align) {
    case "right":
      return text.padStart(textWidth);
    case "center":
      return text.padStart(textWidth / 2).padEnd(textWidth);
    default:
      return text.padEnd(textWidth);
  }
}

export default padAlign;
