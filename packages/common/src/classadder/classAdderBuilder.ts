import type { SmuiComponent, SmuiEveryElement } from '../smui.types.js';
import { SmuiElement } from '../index.js';
import type { ClassAdderInternals } from './ClassAdder.types.js';
import ClassAdder from './ClassAdder.svelte';

export function classAdderBuilder<
  T extends SmuiEveryElement = 'div',
  C extends SmuiComponent = SmuiComponent,
>(internals: Partial<ClassAdderInternals<T, C>>): C {
  return function (anchor: any, props: any) {
    return ClassAdder(anchor, {
      ...props,
      _internals: {
        component: SmuiElement as unknown as SmuiComponent,
        tag: 'div',
        class: '',
        classMap: {},
        contexts: {},
        props: {},
        ...internals,
      },
    });
  } as unknown as C;
}
