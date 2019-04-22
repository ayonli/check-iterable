"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

if (!Symbol.asyncIterator) {
    Symbol.asyncIterator = Symbol("Symbol.asyncIterator");
}

exports.isIterable = isIterable;
function isIterable(obj) {
    return obj !== null
        && obj !== undefined
        && typeof obj[Symbol.iterator] === "function";
}
exports.isAsyncIterable = isAsyncIterable;
function isAsyncIterable(obj) {
    return obj !== null
        && obj !== undefined
        && typeof obj[Symbol.asyncIterator] === "function";
}

exports.isIteratorLike = isIteratorLike;
function isIteratorLike(obj) {
    // An iterable object has a 'next' method, however including a 'next' method
    // doesn't ensure the object is an iterator, it is only iterator-like.
    return typeof obj === "object"
        && obj !== null
        && typeof obj.next === "function";
}

exports.isIterableIterator = isIterableIterator;
function isIterableIterator(obj) {
    return isIteratorLike(obj)
        && typeof obj[Symbol.iterator] === "function";
}

exports.isAsyncIterableIterator = isAsyncIterableIterator;
function isAsyncIterableIterator(obj) {
    return isIteratorLike(obj)
        && typeof obj[Symbol.asyncIterator] === "function";
}

exports.isGenerator = isGenerator;
function isGenerator(obj) {
    return isIterableIterator(obj)
        && hasGeneratorSpecials(obj);
}

exports.isAsyncGenerator = isAsyncGenerator;
function isAsyncGenerator(obj) {
    return isAsyncIterableIterator(obj)
        && hasGeneratorSpecials(obj);
}

function hasGeneratorSpecials(obj) {
    return typeof obj.return === "function"
        && typeof obj.throw === "function";
}