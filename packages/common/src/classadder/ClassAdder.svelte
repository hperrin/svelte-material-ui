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
  import { Element } from '../index.js';

  export const internals: ClassAdderInternals = {
    component: Element,
    tag: 'div',
    class: '',
    classMap: {},
    contexts: {},
    props: {},
  };
</script>

<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { onDestroy, getContext, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';

  import type { SmuiComponent } from '../smui.types.js';
  import type { ActionArray } from '../internal/useActions.js';
  import { forwardEventsBuilder } from '../internal/forwardEventsBuilder.js';
  import { classMap } from '../internal/classMap.js';

  export let use: ActionArray = [];
  let className = '';
  export { className as class };

  let element: SmuiComponent;
  const smuiClass = internals.class;
  const smuiClassMap: { [k: string]: any } = {};
  const smuiClassUnsubscribes: (() => void)[] = [];
  const contexts = internals.contexts;
  const props = internals.props;

  export let component: ComponentType<SmuiComponent> = internals.component;
  export let tag = component === Element ? internals.tag : null;

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

  export function getElement(): ReturnType<
    InstanceType<typeof component>['getElement']
  > {
    return element.getElement();
  }
</script>
