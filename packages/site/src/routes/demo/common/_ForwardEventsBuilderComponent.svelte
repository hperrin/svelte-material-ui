<div use:forwardEvents tabindex="0">
  <slot />
</div>

<script>
  import { forwardEventsBuilder } from '@smui/common/internal.js';
  import { get_current_component } from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(get_current_component());
</script>
