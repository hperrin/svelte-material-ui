<div class="target" use:useActions={use}>
  <span style="user-select: none;">
    <slot />
  </span>
</div>

<script lang="ts">
  import type { ActionArray } from '@smui/common/internal';
  import { useActions } from '@smui/common/internal';

  export let use: ActionArray = [];
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
