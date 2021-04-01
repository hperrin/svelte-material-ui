<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-card__media
    {className}
    {aspectRatio === 'square'
    ? 'mdc-card__media--square'
    : ''}
    {aspectRatio === '16x9' ? 'mdc-card__media--16-9' : ''}
  "
  {...exclude($$props, ['use', 'class', 'aspectRatio'])}
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
  export let aspectRatio = null;

  let element;

  export function getElement() {
    return element;
  }
</script>
