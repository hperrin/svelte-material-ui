{#if enhanced}
  <Item
    use={[forwardEvents, ...use]}
    data-value={value}
    {selected}
    {...props}
  ><slot></slot></Item>
{:else}
  <option
    use:useActions={use}
    use:forwardEvents
    {value}
    {...selectedProp}
    {...props}
  ><slot></slot></option>
{/if}

<script>
  import {getContext, setContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';
  import Item from '@smui/list/Item.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  const className = '';
  export {className as class};
  export let value = '';
  export let selected = false;

  $: props = exclude($$props, ['use', 'value', 'selected']);

  let element;
  let enhanced = getContext('SMUI:select:option:enhanced');

  setContext('SMUI:list:item:role', 'option');

  $: selectedProp = !enhanced && selected ? {selected: true} : {};
</script>
