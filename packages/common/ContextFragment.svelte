<slot />

<script lang="ts">
  import { onDestroy, setContext } from 'svelte';
  import { writable } from 'svelte/store';

  export let key: string;
  export let value: any;

  const storeValue = writable(value);
  setContext(key, storeValue);

  $: $storeValue = value;

  onDestroy(() => {
    storeValue.set(undefined);
  });
</script>
