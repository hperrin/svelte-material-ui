{#if header}
  <th
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class={classMap({
      [className]: true,
      'mdc-data-table__header-cell': true,
      'mdc-data-table__header-cell--checkbox': checkbox,
    })}
    {...roleProp}
    {...scopeProp}
    {...props}><slot /></th
  >
{:else}
  <td
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class={classMap({
      [className]: true,
      'mdc-data-table__cell': true,
      'mdc-data-table__cell--numeric': numeric,
      'mdc-data-table__cell--checkbox': checkbox,
    })}
    {...roleProp}
    {...scopeProp}
    {...props}><slot /></td
  >
{/if}

<script>
  import { getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  let header = getContext('SMUI:data-table:row:header');

  export let use = [];
  let className = '';
  export { className as class };
  export let role = header ? 'columnheader' : undefined;
  export let scope = header ? 'col' : undefined;
  export let numeric = false;
  export let checkbox = false;

  let element;

  $: props = exclude($$props, ['use', 'class', 'numeric', 'checkbox']);

  $: roleProp = role ? { role } : {};
  $: scopeProp = scope ? { scope } : {};

  export function getElement() {
    return element;
  }
</script>
