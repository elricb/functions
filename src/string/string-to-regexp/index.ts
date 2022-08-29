import regexpEscape from "../regexp-escape";

export default function (s: string, options: string = ""): RegExp {
  return new RegExp(regexpEscape(s), options);
}
