{#if $filter}
  <Checkmark bind:this={input} />
{/if}
<span
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  role="gridcell"
>
  <span
    class="
      {className}
      mdc-chip__text
      mdc-chip__primary-action
    "
    bind:this={text}
    role={$filter ? 'checkbox' : $choice ? 'radio' : 'button'}
    {...$filter || $choice
      ? { 'aria-selected': $isSelected ? 'true' : 'false' }
      : {}}
    {...exclude($$props, ['use', 'class', 'tabindex'])}><slot /></span
  >
</span>

<script>
  import { onMount, getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';
  import Checkmark from './Checkmark.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let tabindex = null;

  let element;
  let input;
  let text;

  const initialTabindex = getContext('SMUI:chip:initialTabindex');
  const choice = getContext('SMUI:chip:choice');
  const filter = getContext('SMUI:chip:filter');
  const isSelected = getContext('SMUI:chip:isSelected');

  onMount(() => {
    text.setAttribute(
      'tabindex',
      tabindex == null ? $initialTabindex : tabindex
    );
  });

  export function getInput() {
    return input && input.getElement();
  }

  export function getElement() {
    return element;
  }
</script>
