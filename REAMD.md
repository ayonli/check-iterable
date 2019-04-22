# Check Iterable

**A toolbox to check if an object is iterable, an iterator or a generator, etc.**

## API

- `isIterable(obj: any): boolean` Checks if the given object is an Iterable 
    (implemented `@@iterator`).
- `isAsyncIterable(obj: any): boolean` Checks if the given object is an 
    AsyncIterable (implemented `@@asyncIterator`).
- `isIteratorLike(obj: any): boolean` Checks if the given object is an 
    IteratorLike (implemented `next`).
- `isIterableIterator(obj: any): boolean` Checks if the given object is an 
    IterableIterator (implemented both `@@iterator` and `next`).
- `isAsyncIterableIterator(obj: any): boolean` Checks if the given object is an
    AsyncIterableIterator (implemented both `@@asyncIterator` and `next`).
- `isGenerator(obj: any): boolean` Checks if the given object is a Generator.
- `isAsyncGenerator(obj: any): boolean` Checks if the given object is an 
    AsyncGenerator.

**Note:**

These functions are designed to test whether an object suits the specifications
suggested on [MDN](https://developer.mozilla.org), go to MDN for more details.