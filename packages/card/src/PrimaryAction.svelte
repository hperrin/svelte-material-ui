<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  use:Ripple={{
    ripple,
    unbounded: false,
    color,
    addClass,
    removeClass,
    addStyle,
  }}
  class={classMap({
    [className]: true,
    'mdc-card__primary-action': true,
    'smui-card__primary-action--padded': padded,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  {tabindex}
  role="button"
  {...$$restProps}
>
  <div class="mdc-card__ripple" />
  <slot />
</div>

<script lang="ts">
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal';
  import Ripple from '@smui/ripple';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    style?: string;
    ripple?: boolean;
    color?: 'primary' | 'secondary' | undefined;
    padded?: boolean;
    tabindex?: number;
  };
  type $$Props = OwnProps & SmuiAttrs<'div', keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let ripple = true;
  export let color: 'primary' | 'secondary' | undefined = undefined;
  export let padded = false;
  export let tabindex = 0;

  let element: HTMLDivElement;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};

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
