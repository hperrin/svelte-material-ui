{#if group || nav}
  <hr
    use:useActions={use}
    use:forwardEvents
    class="mdc-list-divider {className}"
    class:mdc-list-divider--padded={padded}
    class:mdc-list-divider--inset={inset}
    {...exclude($$props, ['use', 'class', 'group', 'nav', 'padded', 'inset'])}
  />
{:else}
  <li
    use:useActions={use}
    use:forwardEvents
    class="mdc-list-divider {className}"
    class:mdc-list-divider--padded={padded}
    class:mdc-list-divider--inset={inset}
    role="separator"
    {...exclude($$props, ['use', 'class', 'group', 'nav', 'padded', 'inset'])}
  ></li>
{/if}

<script>
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let group = false;
  export let nav = false;
  export let padded = false;
  export let inset = false;
</script>