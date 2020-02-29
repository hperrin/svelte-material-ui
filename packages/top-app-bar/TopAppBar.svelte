<header
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-top-app-bar
    {className}
    {variant === 'short' ? 'mdc-top-app-bar--short' : ''}
    {collapsed ? 'mdc-top-app-bar--short-collapsed' : ''}
    {variant === 'fixed' ? 'mdc-top-app-bar--fixed' : ''}
    {variant === 'static' ? 'smui-top-app-bar--static' : ''}
    {color === 'secondary' ? 'smui-top-app-bar--color-secondary' : ''}
    {prominent ? 'mdc-top-app-bar--prominent' : ''}
    {dense ? 'mdc-top-app-bar--dense' : ''}
  "
  {...exclude($$props, ['use', 'class', 'variant', 'color', 'collapsed', 'prominent', 'dense'])}
><slot></slot></header>

<script>
  import {MDCTopAppBar} from '@material/top-app-bar';
  import {onMount, onDestroy} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component(), ['MDCList:action']);

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
