<div
  use:useActions={use}
  use:forwardEvents
  class="smui-paper {elevation !== 0 ? 'mdc-elevation--z' + elevation : ''} {className}"
  class:smui-paper--rounded={!square}
  class:smui-paper--color-primary={color === 'primary'}
  class:smui-paper--color-secondary={color === 'secondary'}
  class:mdc-elevation-transition={transition}
  {...exclude($$props, ['use', 'class', 'square', 'color', 'transition'])}
><slot></slot></div>

<script>
  import {onMount, onDestroy, afterUpdate, setContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@svelte-material-ui/common/forwardEvents.js';
  import {exclude} from '@svelte-material-ui/common/exclude.js';
  import {useActions} from '@svelte-material-ui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let square = false;
  export let color = 'default';
  export let elevation = 1;
  export let transition = false;
</script>