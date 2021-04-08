<span
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  role="gridcell"
>
  <i
    class={classMap({
      [className]: true,
      'mdc-chip__icon': true,
      'mdc-chip__icon--trailing': true,
    })}
    {...exclude($$props, ['use', 'class'])}><slot /></i
  >
</span>

<script>
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };

  let element;

  export function getElement() {
    return element;
  }
</script>
