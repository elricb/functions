import {Transform} from "stream";

/**
 * Stream.Transform find list of strings or regular expressions
 *
 * ```js
 * import {pipeline, Readable} from "stream";
 * import streamGrep from "@elricb/functions/stream/grep";
 * pipeline(
 *   Readable.from('Good morning!\nGood afternoon!\nGood evening!', {encoding: 'utf8'}),
 *   streamGrep([/evening/, "morning"]),
 *   new Writable({write(chunk, encoding, callback) { console.log(chunk.toString(); callback(); }})
 * );
 * ```
 */
function streamGrep(
  grep: string[] | Array<RegExp> | string,
  baseEncoding: string = "utf8"
): Transform {
  const search = Array.isArray(grep) ? grep : [grep];

  function transform(chunk, encoding, callback) {
    const haystack = chunk.toString(baseEncoding);
    let b = false;

    for (let i = 0; i < search.length && !b; i++) {
      b =
        typeof search[i] === "string"
          ? haystack.includes(search[i])
          : haystack.search(search[i]) !== -1;
    }

    callback(null, b ? haystack : "");
  }

  return new Transform({transform});
}

export default streamGrep;
