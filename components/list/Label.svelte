<label
  use:useActions={use}
  use:forwardEvents
  class="mdc-list-item__text {className}"
  for={incoming && incoming.id}
  {...exclude($$props, ['use', 'class'])}
><slot></slot></label>

<script>
  import {getContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};

  let incoming = getContext('SMUI:formField:props') || {};
</script>