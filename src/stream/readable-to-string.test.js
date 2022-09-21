const {Readable} = require("stream");
const readableToString = require("./readable-to-string").default;

test('readable-to-string(Readable)', async () => {
  const readable = Readable.from(
    "The quick brown fox jumps over the lazy fox",
    {encoding: "utf8"}
  );
  const result = await readableToString(readable);
  expect(result).toBe("The quick brown fox jumps over the lazy fox");
});

