{#if leading}
  <i
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class={classMap({
      [className]: true,
      'mdc-chip__icon': true,
      'mdc-chip__icon--leading': true,
      'mdc-chip__icon--leading-hidden': $filter && $isSelected,
    })}
    {...exclude($$props, ['use', 'class', 'leading'])}><slot /></i
  >
{:else}
  <span
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    role="gridcell"
  >
    <i
      bind:this={icon}
      class={classMap({
        [className]: true,
        'mdc-chip__icon': true,
        'mdc-chip__icon--trailing': true,
        'mdc-chip__trailing-action': $shouldRemoveOnTrailingIconClick,
      })}
      {...$shouldRemoveOnTrailingIconClick ? { role: 'button' } : {}}
      {...exclude($$props, ['use', 'class', 'leading'])}><slot /></i
    >
  </span>
{/if}

<script>
  import { onMount, getContext } from 'svelte';
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
  export let leading = false;

  const shouldRemoveOnTrailingIconClick = getContext(
    'SMUI:chip:shouldRemoveOnTrailingIconClick'
  );
  const filter = getContext('SMUI:chip:filter');
  const isSelected = getContext('SMUI:chip:isSelected');

  let element;
  let icon;

  onMount(() => {
    if (!leading && $shouldRemoveOnTrailingIconClick) {
      (icon || element).setAttribute('tabindex', '-1');
    }
  });

  export function getElement() {
    return element;
  }
</script>
