<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-notched-outline': true,
    'mdc-notched-outline--notched': notched,
    'mdc-notched-outline--no-label': noLabel,
    ...internalClasses,
  })}
  on:SMUI:floating-label:mount={(event) => (floatingLabel = event.detail)}
  on:SMUI:floating-label:unmount={() => (floatingLabel = undefined)}
  {...$$restProps}
>
  <div class="mdc-notched-outline__leading" />
  {#if !noLabel}
    <div
      class="mdc-notched-outline__notch"
      style={Object.entries(notchStyles)
        .map(([name, value]) => `${name}: ${value};`)
        .join(' ')}
    >
      <slot />
    </div>
  {/if}
  <div class="mdc-notched-outline__trailing" />
</div>

<script>
  import { MDCNotchedOutlineFoundation } from '@material/notched-outline';
  import { onMount } from 'svelte';
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
  export let notched = false;
  export let noLabel = false;

  let element;
  let instance;
  let floatingLabel;
  let internalClasses = {};
  let notchStyles = {};

  $: if (floatingLabel) {
    floatingLabel.addStyle('transition-duration', '0s');
    addClass('mdc-notched-outline--upgraded');
    requestAnimationFrame(() => {
      floatingLabel.removeStyle('transition-duration');
    });
  } else {
    removeClass('mdc-notched-outline--upgraded');
  }

  onMount(() => {
    instance = new MDCNotchedOutlineFoundation({
      addClass,
      removeClass,
      setNotchWidthProperty: (width) => addNotchStyle('width', width + 'px'),
      removeNotchWidthProperty: () => removeNotchStyle('width'),
    });

    instance.init();

    return () => {
      instance.destroy();
    };
  });

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

  function addNotchStyle(name, value) {
    if (notchStyles[name] != value) {
      if (value === '' || value == null) {
        delete notchStyles[name];
        notchStyles = notchStyles;
      } else {
        notchStyles[name] = value;
      }
    }
  }

  function removeNotchStyle(name) {
    if (name in notchStyles) {
      delete notchStyles[name];
      notchStyles = notchStyles;
    }
  }

  export function notch(notchWidth) {
    instance.notch(notchWidth);
  }

  export function closeNotch() {
    instance.closeNotch();
  }

  export function getElement() {
    return element;
  }
</script>
