<button
  use:useActions={use}
  use:forwardEvents
  class="mdc-button {className}"
  class:mdc-button--raised={raised}
  class:mdc-button--unelevated={unelevated}
  class:mdc-button--outlined={outlined}
  class:mdc-button--dense={dense}
  use:Ripple={[ripple, false]}
  {...exclude($$props, ['use', 'class', 'ripple', 'raised', 'unelevated', 'outlined', 'dense'])}
><slot></slot></button>

<script context="module">
  import Label from '../common/Label';
  import Icon from '../common/Icon';

  export {Label, Icon};
</script>

<script>
  import {setContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';
  import Ripple from '../ripple';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let ripple = true;
  export let raised = false;
  export let unelevated = false;
  export let outlined = false;
  export let dense = false;

  setContext('SMUI:labelContext', 'button');
  setContext('SMUI:iconContext', 'button');
</script>

<style lang="scss" global>
  @import "@material/button/mdc-button";
</style>