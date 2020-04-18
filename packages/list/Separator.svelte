{#if group || nav}
  <hr
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-list-divider
      {className}
      {padded ? 'mdc-list-divider--padded' : ''}
      {inset ? 'mdc-list-divider--inset' : ''}
    "
    {...props}
  />
{:else}
  <li
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-list-divider
      {className}
      {padded ? 'mdc-list-divider--padded' : ''}
      {inset ? 'mdc-list-divider--inset' : ''}
    "
    role="separator"
    {...props}
  ></li>
{/if}

<script>
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export {className as class};
  export let group = false;
  export let nav = false;
  export let padded = false;
  export let inset = false;

  $: props = exclude($$props, ['use', 'class', 'group', 'nav', 'padded', 'inset']);
</script>
