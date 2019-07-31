<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-text-field-helper-text {className}"
  class:mdc-text-field-helper-text--persistent={persistent}
  class:mdc-text-field-helper-text--validation-msg={validationMsg}
  aria-hidden="true"
  {...exclude($$props, ['use', 'class', 'persistent', 'validationMsg'])}
><slot></slot></div>

<script>
  import {MDCTextFieldHelperText} from '@material/textfield/helper-text';
  import {onMount, onDestroy} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let persistent = false;
  export let validationMsg = false;

  let element;
  let helperText;

  onMount(() => {
    helperText = new MDCTextFieldHelperText(element);
  });

  onDestroy(() => {
    helperText.destroy();
  });
</script>

<style lang="scss" global>
  @import "@material/textfield/helper-text/mdc-text-field-helper-text";
</style>