import {Transform} from "stream";
import max from "../array-string/max.js";

function replaceAllPolyfill(text, source, target) {
  if (
    Object.prototype.toString.call(source).toLowerCase() === "[object regexp]"
  ) {
    return text.replace(source, target);
  }

  return text.replace(new RegExp(source, "g"), target);
}

/**
 * Stream.Transform find/replace list of strings
 *
 * ```js
 * import {pipeline, Readable} from "stream";
 * import streamReplace from "@elricb/functions/stream/replace";
 * pipeline(
 *   Readable.from('Good morning!', {encoding: 'utf8'}),
 *   streamReplace({morning: "evening"}),
 *   new Writable({write(chunk, encoding, callback) { console.log(chunk.toString(); callback(); }})
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

  function transform(chunk, _, callback) {
    let haystack = chunk.toString(baseEncoding);
    const isBlob = haystack.includes("\u{FFFD}");

    // Replace matches
    if (!isBlob) {
      for (const [key, value] of Object.entries(findReplace)) {
        /**
         * Requires target >= ES2021.String.
         * haystack = haystack.replaceAll(key, value)
         */
        haystack = replaceAllPolyfill(haystack, key, value);

        // Check between chunks; i hate this
        if (!cache.isBlob) {
          const compare1 =
            cache.tail.slice(cache.tail.length - key.length) +
            haystack.slice(0, key.length);
          /**
           * Requires target >= ES2021.String.
           * const compare2 = compare1.replaceAll(key, value);
           */
          const compare2 = replaceAllPolyfill(compare1, key, value);

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
