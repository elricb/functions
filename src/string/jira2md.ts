/**
 * Convert jira to markdown text
 *
 * ```javascript
 * import jira2Md from "@elricb/functions/string/jira2md";
 *
 * console.log(jira2Md(`
 *   h1. header 1
 *   **bold**
 *   ||t1||t2||
 *   |item1|item2|
 * `));
 * ```
 */
export default function (text: string): string {
  return (
    text
      // Ordered Lists
      .replace(/^[ \t]*(\*+)\s+/gm, function (_, stars) {
        return Array.from({length: stars.length}).join("  ") + "* ";
      })
      // Un-ordered lists
      .replace(/^[ \t]*(#+)\s+/gm, function (_, nums) {
        return Array.from({length: nums.length}).join("  ") + "1. ";
      })
      // Headers 1-6
      .replace(/^h([0-6])\.(.*)$/gm, function (_, level, content) {
        return (
          Array.from({length: Number.parseInt(level, 10) + 1}).join("#") +
          content
        );
      })
      // Bold
      .replace(/\*(\S.*)\*/g, "**$1**")
      // Italic
      // TBD   /\_(\S.*)\_/g
      .replace(/_(\S.*)_/g, "*$1*")
      // Monospaced text
      // TBD   /\{\{([^}]+)\}\}/g
      .replace(/{{([^}]+)}}/g, "`$1`")
      // Citations (buggy)
      // TBD .replace(/\?\?((?:.[^?]|[^?].)+)\?\?/g, '<cite>$1</cite>')
      // Inserts
      .replace(/\+([^+]*)\+/g, "<ins>$1</ins>")
      // Superscript
      .replace(/\^([^^]*)\^/g, "<sup>$1</sup>")
      // Subscript
      .replace(/~([^~]*)~/g, "<sub>$1</sub>")
      // Strikethrough
      .replace(/(\s+)-(\S+.*?\S)-(\s+)/g, "$1~~$2~~$3")
      // Code Block
      // TBD /\{code(:([a-z]+))?([:|]?(title|borderStyle|borderColor|borderWidth|bgColor|titleBGColor)=.+?)*\}([^]*?)\n?\{code\}/gm
      .replace(
        /{code(:([a-z]+))?([:|]?(title|borderStyle|borderColor|borderWidth|bgColor|titleBGColor)=.+?)*}([^]*?)\n?{code}/gm,
        "```$2$5\n```"
      )
      // Pre-formatted text
      .replace(/{noformat}/g, "```")
      // Un-named Links
      // TBD /\[([^|]+?)\]/g
      .replace(/\[([^|]+?)]/g, "<$1>")
      // Images
      .replace(/!(.+)!/g, "![]($1)")
      // Named Links
      // TBD /\[(.+?)\|(.+?)\]/g
      .replace(/\[(.+?)\|(.+?)]/g, "[$1]($2)")
      // Single Paragraph Blockquote
      .replace(/^bq\.\s+/gm, "> ")
      // Remove color: unsupported in md
      // TBD /\{color:[^}]+\}([^]*)\{color\}/gm
      .replace(/{color:[^}]+}([^]*){color}/gm, "$1")
      // Panel into table
      // TBD  /\{panel:title=([^}]*)\}\n?([^]*?)\n?\{panel\}/gm
      .replace(
        /{panel:title=([^}]*)}\n?([^]*?)\n?{panel}/gm,
        "\n| $1 |\n| --- |\n| $2 |"
      )
      // Table header
      .replace(/^[ \t]*((?:\|\|.*?)+\|\|)[ \t]*$/gm, function (_, headers) {
        const singleBarred = headers.replace(/\|\|/g, "|");

        return (
          "\n" +
          singleBarred +
          "\n" +
          singleBarred.replace(/\|[^|]+/g, "| --- ")
        );
      })
      // Remove leading-space of table headers and rows
      .replace(/^[ \t]*\|/gm, "|")
  );
}
