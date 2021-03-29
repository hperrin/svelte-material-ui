<svelte:component
  this={component}
  bind:element
  use={[forwardEvents, ...use]}
  forwardEvents={forwardedEvents}
  class="
    mdc-chip
    {className}
    {selected
    ? 'mdc-chip--selected'
    : ''}
    {touch ? 'mdc-chip--touch' : ''}
  "
  role="row"
  on:MDCChip:selection={handleSelection}
  {...exclude($$props, [
    'use',
    'class',
    'component',
    'ripple',
    'touch',
    'selected',
    'shouldRemoveOnTrailingIconClick',
  ])}
>
  {#if ripple}
    <div class="mdc-chip__ripple" />
  {/if}
  <slot />
  {#if touch}
    <div class="mdc-chip__touch" />
  {/if}
</svelte:component>

<script>
  import { MDCChip } from '@material/chips';
  import {
    onMount,
    setContext,
    getContext,
    createEventDispatcher,
  } from 'svelte';
  import { writable } from 'svelte/store';
  import { forwardEventsBuilder, exclude } from '@smui/common/internal.js';
  import Div from '@smui/common/Div.svelte';

  const forwardedEvents = [
    'MDCChip:interaction',
    'MDCChip:selection',
    'MDCChip:removal',
    'MDCChip:trailingIconInteraction',
    'MDCChip:navigation',
  ];
  const forwardEvents = forwardEventsBuilder(
    createEventDispatcher(),
    forwardedEvents
  );

  export let use = [];
  let className = '';
  export { className as class };
  export let component = Div;
  export let ripple = true;
  export let touch = false;
  export let selected = false;
  export let shouldRemoveOnTrailingIconClick = true;

  const shouldRemoveOnTrailingIconClickStore = writable(
    shouldRemoveOnTrailingIconClick
  );
  $: $shouldRemoveOnTrailingIconClickStore = shouldRemoveOnTrailingIconClick;
  setContext(
    'SMUI:chip:shouldRemoveOnTrailingIconClick',
    shouldRemoveOnTrailingIconClickStore
  );
  const isSelectedStore = writable(selected);
  $: $isSelectedStore = selected;
  setContext('SMUI:chip:isSelected', isSelectedStore);

  let element;
  let chip;

  const selectedStore = getContext('SMUI:chip:selected');
  let previousSelected = selected;
  $: if (chip && ($selectedStore || previousSelected !== selected)) {
    if (selected !== chip.selected) {
      if (previousSelected !== selected) {
        // Update MDC on Svelte selected change.
        chip.selected = selected;
      } else {
        // Update selected on MDC selection change.
        selected = chip.selected;
      }
    }
    previousSelected = selected;
  }

  $: if (
    chip &&
    chip.shouldRemoveOnTrailingIconClick !== shouldRemoveOnTrailingIconClick
  ) {
    chip.shouldRemoveOnTrailingIconClick = shouldRemoveOnTrailingIconClick;
  }

  onMount(() => {
    element.setChip = setChip;
  });

  function setChip(component) {
    chip = component;
    if (!ripple) {
      chip.ripple && chip.ripple.destroy();
    }
    selected = chip.selected;
  }

  function handleSelection(e) {
    selected = e.detail.selected;
  }
</script>
