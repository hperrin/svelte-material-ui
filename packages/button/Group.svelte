<div
  use:useActions={use}
  use:forwardEvents
  class="
    smui-button__group
    {className}
    {variant === 'raised'
    ? 'smui-button__group--raised'
    : ''}
  "
  {...exclude($$props, ['use', 'class', 'variant'])}
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
  export let variant = 'text';
</script>
