<svelte:options runes={false} />

<slot {use} />

<script lang="ts">
  import type { ActionArray } from '@smui/common/internal';

  export let use: ActionArray = [];
</script>
