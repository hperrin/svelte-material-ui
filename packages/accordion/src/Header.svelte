<svelte:options runes={false} />

<div
  bind:this={element}
  use:useActions={use}
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
  {...$$restProps}
  onclick={(e) => {
    handleClick(e);
    $$restProps.onclick?.(e);
  }}
  onkeydown={(e) => {
    handleKeyDown(e);
    $$restProps.onkeydown?.(e);
  }}
>
  {#if ripple}
    <div class="smui-accordion__header__ripple"></div>
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
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions, dispatch } from '@smui/common/internal';
  import Ripple from '@smui/ripple';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    style?: string;
    ripple?: boolean;
  };
  type $$Props = OwnProps & SmuiAttrs<'div', keyof OwnProps>;

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let ripple = true;

  let element: HTMLDivElement;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};

  const disabled = getContext<SvelteStore<boolean>>(
    'SMUI:accordion:panel:disabled',
  );
  const nonInteractive = getContext<SvelteStore<boolean>>(
    'SMUI:accordion:panel:nonInteractive',
  );
  const open = getContext<SvelteStore<boolean>>('SMUI:accordion:panel:open');

  function handleClick(event: MouseEvent) {
    if (event.button === 0) {
      dispatch(getElement(), 'SMUIAccordionHeaderActivate', {
        event,
      });
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      dispatch(getElement(), 'SMUIAccordionHeaderActivate', {
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
