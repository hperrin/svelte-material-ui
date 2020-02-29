<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-line-ripple
    {className}
    {active ? 'mdc-line-ripple--active' : ''}
  "
  {...exclude($$props, ['use', 'class', 'active'])}
></div>

<script>
  import {MDCLineRipple} from '@material/line-ripple';
  import {onMount, onDestroy} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export {className as class};
  export let active = false;

  let element;
  let lineRipple;

  onMount(() => {
    lineRipple = new MDCLineRipple(element);
  });

  onDestroy(() => {
    lineRipple && lineRipple.destroy();
  });

  export function activate(...args) {
    return lineRipple.activate(...args);
  }

  export function deactivate(...args) {
    return lineRipple.deactivate(...args);
  }

  export function setRippleCenter(xCoordinate, ...args) {
    return lineRipple.setRippleCenter(xCoordinate, ...args);
  }
</script>
