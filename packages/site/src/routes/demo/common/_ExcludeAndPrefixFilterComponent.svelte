<div class="my-component {className}" {...exclude(restProps, ['button$'])}>
  <Button class="button {button$class}" {...prefixFilter(restProps, 'button$')}>
    {#if children}{@render children()}{/if}
  </Button>
</div>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { exclude, prefixFilter } from '@smui/common/internal';
  import Button from '@smui/button';

  let {
    class: className = '',
    button$class = '',
    children,
    ...restProps
  }: { class: string; button$class: string; children?: Snippet } = $props();
</script>
