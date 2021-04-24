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
        disabled: !!$$restProps.disabled,
        addClass,
        removeClass,
        addStyle,
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
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  {href}
  {...$$restProps}
  ><div class="mdc-fab__ripple" />
  <slot />{#if touch}<div class="mdc-fab__touch" />{/if}</svelte:component
>

<script>
  import { setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder, classMap } from '@smui/common/internal.js';
  import Ripple from '@smui/ripple';
  import A from '@smui/common/A.svelte';
  import Button from '@smui/common/Button.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let ripple = true;
  export let color = 'secondary';
  export let mini = false;
  export let exited = false;
  export let extended = false;
  export let touch = false;
  export let href = null;

  let element;
  let internalClasses = {};
  let internalStyles = {};

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

  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }

  export function getElement() {
    return element.getElement();
  }
</script>
