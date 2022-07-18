# functions

Functions/procedures I reuse.  These are low level functions, specifically focused, and not general, macro, or mixed type use.

Are ES Modules (esm).  commonjs require must use ".default".

## Install

```
$ npm install --save-dev @elricb/functions
```

## Usage

Include specific function in your code.

```js
import max from "@elricb/functions/array-string/max";

console.log(max(["a", "ab", "abc"]));
```

