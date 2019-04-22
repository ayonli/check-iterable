/**
 * Checks if the given object is an Iterable (implemented `@@iterator`).
 */
declare export function isIterable(obj: any): boolean;
/**
 * Checks if the given object is an AsyncIterable (implemented `@@asyncIterator`).
 */
declare export function isAsyncIterable(obj: any): boolean;
/**
 * Checks if the given object is an IteratorLike (implemented `next`).
 */
declare export function isIteratorLike(obj: any): boolean;
/**
 * Checks if the given object is an IterableIterator (implemented both
 * `@@iterator` and `next`).
 */
declare export function isIterableIterator(obj: any): boolean;
/**
 * Checks if the given object is an AsyncIterableIterator (implemented 
 * both `@@asyncIterator` and `next`).
 */
declare export function isAsyncIterableIterator(obj: any): boolean;
/**
 * Checks if the given object is a Generator.
 */
declare export function isGenerator(obj: any): boolean;
/**
 * Checks if the given object is an AsyncGenerator.
 */
declare export function isAsyncGenerator(obj: any): boolean;