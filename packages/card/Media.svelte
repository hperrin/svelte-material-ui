<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-card__media': true,
    'mdc-card__media--square': aspectRatio === 'square',
    'mdc-card__media--16-9': aspectRatio === '16x9',
  })}
  {...$$restProps}
>
  <slot />
</div>

<script>
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
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
