<div
  use:useActions={use}
  use:forwardEvents
  class="
    smui-paper
    {className}
    {elevation !== 0
    ? 'mdc-elevation--z' + elevation
    : ''}
    {!square ? 'smui-paper--rounded' : ''}
    {color === 'primary'
    ? 'smui-paper--color-primary'
    : ''}
    {color === 'secondary'
    ? 'smui-paper--color-secondary'
    : ''}
    {transition ? 'mdc-elevation-transition' : ''}
  "
  {...exclude($$props, ['use', 'class', 'square', 'color', 'transition'])}
>
  <slot />
</div>

<script>
  import { createEventDispatcher } from 'svelte';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(createEventDispatcher());

  export let use = [];
  let className = '';
  export { className as class };
  export let square = false;
  export let color = 'default';
  export let elevation = 1;
  export let transition = false;
</script>
