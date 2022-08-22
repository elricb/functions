const {Readable} = require("stream");
const replaceStream = require("./index").default;
const readableToString = require("../readable-to-string/index").default;

test('replace-stream({"fox": "foxy"})', async () => {
  const readable = Readable.from(
    "The quick brown fox jumps over the lazy fox",
    {encoding: "utf8"}
  );
  const result = await readableToString(
    readable.pipe(replaceStream({fox: "foxy"}))
  );
  expect(result).toBe("The quick brown foxy jumps over the lazy foxy");
});
