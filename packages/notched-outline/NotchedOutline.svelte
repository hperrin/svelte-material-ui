<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-notched-outline
    {className}
    {notched
    ? 'mdc-notched-outline--notched'
    : ''}
    {noLabel ? 'mdc-notched-outline--no-label' : ''}
  "
  {...exclude($$props, ['use', 'class', 'notched', 'noLabel'])}
>
  <div class="mdc-notched-outline__leading" />
  {#if !noLabel}
    <div class="mdc-notched-outline__notch"><slot /></div>
  {/if}
  <div class="mdc-notched-outline__trailing" />
</div>

<script>
  import { MDCNotchedOutline } from '@material/notched-outline';
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(createEventDispatcher());

  export let use = [];
  let className = '';
  export { className as class };
  export let notched = false;
  export let noLabel = false;

  let element;
  let notchedOutline;

  onMount(() => {
    notchedOutline = new MDCNotchedOutline(element);
  });

  onDestroy(() => {
    notchedOutline && notchedOutline.destroy();
  });

  export function notch(notchWidth, ...args) {
    return notchedOutline.notch(notchWidth, ...args);
  }

  export function closeNotch(...args) {
    return notchedOutline.closeNotch(...args);
  }
</script>
