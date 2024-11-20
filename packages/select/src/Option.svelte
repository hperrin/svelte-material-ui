<svelte:options runes={false} />

<Item
  bind:this={element}
  {use}
  data-value={value}
  {value}
  {selected}
  {...$$restProps}><slot /></Item
>

<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import type { ActionArray } from '@smui/common/internal';
  import { Item } from '@smui/list';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    value?: any;
  };
  type $$Props = OwnProps & Omit<ComponentProps<typeof Item>, keyof OwnProps>;

  export let use: ActionArray = [];
  const className = '';
  export { className as class };
  export let value: any = '';

  let element: Item;
  const selectedText = getContext<Writable<string>>('SMUI:select:selectedText');
  const selectedValue = getContext<SvelteStore<any>>('SMUI:select:value');

  setContext('SMUI:list:item:role', 'option');

  $: selected = value != null && value !== '' && $selectedValue === value;

  onMount(setSelectedText);

  onDestroy(setSelectedText);

  function setSelectedText() {
    if (selected && element) {
      $selectedText = element.getPrimaryText();
    }
  }

  export function getElement() {
    return element.getElement();
  }
</script>
