{#if $filter}
  <Checkmark />
{/if}
<span use:useActions={use} use:forwardEvents role="gridcell">
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
  import { onMount, getContext, createEventDispatcher } from 'svelte';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';
  import Checkmark from './Checkmark.svelte';

  const forwardEvents = forwardEventsBuilder(createEventDispatcher());

  export let use = [];
  let className = '';
  export { className as class };
  export let tabindex = null;

  const initialTabindex = getContext('SMUI:chip:initialTabindex');
  const choice = getContext('SMUI:chip:choice');
  const filter = getContext('SMUI:chip:filter');
  const isSelected = getContext('SMUI:chip:isSelected');

  let text;

  onMount(() => {
    text.setAttribute(
      'tabindex',
      tabindex == null ? $initialTabindex : tabindex
    );
  });
</script>
