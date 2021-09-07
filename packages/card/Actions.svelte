<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-card__actions': true,
    'mdc-card__actions--full-bleed': fullBleed,
  })}
  {...$$restProps}
>
  <slot />
</div>

<script>
  import { setContext } from 'svelte';
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
  export let fullBleed = false;

  let element;

  setContext('SMUI:button:context', 'card:action');
  setContext('SMUI:icon-button:context', 'card:action');

  export function getElement() {
    return element;
  }
</script>
