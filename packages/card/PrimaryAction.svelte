<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  use:Ripple={{ ripple, unbounded: false, color }}
  class={classMap({
    [className]: true,
    'mdc-card__primary-action': true,
    'smui-card__primary-action--padded': padded,
  })}
  {tabindex}
  {...exclude($$props, [
    'use',
    'class',
    'ripple',
    'color',
    'padded',
    'tabindex',
  ])}
>
  <slot />
</div>

<script>
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    useActions,
  } from '@smui/common/internal.js';
  import Ripple from '@smui/ripple/bare.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let ripple = true;
  export let color = null;
  export let padded = false;
  export let tabindex = '0';

  let element;

  export function getElement() {
    return element;
  }
</script>
