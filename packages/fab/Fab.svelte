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
  class="mdc-fab {className} {Object.keys(internalClasses).join(' ')} {mini
    ? 'mdc-fab--mini'
    : ''} {exited ? 'mdc-fab--exited' : ''} {extended
    ? 'mdc-fab--extended'
    : ''} {color === 'primary' ? 'smui-fab--color-primary' : ''} {touch
    ? 'mdc-fab--touch'
    : ''}"
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
  import { forwardEventsBuilder, exclude } from '@smui/common/internal.js';
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
    // Doesn't need hasClass.
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className) {
    // Doesn't need hasClass.
    if (internalClasses[className]) {
      delete internalClasses[className];
      internalClasses = internalClasses;
    }
  }

  export function getElement() {
    return element.getElement();
  }
</script>
