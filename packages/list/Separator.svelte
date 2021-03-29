<svelte:component
  this={component}
  use={[forwardEvents, ...use]}
  class="
    mdc-list-divider
    {className}
    {padded
    ? 'mdc-list-divider--padded'
    : ''}
    {inset ? 'mdc-list-divider--inset' : ''}
    {insetLeading
    ? 'mdc-list-divider--inset-leading'
    : ''}
    {insetTrailing
    ? 'mdc-list-divider--inset-trailing'
    : ''}
    {insetPadding ? 'mdc-list-divider--inset-padding' : ''}
    "
  role="separator"
  {...props}
/>

<script>
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder, exclude } from '@smui/common/internal.js';
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

  let nav = getContext('SMUI:list:item:nav');
  let context = getContext('SMUI:separator:context');

  export let component = nav || context !== 'list' ? Hr : Li;

  $: props = exclude($$props, ['use', 'class', 'padded', 'inset']);
</script>
