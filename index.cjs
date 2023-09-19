if (!Symbol.asyncIterator) {
    Symbol.asyncIterator = Symbol("Symbol.asyncIterator");
}

/**
 * Checks if the given object is an Iterable (implemented `@@iterator`).
 * @returns {obj is Iterable<any>}
 */
function isIterable(obj) {
    return obj !== null
        && obj !== undefined
        && typeof obj[Symbol.iterator] === "function";
}
exports.isIterable = isIterable;

/**
 * Checks if the given object is an AsyncIterable (implemented `@@asyncIterator`).
 * @returns {obj is AsyncIterable<any>}
 */
function isAsyncIterable(obj) {
    return obj !== null
        && obj !== undefined
        && typeof obj[Symbol.asyncIterator] === "function";
}
exports.isAsyncIterable = isAsyncIterable;

/**
 * Checks if the given object is an IteratorLike (implemented `next`).
 * @returns {obj is { next: Function }}
 */
function isIteratorLike(obj) {
    // An iterable object has a 'next' method, however including a 'next' method
    // doesn't ensure the object is an iterator, it is only iterator-like.
    return typeof obj === "object"
        && obj !== null
        && typeof obj.next === "function";
}
exports.isIteratorLike = isIteratorLike;

/**
 * Checks if the given object is an IterableIterator (implemented both
 * `@@iterator` and `next`).
 */
function isIterableIterator(obj) {
    return isIteratorLike(obj)
        && typeof obj[Symbol.iterator] === "function";
}
exports.isIterableIterator = isIterableIterator;

/**
 * Checks if the given object is an AsyncIterableIterator (implemented
 * both `@@asyncIterator` and `next`).
 * @returns {obj is AsyncIterableIterator<any>}
 */
function isAsyncIterableIterator(obj) {
    return isIteratorLike(obj)
        && typeof obj[Symbol.asyncIterator] === "function";
}
exports.isAsyncIterableIterator = isAsyncIterableIterator;

/**
 * Checks if the given object is a Generator.
 * @returns {obj is Generator}
 */
function isGenerator(obj) {
    return isIterableIterator(obj)
        && hasGeneratorSpecials(obj);
}
exports.isGenerator = isGenerator;

/**
 * Checks if the given object is an AsyncGenerator.
 * @returns {obj is AsyncGenerator}
 */
function isAsyncGenerator(obj) {
    return isAsyncIterableIterator(obj)
        && hasGeneratorSpecials(obj);
}
exports.isAsyncGenerator = isAsyncGenerator;

function hasGeneratorSpecials(obj) {
    return typeof obj.return === "function"
        && typeof obj.throw === "function";
}
