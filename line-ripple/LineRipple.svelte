<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-line-ripple {className}"
  class:mdc-line-ripple--active={active}
  {...exclude($$props, ['use', 'class', 'active'])}
></div>

<script>
  import {MDCLineRipple} from '@material/line-ripple';
  import {onMount, onDestroy} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

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
    lineRipple.destroy();
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