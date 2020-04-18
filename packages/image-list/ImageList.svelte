<ul
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-image-list
    {className}
    {masonry ? 'mdc-image-list--masonry' : ''}
    {withTextProtection ? 'mdc-image-list--with-text-protection' : ''}
  "
  {...exclude($$props, ['use', 'class', 'masonry', 'withTextProtection'])}
><slot></slot></ul>

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
  export let masonry = false;
  export let withTextProtection = false;

  setContext('SMUI:label:context', 'image-list');
</script>
