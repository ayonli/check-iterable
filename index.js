if (!Symbol.asyncIterator) {
    Symbol.asyncIterator = Symbol("Symbol.asyncIterator");
}

/**
 * Checks if the given object is an Iterable (implemented `@@iterator`).
 */
export function isIterable(obj) {
    return obj !== null
        && obj !== undefined
        && typeof obj[Symbol.iterator] === "function";
}

/**
 * Checks if the given object is an AsyncIterable (implemented `@@asyncIterator`).
 */
export function isAsyncIterable(obj) {
    return obj !== null
        && obj !== undefined
        && typeof obj[Symbol.asyncIterator] === "function";
}

/**
 * Checks if the given object is an IteratorLike (implemented `next`).
 */
export function isIteratorLike(obj) {
    // An iterable object has a 'next' method, however including a 'next' method
    // doesn't ensure the object is an iterator, it is only iterator-like.
    return typeof obj === "object"
        && obj !== null
        && typeof obj.next === "function";
}

/**
 * Checks if the given object is an IterableIterator (implemented both
 * `@@iterator` and `next`).
 */
export function isIterableIterator(obj) {
    return isIteratorLike(obj)
        && typeof obj[Symbol.iterator] === "function";
}

/**
 * Checks if the given object is an AsyncIterableIterator (implemented
 * both `@@asyncIterator` and `next`).
 */
export function isAsyncIterableIterator(obj) {
    return isIteratorLike(obj)
        && typeof obj[Symbol.asyncIterator] === "function";
}

/**
 * Checks if the given object is a Generator.
 */
export function isGenerator(obj) {
    return isIterableIterator(obj)
        && hasGeneratorSpecials(obj);
}

/**
 * Checks if the given object is an AsyncGenerator.
 */
export function isAsyncGenerator(obj) {
    return isAsyncIterableIterator(obj)
        && hasGeneratorSpecials(obj);
}

function hasGeneratorSpecials(obj) {
    return typeof obj.return === "function"
        && typeof obj.throw === "function";
}
