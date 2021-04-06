<p
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-select-helper-text': true,
    'mdc-select-helper-text--persistent': persistent,
    'mdc-select-helper-text--validation-msg': validationMsg,
  })}
  aria-hidden="true"
  {...exclude($$props, ['use', 'class', 'persistent', 'validationMsg'])}
>
  <slot />
</p>

<script>
  import { MDCSelectHelperText } from '@material/select/helper-text';
  import { onMount, onDestroy } from 'svelte';
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
