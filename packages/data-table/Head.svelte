<thead
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {...exclude($$props, ['use'])}><slot /></thead
>

<script>
  import { setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];

  let element;

  setContext('SMUI:data-table:row:header', true);

  export function getElement() {
    return element;
  }
</script>
