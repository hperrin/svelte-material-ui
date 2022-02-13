<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  use:Ripple={{
    ripple,
    unbounded: false,
    surface: !$nonInteractive,
    disabled: $disabled || $nonInteractive,
    addClass,
    removeClass,
    addStyle,
  }}
  class={classMap({
    [className]: true,
    'smui-accordion__header': true,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  role="button"
  tabindex={$nonInteractive ? -1 : 0}
  aria-expanded={$open ? 'true' : 'false'}
  on:click={handleClick}
  on:keydown={handleKeyDown}
  {...$$restProps}
>
  {#if ripple}
    <div class="smui-accordion__header__ripple" />
  {/if}
  <div
    class={classMap({
      'smui-accordion__header__title': true,
      'smui-accordion__header__title--with-description': $$slots.description,
    })}
  >
    <slot />
  </div>
  {#if $$slots.description}
    <div class="smui-accordion__header__description">
      <slot name="description" />
    </div>
  {/if}
  {#if $$slots.icon}
    <div class="smui-accordion__header__icon">
      <slot name="icon" />
    </div>
  {/if}
</div>

<script lang="ts">
  import { getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
  } from '@smui/common/internal';
  import Ripple from '@smui/ripple';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let ripple = true;

  let element: HTMLDivElement;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};

  const disabled = getContext<SvelteStore<boolean>>(
    'SMUI:accordion:panel:disabled'
  );
  const nonInteractive = getContext<SvelteStore<boolean>>(
    'SMUI:accordion:panel:nonInteractive'
  );
  const open = getContext<SvelteStore<boolean>>('SMUI:accordion:panel:open');

  function handleClick(event: CustomEvent | MouseEvent) {
    event = event as MouseEvent;

    if (event.button === 0) {
      dispatch(getElement(), 'SMUIAccordionHeader:activate', {
        event,
      });
    }
  }

  function handleKeyDown(event: CustomEvent | KeyboardEvent) {
    event = event as KeyboardEvent;

    if (event.key === 'Enter') {
      dispatch(getElement(), 'SMUIAccordionHeader:activate', {
        event,
      });
    }
  }

  function addClass(className: string) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className: string) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  function addStyle(name: string, value: string) {
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
    return element;
  }
</script>
