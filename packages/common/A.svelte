<a
  use:useActions={use}
  use:forwardEvents
  {href}
  {...exclude($$props, ['use', 'href'])}
><slot></slot></a>

<script>
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@svelte-material-ui/common/forwardEvents.js';
  import {exclude} from '@svelte-material-ui/common/exclude.js';
  import {useActions} from '@svelte-material-ui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  export let href = 'javascript:void(0);';
</script>