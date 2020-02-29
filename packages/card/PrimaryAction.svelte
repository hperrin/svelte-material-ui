<div
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-card__primary-action
    {className}
    {padded ? 'smui-card__primary-action--padded' : ''}
  "
  use:Ripple={{ripple, unbounded: false, color}}
  {tabindex}
  {...exclude($$props, ['use', 'class', 'ripple', 'color', 'padded', 'tabindex'])}
><slot></slot></div>

<script>
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
  export let color = null;
  export let padded = false;
  export let tabindex = '0';
</script>
