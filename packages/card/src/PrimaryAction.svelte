<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
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
  {...restProps}
>
  <div class="mdc-card__ripple"></div>
  {@render children?.()}
</div>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';
  import Ripple from '@smui/ripple';

  type OwnProps = {
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    class?: string;
    /**
     * A list of CSS styles.
     */
    style?: string;
    /**
     * Whether to show a ripple animation.
     */
    ripple?: boolean;
    /**
     * The color of the action.
     */
    color?: 'primary' | 'secondary' | undefined;
    /**
     * Whether to add padding.
     */
    padded?: boolean;
    /**
     * The tab index.
     */
    tabindex?: number;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    style = '',
    ripple = true,
    color,
    padded = false,
    tabindex = 0,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  let element: HTMLDivElement;
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalStyles: { [k: string]: string } = $state({});

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
      } else {
        internalStyles[name] = value;
      }
    }
  }

  export function getElement() {
    return element;
  }
</script>
