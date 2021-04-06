<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-notched-outline': true,
    'mdc-notched-outline--notched': notched,
    'mdc-notched-outline--no-label': noLabel,
  })}
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
  import { onMount, onDestroy } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

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

  export function getElement() {
    return element;
  }
</script>
