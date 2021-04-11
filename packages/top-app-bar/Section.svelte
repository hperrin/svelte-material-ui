<section
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-top-app-bar__section': true,
    'mdc-top-app-bar__section--align-start': align === 'start',
    'mdc-top-app-bar__section--align-end': align === 'end',
  })}
  {...toolbar ? { role: 'toolbar' } : {}}
  {...$$restProps}
>
  <slot />
</section>

<script>
  import { setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component(), [
    'SMUI:top-app-bar:icon-button:nav',
    'MDCList:action',
  ]);

  export let use = [];
  let className = '';
  export { className as class };
  export let align = 'start';
  export let toolbar = false;

  let element;

  setContext(
    'SMUI:icon-button:context',
    toolbar ? 'top-app-bar:action' : 'top-app-bar:navigation'
  );
  setContext(
    'SMUI:button:context',
    toolbar ? 'top-app-bar:action' : 'top-app-bar:navigation'
  );

  export function getElement() {
    return element;
  }
</script>
