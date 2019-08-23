
<img
  use:useActions={use}
  use:forwardEvents
  {alt}
  {...exclude($$props, ['use', 'alt'])}
/>

<script>
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@svelte-material-ui/common/forwardEvents.js';
  import {exclude} from '@svelte-material-ui/common/exclude.js';
  import {useActions} from '@svelte-material-ui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  export let alt = '';
</script>