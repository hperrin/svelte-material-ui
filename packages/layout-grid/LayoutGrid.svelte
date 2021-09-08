<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-layout-grid': true,
    'mdc-layout-grid--fixed-column-width': fixedColumnWidth,
    ['mdc-layout-grid--align-' + align]: align != null,
  })}
  {...exclude($$restProps, ['innerGrid$'])}
>
  <InnerGrid {...prefixFilter($$restProps, 'innerGrid$')}>
    <slot />
  </InnerGrid>
</div>

<script>
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal';
  import InnerGrid from './InnerGrid.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let fixedColumnWidth = false;
  export let align = null;

  let element;

  export function getElement() {
    return element;
  }
</script>
