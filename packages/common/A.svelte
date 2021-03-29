<a
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {href}
  {...exclude($$props, ['element', 'use', 'forwardEvents', 'href'])}><slot /></a
>

<script>
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder, exclude, useActions } from './internal.js';

  export let href = 'javascript:void(0);';
  export let element = null;
  export let use = [];
  let forwardEventsAdditional = [];
  export { forwardEventsAdditional as forwardEvents };

  const forwardEvents = forwardEventsBuilder(
    get_current_component(),
    forwardEventsAdditional
  );
</script>
