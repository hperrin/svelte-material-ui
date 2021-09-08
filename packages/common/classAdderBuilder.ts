import type { SvelteComponentTyped } from 'svelte';
import ClassAdder, { internals } from './ClassAdder/index.svelte';
import type { ClassAdderInternals } from './ClassAdder/index.types';

const defaults = { ...internals };

export function classAdderBuilder<T extends ClassAdderInternals>(
  props: T
): SvelteComponentTyped<T['props']> {
  return (new Proxy(ClassAdder, {
    construct: function (target, args) {
      Object.assign(internals, defaults, props);
      // @ts-ignore: Need spread arg.
      return new target(...args);
    },
    get: function (target, prop) {
      Object.assign(internals, defaults, props);
      return (target as any)[prop];
    },
  }) as any) as SvelteComponentTyped<T['props']>;
}
