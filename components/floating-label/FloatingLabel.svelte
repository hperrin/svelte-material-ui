{#if wrapped}
  <span
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-floating-label {className}"
    {...exclude($$props, ['use', 'class', 'for', 'wrapped'])}
  ><slot></slot></span>
{:else}
  <label
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-floating-label {className}"
    {...forProp}
    {...exclude($$props, ['use', 'class', 'for', 'wrapped'])}
  ><slot></slot></label>
{/if}

<script>
  import {MDCFloatingLabel} from '@material/floating-label';
  import {onMount, onDestroy, getContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  let forId = '';
  export {forId as for};
  export let wrapped = false;

  let element;
  let floatingLabel;
  let incoming = getContext('SMUI:form-field:props') || {};

  $: forProp = (incoming && incoming.id || forId) ? {for: incoming && incoming.id || forId} : {};

  onMount(() => {
    floatingLabel = new MDCFloatingLabel(element);
  });

  onDestroy(() => {
    floatingLabel.destroy();
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