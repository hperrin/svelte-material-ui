<Item
  bind:this={element}
  use={usePass}
  data-value={value}
  {value}
  {selected}
  {...$$restProps}><slot /></Item
>

<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { getContext, setContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import { forwardEventsBuilder } from '@smui/common/internal';
  import type { ItemComponentDev } from '@smui/list';
  import { Item } from '@smui/list';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use: ActionArray = [];
  $: usePass = [forwardEvents, ...use] as ActionArray;
  const className = '';
  export { className as class };
  export let value: any = '';

  let element: ItemComponentDev;
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

  export function getElement(): Element {
    return element.getElement();
  }
</script>
