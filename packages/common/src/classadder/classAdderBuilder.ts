import type { SvelteComponentDev } from 'svelte/internal';

import type { ClassAdderInternals } from './ClassAdder.types.js';
// @ts-ignore: Internals is exported... argh.
import ClassAdder, { internals } from './ClassAdder.svelte';

const defaults = { ...internals };

export function classAdderBuilder<T extends typeof SvelteComponentDev>(
  props: Partial<ClassAdderInternals<T>>
) {
  return new Proxy(ClassAdder, {
    construct: function (target, args) {
      Object.assign(internals, defaults, props);
      // @ts-ignore: Need spread arg.
      return new target(...args);
    },
    get: function (target, prop) {
      Object.assign(internals, defaults, props);
      return (target as any)[prop];
    },
  }) as T;
}
