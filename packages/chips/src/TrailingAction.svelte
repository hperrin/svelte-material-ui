<svelte:options runes />

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
  type="button"
  class={classMap({
    [className]: true,
    'mdc-deprecated-chip-trailing-action': true,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  aria-hidden={nonNavigable ? 'true' : undefined}
  tabindex="-1"
  {...internalAttrs}
  {...exclude(restProps, ['icon$'])}
  onclick={(e) => {
    if (instance) {
      instance.handleClick(e);
    }
    restProps.onclick?.(e);
  }}
  onkeydown={(e) => {
    if (instance) {
      instance.handleKeydown(e);
    }
    restProps.onkeydown?.(e);
  }}
>
  <span class="mdc-deprecated-chip-trailing-action__ripple"></span>
  {#if touch}
    <span class="mdc-deprecated-chip-trailing-action__touch"></span>
  {/if}
  <span
    use:useActions={icon$use}
    class={classMap({
      [icon$class]: true,
      'mdc-deprecated-chip-trailing-action__icon': true,
    })}
    {...prefixFilter(restProps, 'icon$')}>{@render children?.()}</span
  >
</button>

<script lang="ts">
  import { deprecated } from '@material/chips';
  import type { Snippet } from 'svelte';
  import { onMount, getContext, tick } from 'svelte';
  import type { SmuiAttrs, SmuiElementPropMap } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal';
  import Ripple from '@smui/ripple';

  import type { SMUIChipsTrailingActionAccessor } from './TrailingAction.types.js';

  const { MDCChipTrailingActionFoundation } = deprecated;

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
     * Whether to use touch styling
     */
    touch?: boolean;
    /**
     * Whether to hide this element from the accessibility tree.
     */
    nonNavigable?: boolean;
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    icon$use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    icon$class?: string;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    style = '',
    ripple = true,
    touch = false,
    nonNavigable = false,
    icon$use = [],
    icon$class = '',
    children,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'button', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['span'] as `icon\$${k}`]?: SmuiElementPropMap['span'][k];
    } = $props();

  let element: HTMLButtonElement;
  let instance: deprecated.MDCChipTrailingActionFoundation | undefined =
    $state();
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalStyles: { [k: string]: string } = $state({});
  let internalAttrs: { [k: string]: string | undefined } = $state({});

  const SMUIChipsTrailingActionMount = getContext<
    ((accessor: SMUIChipsTrailingActionAccessor) => void) | undefined
  >('SMUI:chips:trailing-action:mount');
  const SMUIChipsTrailingActionUnmount = getContext<
    ((accessor: SMUIChipsTrailingActionAccessor) => void) | undefined
  >('SMUI:chips:trailing-action:unmount');

  onMount(() => {
    instance = new MDCChipTrailingActionFoundation({
      focus: () => {
        const element = getElement();
        // Let the tabindex change propagate.
        waitForTabindex(() => {
          element.focus();
        });
      },
      getAttribute: getAttr,
      notifyInteraction: (trigger) =>
        dispatch(getElement(), 'SMUIChipTrailingActionInteraction', {
          trigger,
        }),
      notifyNavigation: (key) =>
        dispatch(getElement(), 'SMUIChipTrailingActionNavigation', { key }),
      setAttribute: addAttr,
    });

    const accessor: SMUIChipsTrailingActionAccessor = {
      isNavigable,
      focus,
      removeFocus,
    };

    SMUIChipsTrailingActionMount && SMUIChipsTrailingActionMount(accessor);

    instance.init();

    return () => {
      SMUIChipsTrailingActionUnmount &&
        SMUIChipsTrailingActionUnmount(accessor);

      instance?.destroy();
    };
  });

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

  function getAttr(name: string) {
    return name in internalAttrs
      ? (internalAttrs[name] ?? null)
      : getElement().getAttribute(name);
  }

  function addAttr(name: string, value: string) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function waitForTabindex(fn: () => void) {
    if (internalAttrs['tabindex'] !== getElement().getAttribute('tabindex')) {
      tick().then(fn);
    } else {
      fn();
    }
  }

  export function isNavigable() {
    if (instance == null) {
      throw new Error('Instance is undefined.');
    }
    return instance.isNavigable();
  }

  export function focus() {
    instance?.focus();
  }

  export function removeFocus() {
    instance?.removeFocus();
  }

  export function getElement() {
    return element;
  }
</script>
