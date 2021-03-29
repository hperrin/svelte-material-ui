<i
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-text-field__icon {className}"
  {tabindex}
  aria-hidden={tabindex === '-1' ? 'true' : 'false'}
  {...exclude($$props, ['use', 'class', 'tabindex'])}><slot /></i
>

<script>
  import { MDCTextFieldIcon } from '@material/textfield/icon';
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
  export let role = undefined; // Intentionally left out of exclude call above.
  export let tabindex = role !== undefined ? '0' : '-1';

  let element;
  let icon;

  onMount(() => {
    icon = new MDCTextFieldIcon(element);
  });

  onDestroy(() => {
    icon && icon.destroy();
  });
</script>
