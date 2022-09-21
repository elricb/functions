import {Transform} from "stream";

/**
 * Stream.Transform find/replace list of strings
 *
 * Disclaimer:  doesn't replace words between chunks
 *
 * ```js
 * import {pipeline, Readable} from "stream";
 * import streamReplace from "@elricb/functions/stream/replace";
 * pipeline(
 *   Readable.from('Good morning!', {encoding: 'utf8'}),
 *   streamReplace({morning: "evening"}),
 *   new Writable({write(chunk) { console.log(chunk.toString(); }})
 * );
 * ```
 */
export default function (
  replaceList: {
    [index: string | number]: string;
  },
  baseEncoding: string = "utf8"
): Transform {
  const cache = {
    keys: Object.keys(replaceList)
  };

  function transform(chunk, encoding, callback) {
    const haystack = chunk.toString(baseEncoding);

    if (haystack.includes("\u{FFFD}")) {
      callback(null, chunk);
      return;
    }

    callback(
      null,
      cache.keys.reduce(
        (acc, search) => acc.replaceAll(search, replaceList[search]),
        haystack
      )
    );
  }

  return new Transform({transform});
}
