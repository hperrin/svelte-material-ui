<svelte:component
  this={component}
  bind:this={element}
  use={[
    [
      Ripple,
      {
        ripple,
        unbounded: false,
        color,
        disabled: !!$$props.disabled,
        addClass,
        removeClass,
      },
    ],
    forwardEvents,
    ...use,
  ]}
  class={classMap({
    [className]: true,
    'mdc-fab': true,
    'mdc-fab--mini': mini,
    'mdc-fab--exited': exited,
    'mdc-fab--extended': extended,
    'smui-fab--color-primary': color === 'primary',
    'mdc-fab--touch': touch,
    ...internalClasses,
  })}
  {...exclude($$props, [
    'use',
    'class',
    'ripple',
    'color',
    'mini',
    'exited',
    'extended',
    'touch',
    'component',
  ])}
  ><div class="mdc-fab__ripple" />
  <slot />{#if touch}<div class="mdc-fab__touch" />{/if}</svelte:component
>

<script>
  import { setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
  } from '@smui/common/internal.js';
  import A from '@smui/common/A.svelte';
  import Button from '@smui/common/Button.svelte';
  import Ripple from '@smui/ripple/bare.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let ripple = true;
  export let color = 'secondary';
  export let mini = false;
  export let exited = false;
  export let extended = false;
  export let touch = false;
  // Purposely left out of props exclude.
  export let href = null;

  let element;
  let internalClasses = {};

  export let component = href == null ? Button : A;

  setContext('SMUI:label:context', 'fab');
  setContext('SMUI:icon:context', 'fab');

  function addClass(className) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  export function getElement() {
    return element.getElement();
  }
</script>
