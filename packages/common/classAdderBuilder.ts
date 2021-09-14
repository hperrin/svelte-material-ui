import type { ClassAdderInternals } from './ClassAdder/index.types';
import ClassAdder from './ClassAdder/index.svelte';
import { internals } from './ClassAdder/internals';
import type { SMUIComponent } from './smui.d';

const defaults = { ...internals };

export function classAdderBuilder<T extends typeof SMUIComponent>(
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
