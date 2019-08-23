<label
  use:useActions={use}
  use:forwardEvents
  class="mdc-list-item__text {className}"
  {...forProp}
  {...exclude($$props, ['use', 'class'])}
><slot></slot></label>

<script>
  import {getContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@svelte-material-ui/common/forwardEvents.js';
  import {exclude} from '@svelte-material-ui/common/exclude.js';
  import {useActions} from '@svelte-material-ui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};

  let inputProps = getContext('SMUI:generic:input:props') || {};

  $: forProp = (inputProps && inputProps.id || forId) ? {for: inputProps && inputProps.id || forId} : {};
</script>