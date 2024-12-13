<svelte:options runes />

<aside
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-drawer': true,
    'mdc-drawer--dismissible': variant === 'dismissible',
    'mdc-drawer--modal': variant === 'modal',
    'smui-drawer__absolute': variant === 'modal' && !fixed,
    ...internalClasses,
  })}
  {...restProps}
  onkeydown={(e) => {
    if (instance) {
      instance.handleKeydown(e);
    }
    restProps.onkeydown?.(e);
  }}
  ontransitionend={(e) => {
    if (instance) {
      instance.handleTransitionEnd(e);
    }
    restProps.ontransitionend?.(e);
  }}
>
  {@render children?.()}
</aside>

<script lang="ts">
  import {
    MDCDismissibleDrawerFoundation,
    MDCModalDrawerFoundation,
  } from '@material/drawer';
  import { focusTrap as domFocusTrap } from '@material/dom';
  import type { Snippet } from 'svelte';
  import { onMount, onDestroy, setContext } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    useActions,
    dispatch,
    SvelteEventManager,
  } from '@smui/common/internal';

  const { FocusTrap } = domFocusTrap;

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
     * How the drawer opens.
     *
     * Undefined means it's always open.
     *
     * Dismissible means it pushes the content over when it opens.
     *
     * Modal means it uses a scrim to open over the content.
     */
    variant?: 'dismissible' | 'modal' | undefined;
    /**
     * When using a dismissible or modal drawer, controls whether it's open.
     */
    open?: boolean;
    /**
     * Turn this off for non-page-wide drawers.
     *
     * This controls whether the drawer uses fixed or absolute positioning.
     */
    fixed?: boolean;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    variant,
    open = $bindable(false),
    fixed = true,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'aside', keyof OwnProps> = $props();

  let element: HTMLElement;
  let instance:
    | MDCDismissibleDrawerFoundation
    | MDCModalDrawerFoundation
    | undefined = $state(undefined);
  let eventManager = new SvelteEventManager();
  let internalClasses: { [k: string]: boolean } = $state({});
  let previousFocus: Element | null = $state(null);
  let focusTrap: domFocusTrap.FocusTrap;
  let scrim: Element | false = $state(false);

  setContext('SMUI:list:nav', true);
  setContext('SMUI:list:item:nav', true);
  setContext('SMUI:list:wrapFocus', true);

  $effect(() => {
    if (instance && instance.isOpen() !== open) {
      if (open) {
        instance.open();
      } else {
        instance.close();
      }
    }
  });

  let oldVariant = variant;
  $effect(() => {
    if (oldVariant !== variant) {
      oldVariant = variant;
      instance && instance.destroy();
      internalClasses = {};
      instance = getInstance();
      instance && instance.init();
    }
  });

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
    scrim && eventManager.off(scrim, 'SMUIDrawerScrimClick', handleScrimClick);
    eventManager.clear();
  });

  function getInstance() {
    if (scrim) {
      eventManager.off(scrim, 'SMUIDrawerScrimClick', handleScrimClick);
    }

    if (variant === 'modal') {
      scrim =
        getElement().parentNode?.querySelector('.mdc-drawer-scrim') ?? false;
      if (scrim) {
        eventManager.on(scrim, 'SMUIDrawerScrimClick', handleScrimClick);
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
              getElement().contains(document.activeElement)
            ) {
              (previousFocus as HTMLInputElement).focus();
            }
          },
          focusActiveNavigationItem: () => {
            const activeNavItemEl =
              getElement().querySelector<HTMLInputElement>(
                '.mdc-list-item--activated,.mdc-deprecated-list-item--activated',
              );
            if (activeNavItemEl) {
              activeNavItemEl.focus();
            }
          },
          notifyClose: () => {
            open = false;
            dispatch(getElement(), 'SMUIDrawerClosed');
          },
          notifyOpen: () => {
            open = true;
            dispatch(getElement(), 'SMUIDrawerOpened');
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
