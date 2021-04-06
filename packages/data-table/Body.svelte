<tbody
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-data-table__content': true,
  })}
  {...exclude($$props, ['use', 'class'])}><slot /></tbody
>

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

  let element;

  setContext('SMUI:data-table:row:header', false);

  export function getElement() {
    return element;
  }
</script>
