<ul
  use:useActions={use}
  use:forwardEvents
  class="mdc-image-list {className}"
  class:mdc-image-list--masonry={masonry}
  class:mdc-image-list--with-text-protection={withTextProtection}
  {...exclude($$props, ['use', 'class', 'masonry', 'withTextProtection'])}
><slot></slot></ul>

<script>
  import {setContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let masonry = false;
  export let withTextProtection = false;

  setContext('SMUI:label:context', 'image-list');
</script>