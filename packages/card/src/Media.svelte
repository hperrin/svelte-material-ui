<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-card__media': true,
    'mdc-card__media--square': aspectRatio === 'square',
    'mdc-card__media--16-9': aspectRatio === '16x9',
  })}
  {...$$restProps}
>
  <slot />
</div>

<script lang="ts">
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
  export let aspectRatio: 'square' | '16x9' | undefined = undefined;

  let element: HTMLDivElement;

  export function getElement() {
    return element;
  }
</script>
