<slot></slot>

<script>
  import {onDestroy, setContext} from 'svelte';
  import {writable} from 'svelte/store';

  export let key;
  export let value;

  const storeValue = writable(value);
  setContext(key, storeValue);

  $: $storeValue = value;

  onDestroy(() => {
    storeValue.set(undefined);
  });
</script>