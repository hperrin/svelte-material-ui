<svelte:component
  this={component}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class={classMap({
    [className]: true,
    'mdc-button__icon': context === 'button',
    'mdc-fab__icon': context === 'fab',
    'mdc-icon-button__icon': context === 'icon-button',
    'mdc-icon-button__icon--on': context === 'icon-button' && on,
    'mdc-tab__icon': context === 'tab',
    'mdc-banner__icon': context === 'banner',
    'mdc-segmented-button__icon': context === 'segmented-button',
  })}
  aria-hidden="true"
  {...component === Svg ? { focusable: 'false', tabindex: '-1' } : {}}
  {...$$restProps}><slot /></svelte:component
>

<script>
  import { getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder, classMap } from './internal.js';
  import I from './I.svelte';
  import Svg from './Svg.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let on = false;

  let element;

  export let component = I;

  const context = getContext('SMUI:icon:context');

  export function getElement() {
    return element.getElement();
  }
</script>
