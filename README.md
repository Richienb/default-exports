# Default Exports [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/default-exports/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/default-exports)

Use default exports and named exports at the same time in CommonJS.

[![NPM Badge](https://nodei.co/npm/default-exports.png)](https://npmjs.com/package/default-exports)

## Install

```sh
npm install default-exports
```

## Usage

```js
function aFunc() {}
function bFunc() {}
function cFunc() {}

module.exports = require("default-exports")({
    aFunc,
    bFunc,
    cFunc
});
```

In another module:

```js
const mainFunc = require("./myModule");
console.log(mainFunc); // aFunc() {}

const { aFunc, bFunc, cFunc } = require("./myModule");
console.log(aFunc, bFunc, cFunc); // aFunc() {}, bFunc() {}, cFunc() {}
```

## API

### defaultExports(forExport)

Export provided values as named exports and set the first item as the default export.

#### forExport

Type: `object`

An object of values to export, the first one to use as the default export.

### defaultExports(defaultExport, otherExports)

Export provided value as default export and named exports.

#### defaultExport

Type: `any`

The function to use as the default export.

##### otherExports

Type: `object`\
Default: `{}`

Key-value pairs of the named exports.

## Setting a non-object (such as string) as default value

Since `default-exports` relys on object-based transforms, to set a value which is not based on an object such as strings or numbers, use their classes:

```js
defaultExports(new String("A string"), otherExports);

defaultExports(new Number(12), otherExports);
```
