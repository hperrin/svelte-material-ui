<svelte:component
  this={component}
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

<script context="module" lang="ts">
  import type { SvelteComponent } from 'svelte';
  import type { ClassAdderInternals } from './index.types';

  export const internals: ClassAdderInternals = {
    component: null,
    class: '',
    // The class map maps classes to contexts. The context
    // should resolve to a Svelte store, and the class
    // will be added if the Svelte store's value is true.
    classMap: {},
    contexts: {},
    props: {},
  };
</script>

<script lang="ts">
  import { onDestroy, getContext, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder } from '../forwardEventsBuilder';
  import { classMap } from '../classMap';
  import type { ActionArray } from '../useActions';

  export let use: ActionArray = [];
  let className = '';
  export { className as class };

  let element: SvelteComponent;
  const smuiClass = internals.class;
  const smuiClassMap: { [k: string]: any } = {};
  const smuiClassUnsubscribes: (() => void)[] = [];
  const contexts = internals.contexts;
  const props = internals.props;

  export let component = internals.component;

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

  export function getElement() {
    return element.getElement();
  }
</script>
