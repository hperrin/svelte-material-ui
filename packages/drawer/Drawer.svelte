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

<script>
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
  } from '@smui/common/internal.js';
  const { FocusTrap } = domFocusTrap;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let variant = null;
  export let open = false;
  export let fixed = true;

  let element;
  let instance;
  let internalClasses = {};
  let previousFocus;
  let focusTrap;
  let scrim = false;

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
      scrim.removeEventListener('SMUI:drawer:scrim:click', handleScrimClick);
  });

  function getInstance() {
    if (scrim) {
      scrim.removeEventListener('SMUI:drawer:scrim:click', handleScrimClick);
    }

    if (variant === 'modal') {
      scrim = element.parentNode.querySelector('.mdc-drawer-scrim');
      if (scrim) {
        scrim.addEventListener('SMUI:drawer:scrim:click', handleScrimClick);
      }
    }

    const Foundation = {
      dismissible: MDCDismissibleDrawerFoundation,
      modal: MDCModalDrawerFoundation,
    }[variant];

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
              previousFocus.focus &&
              element.contains(document.activeElement)
            ) {
              previousFocus.focus();
            }
          },
          focusActiveNavigationItem: () => {
            const activeNavItemEl = element.querySelector(
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

  function hasClass(className) {
    return className in internalClasses
      ? internalClasses[className]
      : getElement().classList.contains(className);
  }

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

  function handleScrimClick() {
    instance && instance.handleScrimClick();
  }

  export function setOpen(value) {
    open = value;
  }

  export function isOpen() {
    return open;
  }

  export function getElement() {
    return element;
  }
</script>
