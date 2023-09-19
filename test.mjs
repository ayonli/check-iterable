import * as assert from "assert";
import * as check from "./index.mjs";

describe("isIterable", () => {
    it("should pass when invoking an ordinary generator function", () => {
        assert.ok(check.isIterable(function* () { }()));
    });

    it("should fail when invoking an async generator function", () => {
        assert.ok(!check.isIterable(async function* () { }()));
    });

    it("should pass when checking an object that has the @@iterator method", () => {
        assert.ok(check.isIterable(new Map));
    });

    it("should fail when checking an object that doesn't have the @@iterator method", () => {
        assert.ok(!check.isIterable({}));
    });

    it("should pass when checking a string", () => {
        assert.ok(check.isIterable("strings are iterable"));
    });

    it("should pass when checking an array", () => {
        assert.ok(check.isIterable(["arrays", "are", "iterable"]));
    });
});

describe("isAsyncIterable", () => {
    it("should pass when invoking an async generator function", () => {
        assert.ok(check.isAsyncIterable(async function* () { }()));
    });

    it("should fail when invoking an ordinary generator function", () => {
        assert.ok(!check.isAsyncIterable(function* () { }()));
    });

    it("should pass when checking an object that has the @@asyncIterator method", () => {
        assert.ok(check.isAsyncIterable({
            [Symbol.asyncIterator]() {
                return {
                    next() {
                        return Promise.resolve({ value: undefined, done: true });
                    }
                };
            }
        }));
    });

    it("should fail when checking an object that doesn't have the @@asyncIterator method", () => {
        assert.ok(!check.isAsyncIterable({}));
    });
});

describe("isIteratorLike", () => {
    it("should pass when invoking an ordinary generator function", () => {
        assert.ok(check.isIteratorLike(function* () { }()));
    });

    it("should pass when invoking an async generator function", () => {
        assert.ok(check.isIteratorLike(async function* () { }()));
    });

    it("should pass when checking an object that has a next method", () => {
        assert.ok(check.isIteratorLike({ next() { } }));
    });

    it("should fail when checking an object that doesn't have a next method", () => {
        assert.ok(!check.isIteratorLike({}));
    });
});

describe("isIterableIterator", () => {
    it("should pass when invoking an ordinary generator function", () => {
        assert.ok(check.isIterableIterator(function* () { }()));
    });

    it("should fail when invoking an async generator function", () => {
        assert.ok(!check.isIterableIterator(async function* () { }()));
    });

    it("should pass when checking an object that has both next and @@iterator methods", () => {
        assert.ok(check.isIterableIterator({
            next() {
                return { value: undefined, done: true };
            },
            [Symbol.iterator]() {
                return this;
            }
        }));
    });

    it("should fail when checking an object that has only the next method", () => {
        assert.ok(!check.isIterableIterator({
            next() {
                return { value: undefined, done: true };
            }
        }));
    });

    it("should fail when checking an object that has only the @@iterator method", () => {
        assert.ok(!check.isIterableIterator(new Map));
    });

    it("should fail when checking an object that doesn't have neither next nor @@iterator method", () => {
        assert.ok(!check.isIterableIterator({}));
    });
});

describe("isAsyncIterableIterator", () => {
    it("should pass when invoking a async generator function", () => {
        assert.ok(check.isAsyncIterableIterator(async function* () { }()));
    });

    it("should fail when invoking an ordinary generator function", () => {
        assert.ok(!check.isAsyncIterableIterator(function* () { }()));
    });

    it("should pass when checking an object that has both next and @@asyncIterator methods", () => {
        assert.ok(check.isAsyncIterableIterator({
            next() {
                return Promise.resolve({ value: undefined, done: true });
            },
            [Symbol.asyncIterator]() {
                return this;
            }
        }));
    });

    it("should fail when checking an object that has only the next method", () => {
        assert.ok(!check.isAsyncIterableIterator({
            next() {
                return Promise.resolve({ value: undefined, done: true });
            }
        }));
    });

    it("should fail when checking an object that has only the @@iterator method", () => {
        assert.ok(!check.isAsyncIterableIterator({
            [Symbol.asyncIterator]() {
                return {
                    next() {
                        return Promise.resolve({ value: undefined, done: true });
                    }
                };
            }
        }));
    });

    it("should fail when checking an object that doesn't have neither next nor @@asyncIterator method", () => {
        assert.ok(!check.isAsyncIterableIterator({}));
    });
});

describe("isGenerator", () => {
    it("should pass when invoking an ordinary generator function", () => {
        assert.ok(check.isGenerator(function* () { }()));
    });

    it("should fail when invoking an async generator function", () => {
        assert.ok(!check.isGenerator(async function* () { }()));
    });

    it("should fail when checking an ordinary iterable iterator object", () => {
        assert.ok(!check.isGenerator({
            next() {
                return { value: undefined, done: true };
            },
            [Symbol.iterator]() {
                return this;
            }
        }));
    });
});

describe("isAsyncGenerator", () => {
    it("should pass when invoking an async generator function", () => {
        assert.ok(check.isAsyncGenerator(async function* () { }()));
    });

    it("should fail when invoking an ordinary generator function", () => {
        assert.ok(!check.isAsyncGenerator(function* () { }()));
    });

    it("should fail when checking an ordinary async iterable iterator object", () => {
        assert.ok(!check.isAsyncGenerator({
            next() {
                return Promise.resolve({ value: undefined, done: true });
            },
            [Symbol.asyncIterator]() {
                return this;
            }
        }));
    });
});
