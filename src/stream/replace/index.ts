import {Transform} from "stream";
import max from "../../array-string/max";
import lastIndexOf from "../../array-string/last-index-of";

/**
 * Stream.Transform find/replace list of strings
 *
 * ```js
 * import {pipeline, Readable} from "stream";
 * import streamReplace from "@elricb/functions/stream/replace/index.js";
 * pipeline(
 *   Readable.from('Good morning!', {encoding: 'utf8'}),
 *   streamReplace({morning: "evening"}),
 *   new Writable({write(chunk) { console.log(chunk.toString(); }})
 * );
 * ```
 */
export default function (
  replaceList: ObjectStringArray,
  baseEncoding: string = "utf8"
): Transform {
  const cache = {
    tail: "",
    keys: Object.keys(replaceList),
    rewind: max(Object.keys(replaceList))
  };

  function transform(chunk, encoding, callback) {
    let haystack = cache.tail + chunk.toString(baseEncoding);
    let lastIndex = lastIndexOf(haystack, cache.keys);
    lastIndex = Math.max(lastIndex, haystack.length - cache.rewind);

    cache.tail = haystack.slice(lastIndex);
    haystack = haystack.slice(0, lastIndex);

    callback(
      null,
      cache.keys.reduce((acc, search) => {
        acc = acc.replaceAll(search, replaceList[search]);
        return acc;
      }, haystack)
    );
  }

  function flush(callback) {
    if (cache.tail) {
      this.push(cache.tail);
    }

    callback();
  }

  return new Transform({transform, flush});
}
