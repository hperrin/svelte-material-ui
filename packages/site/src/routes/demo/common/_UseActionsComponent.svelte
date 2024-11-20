<div class="target" use:useActions={use}>
  <span style="user-select: none;">
    {#if children}{@render children()}{/if}
  </span>
</div>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ActionArray } from '@smui/common/internal';
  import { useActions } from '@smui/common/internal';

  let { use = [], children }: { use: ActionArray; children?: Snippet } =
    $props();
</script>

<style>
  .target {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1em;
    position: relative;
    text-align: center;
    width: 120px;
    height: 120px;
    transform: translate3d(0, 0, 0);
    z-index: 0;
    background-color: var(--mdc-theme-primary);
    color: var(--mdc-theme-on-primary);
  }
</style>
