<div
  use:useActions={use}
  use:forwardEvents
  class="mdc-list-group {className}"
  {...exclude($$props, ['use', 'class'])}
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
</script>