var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
const assert = require("assert");
const check = require("..");
describe("isIterable", () => {
    it("should pass when invoking an ordinary generator function", () => {
        assert.ok(check.isIterable(function* () { }()));
    });
    it("should fail when invoking an async generator function", () => {
        assert.ok(!check.isIterable(function () { return __asyncGenerator(this, arguments, function* () { }); }()));
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
        assert.ok(check.isAsyncIterable(function () { return __asyncGenerator(this, arguments, function* () { }); }()));
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
        assert.ok(check.isIteratorLike(function () { return __asyncGenerator(this, arguments, function* () { }); }()));
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
        assert.ok(!check.isIterableIterator(function () { return __asyncGenerator(this, arguments, function* () { }); }()));
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
        assert.ok(check.isAsyncIterableIterator(function () { return __asyncGenerator(this, arguments, function* () { }); }()));
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
        assert.ok(!check.isGenerator(function () { return __asyncGenerator(this, arguments, function* () { }); }()));
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
        assert.ok(check.isAsyncGenerator(function () { return __asyncGenerator(this, arguments, function* () { }); }()));
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
//# sourceMappingURL=index.js.map