<header
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-top-app-bar {className}"
  class:mdc-top-app-bar--short={variant === 'short'}
  class:mdc-top-app-bar--short-collapsed={collapsed}
  class:mdc-top-app-bar--fixed={variant === 'fixed'}
  class:smui-top-app-bar--static={variant === 'static'}
  class:smui-top-app-bar--color-secondary={color === 'secondary'}
  class:mdc-top-app-bar--prominent={prominent}
  class:mdc-top-app-bar--dense={dense}
  {...exclude($$props, ['use', 'class', 'variant', 'color', 'collapsed', 'prominent', 'dense'])}
><slot></slot></header>

<script>
  import {MDCTopAppBar} from '@material/top-app-bar';
  import {onMount, onDestroy} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component, ['MDCList:action']);

  export let use = [];
  let className = '';
  export {className as class};
  export let variant = 'standard';
  export let color = 'primary';
  export let collapsed = false;
  export let prominent = false;
  export let dense = false;

  let element;
  let topAppBar;

  onMount(() => {
    topAppBar = new MDCTopAppBar(element);
  });

  onDestroy(() => {
    topAppBar && topAppBar.destroy();
  });
</script>
