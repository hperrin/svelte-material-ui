<button
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-fab
    {className}
    {mini ? 'mdc-fab--mini' : ''}
    {exited ? 'mdc-fab--exited' : ''}
    {extended ? 'mdc-fab--extended' : ''}
    {color === 'primary' ? 'smui-fab--color-primary' : ''}
  "
  use:Ripple={{ripple, unbounded: false}}
  {...exclude($$props, ['use', 'class', 'ripple', 'color', 'mini', 'exited', 'extended'])}
><slot></slot></button>

<script>
  import {setContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';
  import Ripple from '@smui/ripple/bare.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export {className as class};
  export let ripple = true;
  export let color = 'secondary';
  export let mini = false;
  export let exited = false;
  export let extended = false;

  setContext('SMUI:label:context', 'fab');
  setContext('SMUI:icon:context', 'fab');
</script>
