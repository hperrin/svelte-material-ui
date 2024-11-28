<svelte:options runes />

{@render children?.()}

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onDestroy, setContext } from 'svelte';
  import { writable } from 'svelte/store';

  let {
    key,
    value,
    children,
  }: {
    key: string;
    value: any;
    children?: Snippet;
  } = $props();

  const storeValue = writable(value);
  setContext(key, storeValue);

  $effect(() => {
    $storeValue = value;
  });

  onDestroy(() => {
    storeValue.set(undefined);
  });
</script>
