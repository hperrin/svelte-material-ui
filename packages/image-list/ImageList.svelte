<ul
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-image-list': true,
    'mdc-image-list--masonry': masonry,
    'mdc-image-list--with-text-protection': withTextProtection,
  })}
  {...exclude($$props, ['use', 'class', 'masonry', 'withTextProtection'])}
>
  <slot />
</ul>

<script>
  import { setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let masonry = false;
  export let withTextProtection = false;

  let element;

  setContext('SMUI:label:context', 'image-list');

  export function getElement() {
    return element;
  }
</script>
