<div
  use:useActions={use}
  use:forwardEvents
  class="mdc-card__primary-action {className}"
  class:smui-card__primary-action--padded={padded}
  use:Ripple={[ripple, {unbounded: false, color}]}
  {tabindex}
  {...exclude($$props, ['use', 'class', 'ripple', 'color', 'padded', 'tabindex'])}
><slot></slot></div>

<script>
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
  export let padded = false;
  export let tabindex = '0';
</script>