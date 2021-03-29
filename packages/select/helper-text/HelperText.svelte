<p
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-select-helper-text
    {className}
    {persistent
    ? 'mdc-select-helper-text--persistent'
    : ''}
    {validationMsg ? 'mdc-select-helper-text--validation-msg' : ''}
  "
  aria-hidden="true"
  {...exclude($$props, ['use', 'class', 'persistent', 'validationMsg'])}
>
  <slot />
</p>

<script>
  import { MDCSelectHelperText } from '@material/select/helper-text';
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(createEventDispatcher());

  export let use = [];
  let className = '';
  export { className as class };
  export let persistent = false;
  export let validationMsg = false;

  let element;
  let helperText;

  onMount(() => {
    helperText = new MDCSelectHelperText(element);
  });

  onDestroy(() => {
    helperText && helperText.destroy();
  });
</script>
