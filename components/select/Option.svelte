{#if enhanced}
  <Item
    use={[forwardEvents, ...use]}
    data-value={value}
    {selected}
    {...exclude($$props, ['use', 'value', 'selected'])}
  ><slot></slot></Item>
{:else}
  <option
    use:useActions={use}
    use:forwardEvents
    {value}
    {selected}
    {...exclude($$props, ['use', 'value', 'selected'])}
  ><slot></slot></option>
{/if}

<script>
  import {getContext, setContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {Item} from '../list';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let value = '';
  export let selected = false;

  let element;
  let enhanced = getContext('SMUI:select:option:enhanced');

  setContext('SMUI:list:item:role', 'option');
</script>