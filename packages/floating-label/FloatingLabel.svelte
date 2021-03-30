{#if wrapped}
  <span
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-floating-label
      {className}
      {floatAbove
      ? 'mdc-floating-label--float-above'
      : ''}
    "
    {...exclude($$props, ['use', 'class', 'floatAbove', 'wrapped'])}
    ><slot /></span
  >
{:else}
  <label
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-floating-label
      {className}
      {floatAbove
      ? 'mdc-floating-label--float-above'
      : ''}
    "
    {...forId || (inputProps && inputProps.id)
      ? { for: forId || (inputProps && inputProps.id) }
      : {}}
    {...exclude($$props, ['use', 'class', 'for', 'floatAbove', 'wrapped'])}
    ><slot /></label
  >
{/if}

<script>
  import { MDCFloatingLabel } from '@material/floating-label';
  import { onMount, onDestroy, getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  let forId = '';
  export { forId as for };
  export let floatAbove = false;
  export let wrapped = false;

  let element;
  let floatingLabel;
  let inputProps = getContext('SMUI:generic:input:props') || {};

  onMount(() => {
    floatingLabel = new MDCFloatingLabel(element);
  });

  onDestroy(() => {
    floatingLabel && floatingLabel.destroy();
  });

  export function shake(shouldShake, ...args) {
    return floatingLabel.shake(shouldShake, ...args);
  }

  export function float(shouldFloat, ...args) {
    return floatingLabel.float(shouldFloat, ...args);
  }

  export function getWidth(...args) {
    return floatingLabel.getWidth(...args);
  }
</script>
