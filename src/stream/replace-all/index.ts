import {Transform} from "stream";
import max from "../../array-string/max";

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
  findReplace: {[key: string]: string},
  baseEncoding: string = "utf8"
): Transform {
  const cache = {
    tail: "",
    isBlob: false,
    reverse: max(Object.keys(findReplace))
  };

  function transform(chunk, encoding, callback) {
    let haystack = chunk.toString(baseEncoding);
    const isBlob = haystack.includes("\u{FFFD}");

    // Replace matches
    if (!isBlob) {
      for (const [key, value] of Object.entries(findReplace)) {
        haystack = haystack.replaceAll(key, value);

        // Check between chunks; i hate this
        if (!cache.isBlob) {
          const compare1 =
            cache.tail.slice(cache.tail.length - key.length) +
            haystack.slice(0, key.length);
          const compare2 = compare1.replaceAll(key, value);

          if (compare1 !== compare2) {
            cache.tail =
              cache.tail.slice(0, cache.tail.length - key.length) +
              compare2.slice(0, Math.floor(compare2.length / 2));
            haystack =
              compare2.slice(Math.floor(compare2.length / 2)) +
              haystack.slice(key.length);
          }
        }
      }
    }

    // Send cache and cache current chunk
    callback(null, cache.tail);
    cache.tail = isBlob ? chunk : haystack;
    cache.isBlob = isBlob;
  }

  function flush(callback) {
    if (cache.tail) {
      this.push(cache.tail);
    }

    callback();
  }

  return new Transform({transform, flush});
}
