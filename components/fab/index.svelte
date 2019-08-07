<button
  use:useActions={use}
  use:forwardEvents
  class="mdc-fab {className}"
  class:mdc-fab--mini={mini}
  class:mdc-fab--exited={exited}
  class:mdc-fab--extended={extended}
  use:Ripple={[ripple, {unbounded: false, color}]}
  {...exclude($$props, ['use', 'class', 'ripple', 'color', 'mini', 'exited', 'extended'])}
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
  export let color = null;
  export let mini = false;
  export let exited = false;
  export let extended = false;

  setContext('SMUI:labelContext', 'fab');
  setContext('SMUI:iconContext', 'fab');
</script>

<style lang="scss" global>
  @import "smui-theme";
  @import "@material/fab/mdc-fab";
</style>