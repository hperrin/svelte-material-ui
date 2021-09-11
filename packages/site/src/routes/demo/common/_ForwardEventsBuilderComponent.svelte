<div use:forwardEvents tabindex="0">
  <slot />
</div>

<script lang="ts">
  import { forwardEventsBuilder } from '@smui/common/internal';
  import { get_current_component } from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(get_current_component());
</script>
