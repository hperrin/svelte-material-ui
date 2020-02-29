<p
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-select-helper-text
    {className}
    {persistent ? 'mdc-select-helper-text--persistent' : ''}
    {validationMsg ? 'mdc-select-helper-text--validation-msg' : ''}
  "
  aria-hidden="true"
  {...exclude($$props, ['use', 'class', 'persistent', 'validationMsg'])}
><slot></slot></p>

<script>
  import {MDCSelectHelperText} from '@material/select/helper-text';
  import {onMount, onDestroy} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export {className as class};
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
