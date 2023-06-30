<svelte:component
  this={component}
  {tag}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class={classMap({
    [className]: true,
    [adjustClass]: true,
  })}
  {...$$restProps}
>
  <slot />
</svelte:component>

<script lang="ts" generics="TagName extends SmuiEveryElement = 'main'">
  import type { SvelteComponent } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import { forwardEventsBuilder, classMap } from '@smui/common/internal';
  import type {
    SmuiElementMap,
    SmuiEveryElement,
    SmuiAttrs,
  } from '@smui/common';
  import { SmuiElement } from '@smui/common';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    topAppBar: TopAppBar;
    component?: typeof SvelteComponent;
    tag?: TagName;
  };
  type $$Props = OwnProps & SmuiAttrs<TagName, keyof OwnProps>;

  import type TopAppBar from './TopAppBar.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let topAppBar: TopAppBar;

  let element: SvelteComponent;

  export let component: typeof SvelteComponent = SmuiElement;
  export let tag: SmuiEveryElement | undefined =
    component === SmuiElement ? 'main' : undefined;

  $: propStore = topAppBar && topAppBar.getPropStore();
  $: adjustClass = (() => {
    if (!propStore || $propStore.variant === 'static') {
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
  })();

  export function getElement(): SmuiElementMap[TagName] {
    return element.getElement();
  }
</script>
