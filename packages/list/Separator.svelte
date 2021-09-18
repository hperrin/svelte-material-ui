<svelte:component
  this={component}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class={classMap({
    [className]: true,
    'mdc-deprecated-list-divider': true,
    'mdc-deprecated-list-divider--padded': padded,
    'mdc-deprecated-list-divider--inset': inset,
    'mdc-deprecated-list-divider--inset-leading': insetLeading,
    'mdc-deprecated-list-divider--inset-trailing': insetTrailing,
    'mdc-deprecated-list-divider--inset-padding': insetPadding,
  })}
  role="separator"
  {...$$restProps}
/>

<script lang="ts">
  import { getContext } from 'svelte';
  import { get_current_component, SvelteComponentDev } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    ActionArray,
  } from '@smui/common/internal/index.js';
  import { Li, Hr } from '@smui/common/elements/index.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let padded = false;
  export let inset = false;
  export let insetLeading = false;
  export let insetTrailing = false;
  export let insetPadding = false;

  let element: SvelteComponentDev;
  let nav = getContext<boolean | undefined>('SMUI:list:item:nav');
  let context = getContext<string | undefined>('SMUI:separator:context');

  export let component: typeof SvelteComponentDev =
    nav || context !== 'list' ? Hr : Li;

  export function getElement(): Element {
    return element.getElement();
  }
</script>
