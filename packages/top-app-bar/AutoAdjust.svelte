<svelte:component
  this={component}
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

<script lang="ts">
  import type { SMUIComponent } from '@smui/common';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    ActionArray,
  } from '@smui/common/internal';
  import Main from '@smui/common/Main.svelte';

  import type TopAppBar from './TopAppBar.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let topAppBar: TopAppBar;

  let element: SMUIComponent;

  export let component = Main;

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

  export function getElement() {
    return element.getElement();
  }
</script>
