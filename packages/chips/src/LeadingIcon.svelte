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
  {...$$restProps}><slot /></i
>

<script lang="ts">
  import { getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };

  const filter = getContext<SvelteStore<boolean>>('SMUI:chips:filter');
  const isSelected = getContext<SvelteStore<boolean>>(
    'SMUI:chips:chip:isSelected'
  );
  const leadingIconClasses = getContext<SvelteStore<{ [k: string]: boolean }>>(
    'SMUI:chips:chip:leadingIconClasses'
  );

  let element: HTMLElement;

  export function getElement() {
    return element;
  }
</script>
