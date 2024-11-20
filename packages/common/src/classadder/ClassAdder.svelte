<svelte:options runes={false} />

<svelte:component
  this={component}
  {tag}
  bind:this={element}
  {use}
  class={classMap({
    [className]: true,
    [smuiClass]: true,
    ...smuiClassMap,
  })}
  {...props}
  {...$$restProps}><slot /></svelte:component
>

<script lang="ts">
  import { onDestroy, getContext, setContext } from 'svelte';

  import type {
    SmuiComponent,
    SmuiElementPropMap,
    SmuiEveryElement,
    SmuiAttrs,
  } from '../smui.types.js';
  import type { ActionArray } from '../internal/useActions.js';
  import { classMap } from '../internal/classMap.js';
  import { SmuiElement } from '../index.js';
  import type { ClassAdderInternals } from './ClassAdder.types.js';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    component?: SmuiComponent;
    tag?: keyof SmuiElementPropMap;
  };
  type $$Props = OwnProps & SmuiAttrs<SmuiEveryElement, keyof OwnProps>;

  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let _internals: ClassAdderInternals = {
    component: SmuiElement as SmuiComponent,
    tag: 'div',
    class: '',
    classMap: {},
    contexts: {},
    props: {},
  };

  let element: ReturnType<SmuiComponent>;
  const smuiClass = _internals.class;
  const smuiClassMap: { [k: string]: any } = {};
  const smuiClassUnsubscribes: (() => void)[] = [];
  const contexts = _internals.contexts;
  const props = _internals.props;

  export let component: SmuiComponent = _internals.component;
  export let tag: keyof SmuiElementPropMap | undefined =
    component === (SmuiElement as SmuiComponent) ? _internals.tag : undefined;

  Object.entries(_internals.classMap).forEach(([name, context]) => {
    const store = getContext(context) as SvelteStore<any>;

    if (store && 'subscribe' in store) {
      smuiClassUnsubscribes.push(
        store.subscribe((value) => {
          smuiClassMap[name] = value;
        }),
      );
    }
  });

  for (let context in contexts) {
    if (contexts.hasOwnProperty(context)) {
      setContext(context, contexts[context]);
    }
  }

  onDestroy(() => {
    for (const unsubscribe of smuiClassUnsubscribes) {
      unsubscribe();
    }
  });

  export function getElement() {
    return element.getElement();
  }
</script>
