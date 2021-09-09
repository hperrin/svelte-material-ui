import type { SMUIComponentTyped } from './SMUIComponent.d';
import type { ClassAdderInternals } from './ClassAdder/index.types';
import ClassAdder, { internals } from './ClassAdder/index.svelte';

const defaults = { ...internals };

export function classAdderBuilder(props: ClassAdderInternals) {
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
  });
}
