<svelte:component
  this={component}
  {tag}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class={classMap({
    [className]: true,
    [smuiClass]: true,
    ...smuiClassMap,
  })}
  {...props}
  {...$$restProps}><slot /></svelte:component
>

<script lang="ts" context="module">
  import type { ClassAdderInternals } from './ClassAdder.types.js';
  import { SmuiElement } from '../index.js';

  export const internals: ClassAdderInternals = {
    component: SmuiElement as typeof SvelteComponent,
    tag: 'div',
    class: '',
    classMap: {},
    contexts: {},
    props: {},
  };
</script>

<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { onDestroy, getContext, setContext } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';

  import type {
    SmuiElementPropMap,
    SmuiEveryElement,
    SmuiAttrs,
  } from '../smui.types.js';
  import type { ActionArray } from '../internal/useActions.js';
  import { forwardEventsBuilder } from '../internal/forwardEventsBuilder.js';
  import { classMap } from '../internal/classMap.js';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    component?: typeof SvelteComponent;
    tag?: keyof SmuiElementPropMap;
  };
  type $$Props = OwnProps & SmuiAttrs<SmuiEveryElement, keyof OwnProps>;

  export let use: ActionArray = [];
  let className = '';
  export { className as class };

  let element: SvelteComponent;
  const smuiClass = internals.class;
  const smuiClassMap: { [k: string]: any } = {};
  const smuiClassUnsubscribes: (() => void)[] = [];
  const contexts = internals.contexts;
  const props = internals.props;

  export let component: typeof SvelteComponent = internals.component;
  export let tag: keyof SmuiElementPropMap | undefined =
    component === SmuiElement ? internals.tag : undefined;

  Object.entries(internals.classMap).forEach(([name, context]) => {
    const store = getContext(context) as SvelteStore<any>;

    if (store && 'subscribe' in store) {
      smuiClassUnsubscribes.push(
        store.subscribe((value) => {
          smuiClassMap[name] = value;
        })
      );
    }
  });

  const forwardEvents = forwardEventsBuilder(get_current_component());

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

  export function getElement(): HTMLElement {
    return element.getElement();
  }
</script>
