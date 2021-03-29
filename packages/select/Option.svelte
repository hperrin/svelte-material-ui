<Item
  bind:this={element}
  use={[forwardEvents, ...use]}
  data-value={value}
  {selected}
  {...exclude($$props, ['use', 'value', 'selected'])}><slot /></Item
>

<script>
  import { getContext, setContext, createEventDispatcher } from 'svelte';
  import { forwardEventsBuilder, exclude } from '@smui/common/internal.js';
  import Item from '@smui/list/Item.svelte';

  const forwardEvents = forwardEventsBuilder(createEventDispatcher());
  const uninitializedValue = () => {};

  const valueStore = getContext('SMUI:select:value');

  export let use = [];
  const className = '';
  export { className as class };
  export let value = '';
  let selectedProp = uninitializedValue;
  export { selectedProp as selected };

  let element;
  const selectedText = getContext('SMUI:select:selectedText');

  setContext('SMUI:list:item:role', 'option');

  $: selected =
    selectedProp === uninitializedValue
      ? value !== '' && $valueStore === value
      : selectedProp;

  $: if (selected && element) {
    $selectedText = element.textContent || '';
  }
</script>
