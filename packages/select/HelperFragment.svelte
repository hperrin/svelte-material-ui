<slot use={[...use, forwardEvents]} />

<script lang="ts">
  import { get_current_component } from 'svelte/internal';
  import {
    ActionArray,
    forwardEventsBuilder,
  } from '@smui/common/internal/index.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use: ActionArray = [];
</script>
