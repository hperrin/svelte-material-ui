<slot use={[...use, forwardEvents]} />

<script lang="ts">
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import { forwardEventsBuilder } from '@smui/common/internal';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use: ActionArray = [];
</script>
