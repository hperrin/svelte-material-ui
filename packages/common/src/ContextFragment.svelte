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

  // svelte-ignore state_referenced_locally
  const storeValue = writable(value);
  // svelte-ignore state_referenced_locally
  setContext(key, storeValue);

  $effect(() => {
    $storeValue = value;
  });

  onDestroy(() => {
    storeValue.set(undefined);
  });
</script>
