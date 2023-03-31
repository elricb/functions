/**
 * Convert markdown to jira text
 *
 * ```javascript
 * import md2Jira from "@elricb/functions/string/md2jira";
 *
 * console.log(md2Jira(`
 * # header1
 * |thead1|thead2|
 * |---|---|
 * |data1|data2|
 * `));
 * ```
 */
export default function (text: string): string {
  const map = {
    // TBD cite: '??',
    del: "-",
    ins: "+",
    sup: "^",
    sub: "~"
  };

  return (
    text
      // Tables
      // TBD /^\n((?:\|.*?)+\|)[ \t]*\n((?:\|\s*?\-{3,}\s*?)+\|)[ \t]*\n((?:(?:\|.*?)+\|[ \t]*\n)*)$/gm
      .replace(
        /^\n((?:\|.*?)+\|)[ \t]*\n((?:\|\s*?-{3,}\s*?)+\|)[ \t]*\n((?:(?:\|.*?)+\|[ \t]*\n)*)$/gm,
        function (match, headerLine, separatorLine, rowstr) {
          const headers = headerLine.match(/[^|]+(?=\|)/g);
          const separators = separatorLine.match(/[^|]+(?=\|)/g);
          if (headers.length !== separators.length) {
            return match;
          }

          const rows = rowstr.split("\n");
          if (rows.length === 1 + 1 && headers.length === 1) {
            // Panel
            return (
              "{panel:title=" +
              headers[0].trim() +
              "}\n" +
              rowstr.replace(/^\|(.*)[ \t]*\|/, "$1").trim() +
              "\n{panel}\n"
            );
          }

          return "||" + headers.join("||") + "||\n" + rowstr;
        }
      )
      // Bold, Italic, and Combined (bold+italic)
      .replace(/([*_]+)(\S.*?)\1/g, function (_, wrapper, content) {
        switch (wrapper.length) {
          case 1:
            return "_" + content + "_";
          case 2:
            return "*" + content + "*";
          case 3:
            return "_*" + content + "*_";
          default:
            return wrapper + content * wrapper;
        }
      })
      // All Headers (# format)
      // TBD   /^([#]+)(.*?)$/gm
      .replace(/^(#+)(.*?)$/gm, function (_, level, content) {
        return "h" + level.length + "." + content;
      })
      // Headers (H1 and H2 underlines)
      .replace(/^(.*?)\n([=-]+)$/gm, function (_, content, level) {
        return "h" + (level[0] === "=" ? 1 : 2) + ". " + content;
      })
      // Ordered lists
      .replace(/^([ \t]*)\d+\.\s+/gm, function (_, spaces) {
        return (
          Array.from({length: Math.floor(spaces.length / 2 + 1)}).join("#") +
          "# "
        );
      })
      // Un-Ordered Lists
      .replace(/^([ \t]*)\*\s+/gm, function (_, spaces) {
        return (
          Array.from({length: Math.floor(spaces.length / 2 + 1)}).join("*") +
          "* "
        );
      })
      // Headers (h1 or h2) (lines "underlined" by ---- or =====)
      // Citations, Inserts, Subscripts, Superscripts, and Strikethroughs
      .replace(
        new RegExp("<(" + Object.keys(map).join("|") + ")>(.*?)</\\1>", "g"),
        function (_, from, content) {
          const to = map[from];
          return to + content + to;
        }
      )
      // Other kind of strikethrough
      .replace(/(\s+)~~(.*?)~~(\s+)/g, "$1-$2-$3")
      // Named/Un-Named Code Block
      // TBD /```(.+\n)?((?:.|\n)*?)```/g
      .replace(/```(.+\n)?([.\n]*?)```/g, function (_, synt, content) {
        let code = "{code}";
        if (synt) {
          code = "{code:" + synt.replace(/\n/g, "") + "}\n";
        }

        return code + content + "{code}";
      })
      // Inline-Preformatted Text
      .replace(/`([^`]+)`/g, "{{$1}}")
      // Images
      // TBD /!\[[^\]]*\]\(([^)]+)\)/g
      .replace(/!\[[^\]]*]\(([^)]+)\)/g, "!$1!")
      // Named Link
      // TBD /\[([^\]]+)\]\(([^)]+)\)/g
      .replace(/\[([^\]]+)]\(([^)]+)\)/g, "[$1|$2]")
      // Un-Named Link
      .replace(/<([^>]+)>/g, "[$1]")
      // Single Paragraph Blockquote
      .replace(/^>/gm, "bq.")
  );
}
