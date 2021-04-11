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
    class={classMap({
      [className]: true,
      'mdc-chip__primary-action': true,
    })}
    role={$filter ? 'checkbox' : $choice ? 'radio' : 'button'}
    {...$filter || $choice
      ? { 'aria-selected': $isSelected ? 'true' : 'false' }
      : {}}
    {...internalAttrs}
    {...$$restProps}><span class="mdc-chip__text"><slot /></span></span
  >
</span>

<script>
  import { onMount, getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';
  import Checkmark from './Checkmark.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component(), [
    'SMUI:chip:primary-action:mount',
    'SMUI:chip:primary-action:unmount',
  ]);

  export let use = [];
  let className = '';
  export { className as class };

  let element;
  let input;
  let internalAttrs = {};
  let accessor = {
    focus,
    addAttr,
  };

  const choice = getContext('SMUI:chip:choice');
  const filter = getContext('SMUI:chip:filter');
  const isSelected = getContext('SMUI:chip:isSelected');

  onMount(() => {
    dispatch(getElement(), 'SMUI:chip:primary-action:mount', accessor);

    return () => {
      dispatch(getElement(), 'SMUI:chip:primary-action:unmount');
    };
  });

  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  export function focus() {
    getElement().focus();
  }

  export function getInput() {
    return input && input.getElement();
  }

  export function getElement() {
    return element;
  }
</script>
