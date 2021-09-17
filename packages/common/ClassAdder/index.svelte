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
  import type { SMUIComponent } from '../smui.d';
</script>

<script lang="ts">
  import { onDestroy, getContext, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';

  import type { ActionArray } from '../useActions.js';
  import { forwardEventsBuilder } from '../forwardEventsBuilder.js';
  import { classMap } from '../classMap.js';
  import { internals } from './internals.js';

  export let use: ActionArray = [];
  let className = '';
  export { className as class };

  let element: SMUIComponent;
  const smuiClass = internals.class;
  const smuiClassMap: { [k: string]: any } = {};
  const smuiClassUnsubscribes: (() => void)[] = [];
  const contexts = internals.contexts;
  const props = internals.props;

  export let component: typeof SMUIComponent = internals.component;

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
