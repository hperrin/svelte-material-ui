<aside
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-drawer': true,
    'mdc-drawer--dismissible': variant === 'dismissible',
    'mdc-drawer--modal': variant === 'modal',
    'smui-drawer__absolute': variant === 'modal' && !fixed,
    ...internalClasses,
  })}
  on:keydown={(event) => instance && instance.handleKeydown(event)}
  on:transitionend={(event) => instance && instance.handleTransitionEnd(event)}
  {...$$restProps}
>
  <slot />
</aside>

<script lang="ts">
  import {
    MDCDismissibleDrawerFoundation,
    MDCModalDrawerFoundation,
  } from '@material/drawer';
  import { focusTrap as domFocusTrap } from '@material/dom';
  import { onMount, onDestroy, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
    ActionArray,
  } from '@smui/common/internal/index.js';
  const { FocusTrap } = domFocusTrap;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let variant: 'dismissible' | 'modal' | undefined = undefined;
  export let open = false;
  export let fixed = true;

  let element: HTMLElement;
  let instance:
    | MDCDismissibleDrawerFoundation
    | MDCModalDrawerFoundation
    | undefined = undefined;
  let internalClasses: { [k: string]: boolean } = {};
  let previousFocus: Element | null = null;
  let focusTrap: domFocusTrap.FocusTrap;
  let scrim: Element | false = false;

  setContext('SMUI:list:nav', true);
  setContext('SMUI:list:item:nav', true);
  setContext('SMUI:list:wrapFocus', true);

  $: if (instance && instance.isOpen() !== open) {
    if (open) {
      instance.open();
    } else {
      instance.close();
    }
  }

  let oldVariant = variant;
  $: if (oldVariant !== variant) {
    oldVariant = variant;
    instance && instance.destroy();
    internalClasses = {};
    instance = getInstance();
    instance && instance.init();
  }

  onMount(() => {
    focusTrap = new FocusTrap(element, {
      // Component handles focusing on active nav item.
      skipInitialFocus: true,
    });

    instance = getInstance();
    instance && instance.init();
  });

  onDestroy(() => {
    instance && instance.destroy();
    scrim &&
      scrim.removeEventListener('SMUIDrawerScrim:click', handleScrimClick);
  });

  function getInstance() {
    if (scrim) {
      scrim.removeEventListener('SMUIDrawerScrim:click', handleScrimClick);
    }

    if (variant === 'modal') {
      scrim = element.parentNode?.querySelector('.mdc-drawer-scrim') ?? false;
      if (scrim) {
        scrim.addEventListener('SMUIDrawerScrim:click', handleScrimClick);
      }
    }

    const Foundation =
      variant === 'dismissible'
        ? MDCDismissibleDrawerFoundation
        : variant === 'modal'
        ? MDCModalDrawerFoundation
        : undefined;

    return Foundation
      ? new Foundation({
          addClass,
          removeClass,
          hasClass,
          elementHasClass: (element, className) =>
            element.classList.contains(className),
          saveFocus: () => (previousFocus = document.activeElement),
          restoreFocus: () => {
            if (
              previousFocus &&
              'focus' in previousFocus &&
              element.contains(document.activeElement)
            ) {
              (previousFocus as HTMLInputElement).focus();
            }
          },
          focusActiveNavigationItem: () => {
            const activeNavItemEl = element.querySelector<HTMLInputElement>(
              '.mdc-list-item--activated,.mdc-deprecated-list-item--activated'
            );
            if (activeNavItemEl) {
              activeNavItemEl.focus();
            }
          },
          notifyClose: () => {
            open = false;
            dispatch(element, 'MDCDrawer:closed');
          },
          notifyOpen: () => {
            open = true;
            dispatch(element, 'MDCDrawer:opened');
          },
          trapFocus: () => focusTrap.trapFocus(),
          releaseFocus: () => focusTrap.releaseFocus(),
        })
      : undefined;
  }

  function hasClass(className: string) {
    return className in internalClasses
      ? internalClasses[className]
      : getElement().classList.contains(className);
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

  function handleScrimClick() {
    instance && 'handleScrimClick' in instance && instance.handleScrimClick();
  }

  export function setOpen(value: boolean) {
    open = value;
  }

  export function isOpen() {
    return open;
  }

  export function getElement() {
    return element;
  }
</script>
