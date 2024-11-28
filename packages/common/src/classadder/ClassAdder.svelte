<svelte:options runes />

<MyComponent
  {tag}
  bind:this={element}
  {use}
  class={classMap({
    [className]: true,
    [smuiClass]: true,
    ...smuiClassMap,
  })}
  {...props}
  {...restProps}>{@render children?.()}</MyComponent
>

<script lang="ts">
  import type { Snippet } from 'svelte';
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
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    class?: string;
    /**
     * Do not provide this.
     */
    _internals: ClassAdderInternals;
    /**
     * The component to use to render the element.
     */
    component?: SmuiComponent;
    /**
     * The tag name of the element to create.
     */
    tag?: keyof SmuiElementPropMap;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    _internals = {
      component: SmuiElement as SmuiComponent,
      tag: 'div',
      class: '',
      classMap: {},
      contexts: {},
      props: {},
    },
    component: MyComponent = _internals.component,
    tag = _internals.tag,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<SmuiEveryElement, keyof OwnProps> = $props();

  let element: ReturnType<SmuiComponent>;
  const smuiClass = $state(_internals.class);
  const smuiClassMap: { [k: string]: any } = $state({});
  const smuiClassUnsubscribes: (() => void)[] = [];
  const contexts = $state(_internals.contexts);
  const props = $state(_internals.props);

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
