{#if $filter}
  <Checkmark bind:this={input} />
{/if}
<span
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  role="gridcell"
>
  {#if $nonInteractive}
    <span class="mdc-chip__text"><slot /></span>
  {:else}
    <span
      bind:this={primaryAction}
      class={classMap({
        [className]: true,
        'mdc-chip__primary-action': true,
      })}
      role={$filter ? 'checkbox' : $choice ? 'radio' : 'button'}
      {...$filter || $choice
        ? { 'aria-selected': $isSelected ? 'true' : 'false' }
        : {}}
      {tabindex}
      {...internalAttrs}
      {...$$restProps}><span class="mdc-chip__text"><slot /></span></span
    >
  {/if}
</span>

<script>
  import { onMount, getContext, tick } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';
  import Checkmark from './Checkmark.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let tabindex = getContext('SMUI:chip:focusable') ? '0' : '-1';

  let element;
  let input;
  let primaryAction;
  let internalAttrs = {};

  const nonInteractive = getContext('SMUI:chip:nonInteractive');
  const choice = getContext('SMUI:chip:choice');
  const filter = getContext('SMUI:chip:filter');
  const isSelected = getContext('SMUI:chip:isSelected');

  onMount(() => {
    let accessor = {
      focus,
      addAttr,
    };

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

  function waitForTabindex(fn) {
    if (internalAttrs['tabindex'] !== element.getAttribute('tabindex')) {
      tick().then(fn);
    } else {
      fn();
    }
  }

  export function focus() {
    // Let the tabindex change propagate.
    waitForTabindex(() => {
      primaryAction && primaryAction.focus();
    });
  }

  export function getInput() {
    return input && input.getElement();
  }

  export function getElement() {
    return element;
  }
</script>
