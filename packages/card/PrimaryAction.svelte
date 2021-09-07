<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  use:Ripple={{
    ripple,
    unbounded: false,
    color,
    addClass,
    removeClass,
    addStyle,
  }}
  class={classMap({
    [className]: true,
    'mdc-card__primary-action': true,
    'smui-card__primary-action--padded': padded,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  {tabindex}
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
  import Ripple from '@smui/ripple';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let ripple = true;
  export let color = null;
  export let padded = false;
  export let tabindex = '0';

  let element;
  let internalClasses = {};
  let internalStyles = {};

  function addClass(className) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }

  export function getElement() {
    return element;
  }
</script>
