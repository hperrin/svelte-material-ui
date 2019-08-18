<div
  use:useActions={use}
  use:forwardEvents
  class="mdc-card {className}"
  class:mdc-card--outlined={variant === 'outlined'}
  class:smui-card--padded={padded}
  {...exclude($$props, ['use', 'class', 'variant', 'padded'])}
><slot></slot></div>

<script>
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let variant = '';
  export let padded = false;
</script>