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

<script>
  import {setContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';
  import Ripple from '../ripple/index.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let ripple = true;
  export let color = null;
  export let mini = false;
  export let exited = false;
  export let extended = false;

  setContext('SMUI:label:context', 'fab');
  setContext('SMUI:icon:context', 'fab');
</script>