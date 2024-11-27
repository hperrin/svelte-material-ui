<svelte:options runes={true} />

<MyComponent
  {tag}
  bind:this={element}
  {use}
  class={classMap({
    [className]: true,
    [adjustClass]: true,
  })}
  {...restProps}
>
  {#if children}{@render children()}{/if}
</MyComponent>

<script lang="ts" generics="TagName extends SmuiEveryElement = 'main'">
  import type { Snippet } from 'svelte';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap } from '@smui/common/internal';
  import type {
    SmuiComponent,
    SmuiElementMap,
    SmuiEveryElement,
    SmuiAttrs,
  } from '@smui/common';
  import { SmuiElement } from '@smui/common';

  import type TopAppBar from './TopAppBar.svelte';

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
     * The Top App Bar that this auto adjuster is for.
     *
     * This is REQUIRED! The reason you can provide `null` is so that the
     * Top App Bar has a chance to mount, then you must provide it.
     */
    topAppBar: TopAppBar | null;
    /**
     * The component to use to render the element.
     */
    component?: SmuiComponent<SmuiElementMap[TagName]>;
    /**
     * The tag name of the element to create.
     */
    tag?: TagName;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    topAppBar = null,
    component: MyComponent = SmuiElement,
    tag = 'main' as TagName,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<TagName, keyof OwnProps> = $props();

  let element: ReturnType<SmuiComponent<SmuiElementMap[TagName]>>;

  const propStore = $derived(topAppBar && topAppBar.getPropStore());
  const adjustClass = $derived.by(() => {
    if (!propStore || !$propStore || $propStore.variant === 'static') {
      return '';
    }

    if ($propStore.variant === 'short') {
      return 'mdc-top-app-bar--short-fixed-adjust';
    }

    if ($propStore.prominent && $propStore.dense) {
      return 'mdc-top-app-bar--dense-prominent-fixed-adjust';
    }
    if ($propStore.prominent) {
      return 'mdc-top-app-bar--prominent-fixed-adjust';
    }
    if ($propStore.dense) {
      return 'mdc-top-app-bar--dense-fixed-adjust';
    }

    return 'mdc-top-app-bar--fixed-adjust';
  });

  export function getElement() {
    return element.getElement();
  }
</script>
