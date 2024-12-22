<svelte:options runes />

<MyComponent
  {tag}
  bind:this={element as ReturnType<C>}
  {use}
  class={classMap({
    [className]: true,
    [_smuiClass]: true,
    ..._smuiClassMap,
  })}
  {..._smuiProps}
  {...restProps}>{@render children?.()}</MyComponent
>

<script
  lang="ts"
  generics="T extends SmuiEveryElement = keyof SmuiElementPropMap, C extends SmuiComponent = SmuiComponent"
>
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
     * The component to use to render the element.
     */
    component?: C;
    /**
     * The tag name of the element to create.
     */
    tag?: T;

    /**
     * Class to add to the component.
     *
     * Do not provide this yourself.
     */
    _smuiClass?: string;
    /**
     * Map of name to context name. The context should resolve to a Svelte
     * store, and the class will be added if the Svelte store's value is true.
     *
     * Do not provide this yourself.
     */
    _smuiClassMap?: { [k: string]: any };
    /**
     * Map of contexts to set.
     *
     * Do not provide this yourself.
     */
    _smuiContexts?: { [k: string]: any };
    /**
     * Props to add to the element.
     *
     * Do not provide this yourself.
     */
    _smuiProps?: { [k: string]: any };

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    component: MyComponent = SmuiElement as unknown as C,
    tag = 'div' as T,

    _smuiClass = '',
    _smuiClassMap = {},
    _smuiContexts = {},
    _smuiProps = {},

    children,
    ...restProps
  }: OwnProps & SmuiAttrs<SmuiEveryElement, keyof OwnProps> = $props();

  let element: ReturnType<C>;
  const smuiClassUnsubscribes: (() => void)[] = [];

  Object.entries(_smuiClassMap).forEach(([name, context]) => {
    const store = getContext(context) as SvelteStore<any>;

    if (store && 'subscribe' in store) {
      smuiClassUnsubscribes.push(
        store.subscribe((value) => {
          _smuiClassMap[name] = value;
        }),
      );
    }
  });

  for (let context in _smuiContexts) {
    if (_smuiContexts.hasOwnProperty(context)) {
      setContext(context, _smuiContexts[context]);
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
