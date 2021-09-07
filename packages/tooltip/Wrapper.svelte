{#if rich}
  <div
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class={classMap({
      [className]: true,
      'mdc-tooltip-wrapper--rich': true,
    })}
    {...$$restProps}
  >
    <slot />
  </div>
{:else}
  <slot />
{/if}

<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let rich = false;

  let element;
  const anchor = writable(null);
  const tooltip = writable(null);

  setContext('SMUI:tooltip:wrapper:anchor', anchor);
  setContext('SMUI:tooltip:wrapper:tooltip', tooltip);
  setContext('SMUI:tooltip:rich', rich);

  $: if ($tooltip && !$anchor) {
    $anchor = $tooltip.previousElementSibling;
  }

  export function getElement() {
    return element;
  }
</script>
