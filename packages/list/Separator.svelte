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

<script>
  import { getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder, classMap } from '@smui/common/internal.js';
  import Li from '@smui/common/Li.svelte';
  import Hr from '@smui/common/Hr.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let padded = false;
  export let inset = false;
  export let insetLeading = false;
  export let insetTrailing = false;
  export let insetPadding = false;

  let element;
  let nav = getContext('SMUI:list:item:nav');
  let context = getContext('SMUI:separator:context');

  export let component = nav || context !== 'list' ? Hr : Li;

  export function getElement() {
    return element.getElement();
  }
</script>
