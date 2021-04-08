<i
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-chip__icon': true,
    'mdc-chip__icon--leading': true,
    'mdc-chip__icon--leading-hidden': $filter && $isSelected,
    ...$leadingIconClasses,
  })}
  {...exclude($$props, ['use', 'class'])}><slot /></i
>

<script>
  import { getContext } from 'svelte';
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

  const filter = getContext('SMUI:chip:filter');
  const isSelected = getContext('SMUI:chip:isSelected');
  const leadingIconClasses = getContext('SMUI:chip:leadingIconClasses');

  let element;

  export function getElement() {
    return element;
  }
</script>
