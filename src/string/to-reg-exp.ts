import escapeRegExp from "./escape-reg-exp";

export default function (s: string, options: string = "g"): RegExp {
  return new RegExp(escapeRegExp(s), options);
}
