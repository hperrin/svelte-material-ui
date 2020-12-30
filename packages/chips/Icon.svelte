{#if leading}
  <i
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-chip__icon
      mdc-chip__icon--leading
      {className}
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
      class="
        mdc-chip__icon
        mdc-chip__icon--trailing
        {className}
      "
      {...($shouldRemoveOnTrailingIconClick ? {tabindex: '-1', role: 'button'} : {})}
      {...exclude($$props, ['use', 'class', 'leading', 'leadingHidden'])}
    ><slot></slot></i>
  </span>
{/if}

<script>
  import {getContext} from 'svelte';
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
</script>
