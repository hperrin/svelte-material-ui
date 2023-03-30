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
    component: SmuiElement as ClassAdderInternals['component'],
    tag: 'div',
    class: '',
    classMap: {},
    contexts: {},
    props: {},
  };
</script>

<script lang="ts">
  import type { ComponentType, SvelteComponent } from 'svelte';
  import { onDestroy, getContext, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';

  import type { SmuiElementMap, SmuiAttrs } from '../smui.types.js';
  import type { ActionArray } from '../internal/useActions.js';
  import { forwardEventsBuilder } from '../internal/forwardEventsBuilder.js';
  import { classMap } from '../internal/classMap.js';

  type TagName = $$Generic<keyof SmuiElementMap>;
  type Component = $$Generic<ComponentType<SvelteComponent>>;
  type OwnProps = {
    use?: ActionArray;
    class?: string;
    component?: Component;
    tag?: TagName;
  };
  type $$Props = OwnProps & SmuiAttrs<keyof SmuiElementMap, OwnProps>;

  export let use: ActionArray = [];
  let className = '';
  export { className as class };

  let element: SvelteComponent;
  const smuiClass = internals.class;
  const smuiClassMap: { [k: string]: any } = {};
  const smuiClassUnsubscribes: (() => void)[] = [];
  const contexts = internals.contexts;
  const props = internals.props;

  export let component: Component = internals.component as Component;
  export let tag: TagName | undefined = (
    component === (SmuiElement as unknown as Component)
      ? internals.tag
      : undefined
  ) as TagName | undefined;

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
