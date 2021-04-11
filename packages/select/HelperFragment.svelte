<slot use={[...use, forwardEvents]} />

<script>
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component(), [
    'SMUI:select:helper-text:id',
    'SMUI:select:helper-text:mount',
    'SMUI:select:helper-text:unmount',
  ]);

  export let use = [];
</script>
