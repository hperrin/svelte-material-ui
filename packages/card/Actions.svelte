<div
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-card__actions
    {className}
    {fullBleed ? 'mdc-card__actions--full-bleed' : ''}
  "
  {...exclude($$props, ['use', 'class', 'fullBleed'])}
><slot></slot></div>

<script>
  import {setContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export {className as class};
  export let fullBleed = false;

  setContext('SMUI:button:context', 'card:action');
  setContext('SMUI:icon-button:context', 'card:action');
</script>
