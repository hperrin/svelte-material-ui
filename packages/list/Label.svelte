<label
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-deprecated-list-item__text': true,
  })}
  for={inputProps ? inputProps.id : undefined}
  {...$$restProps}><slot /></label
>

<script lang="ts">
  import { getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    ActionArray,
  } from '@smui/common/internal';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use: ActionArray = [];
  let className = '';
  export { className as class };

  let element: HTMLLabelElement;
  let inputProps =
    getContext<{ id?: string }>('SMUI:generic:input:props') ?? {};

  export function getElement() {
    return element;
  }
</script>
