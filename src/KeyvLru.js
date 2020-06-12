// @flow

import type { MapInterface } from '../flow/types/MapInterface';

export type KeyvLruOptions = {
  max: number,
  ttl?: number,
};

const lru = require('tiny-lru');
const EventEmitter = require('events');

/**
 * An adaptor from tiny-lru to a Map API.
 */
class KeyvLru extends EventEmitter implements MapInterface {
  // @TODO: Type this in a less generic way.
  cache: Object;
  defaultTtl: ?number;

  constructor(options: KeyvLruOptions = { max: 500 }) {
    super();
    this.defaultTtl = options.ttl;
    this.cache = lru(options.max, this.defaultTtl);
  }

  clear(): void {
    this.cache.clear();
  }

  delete(key: string): boolean {
    const removed = this.cache.delete(key);
    return typeof removed !== 'undefined';
  }

  get(key: string): any {
    return this.cache.get(key);
  }

  set(key: string, value: any): 1 | 0 {
    this.cache.set(key, value);
    return 1;
  }
}

module.exports = KeyvLru;
