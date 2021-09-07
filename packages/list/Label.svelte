<label
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-deprecated-list-item__text': true,
  })}
  for={inputProps ? inputProps.id : null}
  {...$$restProps}><slot /></label
>

<script>
  import { getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };

  let element;
  let inputProps = getContext('SMUI:generic:input:props') || {};

  export function getElement() {
    return element;
  }
</script>
