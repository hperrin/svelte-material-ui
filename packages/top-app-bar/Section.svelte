<section
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-top-app-bar__section
    {className}
    {align === 'start' ? 'mdc-top-app-bar__section--align-start' : ''}
    {align === 'end' ? 'mdc-top-app-bar__section--align-end' : ''}
  "
  {...(toolbar ? {role: 'toolbar'} : {})}
  {...exclude($$props, ['use', 'class', 'align', 'toolbar'])}
><slot></slot></section>

<script>
  import {setContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component(), ['MDCList:action']);

  export let use = [];
  let className = '';
  export {className as class};
  export let align = 'start';
  export let toolbar = false;

  setContext('SMUI:icon-button:context', toolbar ? 'top-app-bar:action' : 'top-app-bar:navigation');
  setContext('SMUI:button:context', toolbar ? 'top-app-bar:action' : 'top-app-bar:navigation');
</script>
