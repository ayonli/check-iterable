/**
 * Checks if the given object is an Iterable (implemented `@@iterator`).
 */
export declare function isIterable(obj: any): boolean;
/**
 * Checks if the given object is an AsyncIterable (implemented `@@asyncIterator`).
 */
export declare function isAsyncIterable(obj: any): boolean;
/**
 * Checks if the given object is an IteratorLike (implemented `next`).
 */
export declare function isIteratorLike(obj: any): boolean;
/**
 * Checks if the given object is an IterableIterator (implemented both
 * `@@iterator` and `next`).
 */
export declare function isIterableIterator(obj: any): boolean;
/**
 * Checks if the given object is an AsyncIterableIterator (implemented 
 * both `@@asyncIterator` and `next`).
 */
export declare function isAsyncIterableIterator(obj: any): boolean;
/**
 * Checks if the given object is a Generator.
 */
export declare function isGenerator(obj: any): boolean;
/**
 * Checks if the given object is an AsyncGenerator.
 */
export declare function isAsyncGenerator(obj: any): boolean;