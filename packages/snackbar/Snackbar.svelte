<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-snackbar
    {className}
    {variant === 'stacked' ? 'mdc-snackbar--stacked' : ''}
    {leading ? 'mdc-snackbar--leading' : ''}
  "
  on:MDCSnackbar:closed={handleClosed}
  {...exclude($$props, ['use', 'class', 'variant', 'leading', 'surface$'])}
>
  <div
    use:useActions={surface$use}
    class="mdc-snackbar__surface {surface$class}"
    {...prefixFilter($$props, 'surface$')}
  ><slot></slot></div>
</div>

<script context="module">
  let waiting = Promise.resolve();
</script>

<script>
  import {MDCSnackbar} from '@material/snackbar';
  import {onMount, onDestroy, setContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {prefixFilter} from '@smui/common/prefixFilter.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component(), ['MDCSnackbar:opening', 'MDCSnackbar:opened', 'MDCSnackbar:closing', 'MDCSnackbar:closed']);
  const uninitializedValue = () => {};

  export let use = [];
  let className = '';
  export {className as class};
  export let variant = '';
  export let leading = false;
  export let timeoutMs = 5000;
  export let closeOnEscape = true;
  export let labelText = uninitializedValue;
  export let actionButtonText = uninitializedValue;
  export let surface$class = '';
  export let surface$use = [];

  let element;
  let snackbar;
  let closeResolve;
  let closePromise = new Promise(resolve => closeResolve = resolve);

  setContext('SMUI:button:context', 'snackbar');
  setContext('SMUI:icon-button:context', 'snackbar');
  setContext('SMUI:label:context', 'snackbar');

  $: if (snackbar && snackbar.timeoutMs !== timeoutMs) {
    snackbar.timeoutMs = timeoutMs;
  }

  $: if (snackbar && snackbar.closeOnEscape !== closeOnEscape) {
    snackbar.closeOnEscape = closeOnEscape;
  }

  $: if (snackbar && labelText !== uninitializedValue && snackbar.labelText !== labelText) {
    snackbar.labelText = labelText;
  }

  $: if (snackbar && actionButtonText !== uninitializedValue && snackbar.actionButtonText !== actionButtonText) {
    snackbar.actionButtonText = actionButtonText;
  }

  onMount(() => {
    snackbar = new MDCSnackbar(element);
  });

  onDestroy(() => {
    snackbar && snackbar.destroy();
  });

  function handleClosed() {
    closeResolve();
    closePromise = new Promise(resolve => closeResolve = resolve);
  }

  export function open(...args) {
    waiting = waiting.then(() => {
      snackbar.open(...args);
      return closePromise;
    });
  }

  export function forceOpen(...args) {
    return snackbar.open(...args);
  }

  export function close(...args) {
    return snackbar.close(...args);
  }

  export function isOpen() {
    return snackbar.isOpen;
  }
</script>
