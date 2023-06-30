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
  on:click={instance && instance.handleClick.bind(instance)}
  on:keydown={instance && instance.handleKeydown.bind(instance)}
  {...internalAttrs}
  {...exclude($$restProps, ['icon$'])}
>
  <span class="mdc-deprecated-chip-trailing-action__ripple" />
  {#if touch}
    <span class="mdc-deprecated-chip-trailing-action__touch" />
  {/if}
  <span
    use:useActions={icon$use}
    class={classMap({
      [icon$class]: true,
      'mdc-deprecated-chip-trailing-action__icon': true,
    })}
    {...prefixFilter($$restProps, 'icon$')}><slot /></span
  >
</button>

<script lang="ts">
  import { deprecated } from '@material/chips';
  import { onMount, tick } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs, SmuiElementPropMap } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
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
    use?: ActionArray;
    class?: string;
    style?: string;
    ripple?: boolean;
    touch?: boolean;
    nonNavigable?: boolean;
    icon$use?: ActionArray;
    icon$class?: string;
  };
  type $$Props = OwnProps &
    SmuiAttrs<'button', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['span'] as `icon\$${k}`]?: SmuiElementPropMap['span'][k];
    };

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let ripple = true;
  export let touch = false;
  export let nonNavigable = false;
  export let icon$use: ActionArray = [];
  export let icon$class = '';

  let element: HTMLButtonElement;
  let instance: deprecated.MDCChipTrailingActionFoundation;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};
  let internalAttrs: { [k: string]: string | undefined } = {};

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
        dispatch(
          getElement(),
          'SMUIChipTrailingAction:interaction',
          {
            trigger,
          },
          undefined,
          true
        ),
      notifyNavigation: (key) => {
        dispatch(
          getElement(),
          'SMUIChipTrailingAction:navigation',
          { key },
          undefined,
          true
        );
      },
      setAttribute: addAttr,
    });

    const accessor: SMUIChipsTrailingActionAccessor = {
      isNavigable,
      focus,
      removeFocus,
    };

    dispatch(getElement(), 'SMUIChipsChipTrailingAction:mount', accessor);

    instance.init();

    return () => {
      dispatch(getElement(), 'SMUIChipsChipTrailingAction:unmount', accessor);

      instance.destroy();
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
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }

  function getAttr(name: string) {
    return name in internalAttrs
      ? internalAttrs[name] ?? null
      : getElement().getAttribute(name);
  }

  function addAttr(name: string, value: string) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function waitForTabindex(fn: () => void) {
    if (internalAttrs['tabindex'] !== element.getAttribute('tabindex')) {
      tick().then(fn);
    } else {
      fn();
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
