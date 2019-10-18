/**
 * Export provided values as named exports and set the first item as the default export.
 * @param forExport An object of values to export, the first one to use as the default export.
 * @example
 * ```
 * function aFunc() {}
 * function bFunc() {}
 * function cFunc() {}
 *
 * module.exports = require("default-exports")({
 *     aFunc,
 *     bFunc,
 *     cFunc
 * });
 * ```
*/
declare function defaultExports<T extends object>(forExport: T): T

/**
 * Export provided value as default export and named exports.
 * @param defaultExport The function to use as the default export.
 * @param otherExports Key-value pairs of the named exports.
 * @example
 * ```
 * function aFunc() {}
 * function bFunc() {}
 * function cFunc() {}
 *
 * module.exports = require("default-exports")(aFunc, {
 *     bFunc,
 *     cFunc
 * });
 * ```
*/
declare function defaultExports<T extends object, U extends object>(defaultExport: T, otherExports: U): T;

export = defaultExports
