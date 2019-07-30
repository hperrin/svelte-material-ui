{#if wrapper || !wrapped}
  <label
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="{className}"
    class:mdc-floating-label={!wrapper}
    class:mdc-text-field={wrapper}
    for={!wrapped && !wrapper && incoming && incoming.id}
    {...exclude($$props, ['use', 'class', 'wrapper', 'wrapped'])}
  ><slot></slot></label>
{:else}
  <span
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-floating-label {className}"
    {...exclude($$props, ['use', 'class', 'wrapper', 'wrapped'])}
  ><slot></slot></span>
{/if}

<script>
  import {MDCFloatingLabel} from '@material/floating-label';
  import {onMount, onDestroy, getContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let wrapper = false;
  export let wrapped = false;

  let element;
  let floatingLabel;
  let incoming = getContext('SMUI:formField:props') || {};

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

<style lang="scss" global>
  @import "@material/floating-label/mdc-floating-label";
</style>