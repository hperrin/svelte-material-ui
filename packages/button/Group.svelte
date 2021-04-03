<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="smui-button__group {className} {variant === 'raised'
    ? 'smui-button__group--raised'
    : ''}"
  {...exclude($$props, ['use', 'class', 'variant'])}
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
  export let variant = 'text';

  let element;

  export function getElement() {
    return element;
  }
</script>
