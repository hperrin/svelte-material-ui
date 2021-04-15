<button
  bind:this={element}
  use:Ripple={{
    ripple,
    unbounded: false,
    addClass,
    removeClass,
    addStyle,
  }}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-chip-trailing-action': true,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  aria-hidden={nonNavigable ? 'true' : null}
  tabindex="-1"
  on:click={(event) => instance && instance.handleClick(event)}
  on:keydown={(event) => instance && instance.handleKeydown(event)}
  {...internalAttrs}
  {...exclude($$restProps, ['icon$'])}
>
  <span class="mdc-chip-trailing-action__ripple" />
  {#if touch}
    <span class="mdc-chip-trailing-action__touch" />
  {/if}
  <span
    use:useActions={icon$use}
    class={classMap({
      [icon$class]: true,
      'mdc-chip-trailing-action__icon': true,
    })}
    {...prefixFilter($$restProps, 'icon$')}><slot /></span
  >
</button>

<script>
  import { MDCChipTrailingActionFoundation } from '@material/chips';
  import { onMount } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';
  import Ripple from '@smui/ripple/bare.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let ripple = true;
  export let touch = false;
  export let nonNavigable = false;
  export let icon$use = [];
  export let icon$class = '';

  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};

  onMount(() => {
    instance = new MDCChipTrailingActionFoundation({
      focus: () => {
        getElement().focus();
      },
      getAttribute: getAttr,
      notifyInteraction: (trigger) =>
        dispatch(getElement(), 'MDCChipTrailingAction:interaction', {
          trigger,
        }),
      notifyNavigation: (key) => {
        dispatch(getElement(), 'MDCChipTrailingAction:navigation', { key });
      },
      setAttribute: addAttr,
    });

    dispatch(getElement(), 'SMUI:chip:trailing-action:mount', {
      isNavigable,
      focus,
      removeFocus,
    });

    instance.init();

    return () => {
      dispatch(getElement(), 'SMUI:chip:trailing-action:unmount');

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

  function getAttr(name) {
    return name in internalAttrs
      ? internalAttrs[name]
      : getElement().getAttribute(name);
  }

  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  export function isNavigable() {
    return instance.isNavigable();
  }

  export function focus() {
    instance.focus();
  }

  export function removeFocus() {
    instance.removeFocus();
  }

  export function getElement() {
    return element;
  }
</script>
