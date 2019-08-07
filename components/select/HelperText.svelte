<p
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-select-helper-text {className}"
  class:mdc-select-helper-text--persistent={persistent}
  class:mdc-select-helper-text--validation-msg={validationMsg}
  aria-hidden="true"
  {...exclude($$props, ['use', 'class', 'persistent', 'validationMsg'])}
><slot></slot></p>

<script>
  import {MDCSelectHelperText} from '@material/select/helper-text';
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
    helperText = new MDCSelectHelperText(element);
  });

  onDestroy(() => {
    helperText.destroy();
  });
</script>

<style lang="scss" global>
  @import "smui-theme";
  @import "@material/select/helper-text/mdc-select-helper-text";
</style>