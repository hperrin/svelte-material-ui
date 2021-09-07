<Item
  bind:this={element}
  use={[forwardEvents, ...use]}
  data-value={value}
  {value}
  {selected}
  {...$$restProps}><slot /></Item
>

<script>
  import { onMount, onDestroy } from 'svelte';
  import { getContext, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder } from '@smui/common/internal.js';
  import Item from '@smui/list/Item.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  const className = '';
  export { className as class };
  export let value = '';

  let element;
  const selectedText = getContext('SMUI:select:selectedText');
  const selectedValue = getContext('SMUI:select:value');

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
