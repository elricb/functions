import {Transform} from "stream";
import max from "../array-string/max.js";

/**
 * Stream.Transform find/replace list of strings
 * Disclaimer:  doesn't replace words between chunks atm
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
/// Skip the first chunk
/// Process the last one + first x chars of current
/// If toString failed set tail as chunk
///   is last instanceof Buffer just callback
export default function (
  replaceList: {
    [index: string | number]: string;
  },
  baseEncoding: string = "utf8"
): Transform {
  const cache = {
    count: 0,
    tail: "",
    isBlob: false,
    keys: Object.keys(replaceList),
    reverse: max(Object.keys(replaceList))
  };

  function replaceAll(keys, list, haystack) {
    return keys.reduce(
      (acc, search) => acc.replaceAll(search, list[search]),
      haystack
    );
  }

  function replaceCrossOver(keys, list, haystack1, haystack2) {
    let tailPosition = null;
    let currentPosition = null;
    let search = "";

    for (let i = 0; i < keys.length; i++) {
      search = keys[i];

      const index = (
        haystack1.slice(haystack1.length - search.length + 1) +
        haystack2.slice(0, search.length - 1)
      ).indexOf(search);

      if (index !== -1) {
        tailPosition = haystack1.length - search.length + 1 + index;
        currentPosition = search.length - 1 + index;
        break;
      }
    }

    return [tailPosition, search, currentPosition];
    // TBD tailChunk = haystack1.slice(0, tailPosition) + list[i];
    // TBD currentChunk = haystack2.slice(currentPosition);
  }

  function hasCrossOver(keys, list, haystack1, haystack2) {
    let isCrossOver = false;

    for (let i = 0; i < keys.length; i++) {
      const search = keys[i];

      isCrossOver = (
        haystack1.slice(haystack1.length - search.length + 1) +
        haystack2.slice(0, search.length - 1)
      ).includes(search);

      if (isCrossOver) {
        break;
      }
    }

    return isCrossOver;
  }

  function transform(chunk, encoding, callback) {
    cache.count++;

    const haystack = chunk.toString(baseEncoding);
    const isBlob = haystack.includes("\u{FFFD}");
    const pushData = cache.count !== 1;

    if (pushData) {
      if (cache.isBlob) {
        callback(null, cache.tail);
      } else {
        callback(null, replaceAll(cache.keys, replaceList, cache.tail));
      }
    }

    cache.isBlob = isBlob;

    if (isBlob) {
      cache.tail = chunk;
      return;
    }

    cache.tail = haystack;
  }

  return new Transform({transform});
}
