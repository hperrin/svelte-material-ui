{#if leading}
  <i
    bind:this={icon}
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-chip__icon
      mdc-chip__icon--leading
      {className}
      {$filter && $isSelected ? 'mdc-chip__icon--leading-hidden' : ''}
    "
    {...exclude($$props, ['use', 'class', 'leading', 'leadingHidden'])}
  ><slot></slot></i>
{:else}
  <span
    use:useActions={use}
    use:forwardEvents
    role="gridcell"
  >
    <i
      bind:this={icon}
      class="
        mdc-chip__icon
        mdc-chip__icon--trailing
        {className}
        {$shouldRemoveOnTrailingIconClick ? 'mdc-chip__trailing-action' : ''}
      "
      {...($shouldRemoveOnTrailingIconClick ? {role: 'button'} : {})}
      {...exclude($$props, ['use', 'class', 'leading', 'leadingHidden'])}
    ><slot></slot></i>
  </span>
{/if}

<script>
  import {onMount, getContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export {className as class};
  export let leading = false;

  const shouldRemoveOnTrailingIconClick = getContext('SMUI:chip:shouldRemoveOnTrailingIconClick');
  const filter = getContext('SMUI:chip:filter');
  const isSelected = getContext('SMUI:chip:isSelected');

  let icon;

  onMount(() => {
    if (!leading && $shouldRemoveOnTrailingIconClick) {
      icon.setAttribute('tabindex', '-1');
    }
  });
</script>
