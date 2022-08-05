import regexpEscape from "../regexp-escape";

export default function (base: string, find: string, replace: string): string {
  return base.replace(new RegExp(regexpEscape(find), "g"), replace);
}
