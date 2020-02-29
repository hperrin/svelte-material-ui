<div
  use:useActions={use}
  use:forwardEvents
  class="
    smui-paper
    {className}
    {elevation !== 0 ? 'mdc-elevation--z' + elevation : ''}
    {!square ? 'smui-paper--rounded' : ''}
    {color === 'primary' ? 'smui-paper--color-primary' : ''}
    {color === 'secondary' ? 'smui-paper--color-secondary' : ''}
    {transition ? 'mdc-elevation-transition' : ''}
  "
  {...exclude($$props, ['use', 'class', 'square', 'color', 'transition'])}
><slot></slot></div>

<script>
  import {onMount, onDestroy, afterUpdate, setContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export {className as class};
  export let square = false;
  export let color = 'default';
  export let elevation = 1;
  export let transition = false;
</script>
