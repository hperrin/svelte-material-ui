<div
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-card
    {className}
    {variant === 'outlined'
    ? 'mdc-card--outlined'
    : ''}
    {padded ? 'smui-card--padded' : ''}
  "
  {...exclude($$props, ['use', 'class', 'variant', 'padded'])}
>
  <slot />
</div>

<script>
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let variant = 'raised';
  export let padded = false;
</script>
