<svelte:options runes />

<svelte:window
  onresize={() => open && instance && instance.layout()}
  onorientationchange={() => open && instance && instance.layout()}
/>
<svelte:body onkeydown={(e) => instance && instance.handleDocumentKeydown(e)} />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-dialog': true,
    'mdc-dialog--stacked': !autoStackButtons,
    'mdc-dialog--fullscreen': fullscreen,
    'mdc-dialog--sheet': sheet,
    'mdc-dialog--no-content-padding': noContentPadding,
    'smui-dialog--selection': selection,
    ...internalClasses,
  })}
  role="alertdialog"
  aria-modal="true"
  {...exclude(restProps, ['container$', 'surface$'])}
  onSMUIDialogOpening={(e) => {
    handleDialogOpening();
    restProps.onSMUIDialogOpening?.(e);
  }}
  onSMUIDialogOpened={(e) => {
    handleDialogOpened();
    restProps.onSMUIDialogOpened?.(e);
  }}
  onSMUIDialogClosed={(e) => {
    handleDialogClosed();
    restProps.onSMUIDialogClosed?.(e);
  }}
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
  <div
    class={classMap({
      [container$class]: true,
      'mdc-dialog__container': true,
    })}
    {...prefixFilter(restProps, 'container$')}
  >
    <div
      class={classMap({
        [surface$class]: true,
        'mdc-dialog__surface': true,
      })}
      role="alertdialog"
      aria-modal="true"
      {...prefixFilter(restProps, 'surface$')}
    >
      {@render children?.()}
      {#if fullscreen}
        <div
          class="mdc-dialog__surface-scrim"
          ontransitionend={() =>
            instance && instance.handleSurfaceScrimTransitionEnd()}
        ></div>
      {/if}
    </div>
  </div>
  <div class="mdc-dialog__scrim"></div>
</div>

{@render over?.()}

<script lang="ts">
  import { MDCDialogFoundation, util } from '@material/dialog';
  import { focusTrap as domFocusTrap, ponyfill } from '@material/dom';
  import type { Snippet } from 'svelte';
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { writable } from 'svelte/store';
  import type {
    AddLayoutListener,
    RemoveLayoutListener,
    SmuiAttrs,
    SmuiElementPropMap,
  } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
    SvelteEventManager,
  } from '@smui/common/internal';

  const { FocusTrap } = domFocusTrap;
  const { closest, matches } = ponyfill;

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
     * Whether the dialog is open.
     */
    open?: boolean;
    /**
     * Whether this is a selection dialog.
     */
    selection?: boolean;
    /**
     * What action the escape key should trigger.
     *
     * Set to an empty string to not trigger an action or close the dialog.
     */
    escapeKeyAction?: string;
    /**
     * What action clicking the scrim should trigger.
     *
     * Set to an empty string to not trigger an action or close the dialog.
     */
    scrimClickAction?: string;
    /**
     * Automatically stack buttons that are too wide on mobile screens.
     */
    autoStackButtons?: boolean;
    /**
     * Style as a full screen dialog on mobile screens.
     */
    fullscreen?: boolean;
    /**
     * Style as a floating sheet.
     *
     * Floating sheets are dialogs with a close icon button. Clicking the close
     * icon button closes the sheet. Having the close icon button is mutually
     * exclusive with having action bar buttons (e.g. cancel and OK buttons).
     * The icon button is absolutely positioned.
     */
    sheet?: boolean;
    /**
     * Don't pad the content.
     */
    noContentPadding?: boolean;
    /**
     * A space separated list of CSS classes.
     */
    container$class?: string;
    /**
     * A space separated list of CSS classes.
     */
    surface$class?: string;

    children?: Snippet;
    /**
     * A spot to render another dialog over this one.
     *
     * According to the Material spec, you should only use this to put a choice
     * dialog over a fullscreen dialog.
     */
    over?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    open = $bindable(false),
    selection = false,
    escapeKeyAction = 'close',
    scrimClickAction = 'close',
    autoStackButtons = true,
    fullscreen = false,
    sheet = false,
    noContentPadding = false,
    container$class = '',
    surface$class = '',
    children,
    over,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['div'] as `container\$${k}`]?: SmuiElementPropMap['div'][k];
    } & {
      [k in keyof SmuiElementPropMap['div'] as `surface\$${k}`]?: SmuiElementPropMap['div'][k];
    } = $props();

  let element: HTMLDivElement;
  let instance: MDCDialogFoundation | undefined = $state();
  let eventManager = new SvelteEventManager();
  let internalClasses: { [k: string]: boolean } = $state({});
  let focusTrap: domFocusTrap.FocusTrap;
  let actionButtonsReversed = writable(false);
  let aboveFullscreen = getContext<boolean | undefined>(
    'SMUI:dialog:aboveFullscreen',
  );
  let aboveFullscreenShown =
    getContext<Writable<boolean> | undefined>(
      'SMUI:dialog:aboveFullscreenShown',
    ) ?? writable(false);
  let addLayoutListener = getContext<AddLayoutListener | undefined>(
    'SMUI:addLayoutListener',
  );
  let removeLayoutListener: RemoveLayoutListener | undefined;
  let layoutListeners: (() => void)[] = [];
  let addLayoutListenerFn: AddLayoutListener = (listener) => {
    layoutListeners.push(listener);

    return () => {
      const idx = layoutListeners.indexOf(listener);
      if (idx >= 0) {
        layoutListeners.splice(idx, 1);
      }
    };
  };

  setContext('SMUI:dialog:actions:reversed', actionButtonsReversed);
  setContext('SMUI:addLayoutListener', addLayoutListenerFn);
  setContext('SMUI:dialog:selection', selection);
  setContext('SMUI:dialog:aboveFullscreen', aboveFullscreen || fullscreen);
  setContext('SMUI:dialog:aboveFullscreenShown', aboveFullscreenShown);
  if (sheet) {
    setContext('SMUI:icon-button:context', 'dialog:sheet');
  }

  $effect(() => {
    if (instance && instance.getEscapeKeyAction() !== escapeKeyAction) {
      instance.setEscapeKeyAction(escapeKeyAction);
    }
  });

  $effect(() => {
    if (instance && instance.getScrimClickAction() !== scrimClickAction) {
      instance.setScrimClickAction(scrimClickAction);
    }
  });

  $effect(() => {
    if (instance && instance.getAutoStackButtons() !== autoStackButtons) {
      instance.setAutoStackButtons(autoStackButtons);
    }
  });

  $effect(() => {
    if (!autoStackButtons) {
      $actionButtonsReversed = true;
    }
  });

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  $effect(() => {
    if (instance && instance.isOpen() !== open) {
      if (open) {
        instance.open({
          isAboveFullscreenDialog: !!aboveFullscreen,
        });
      } else {
        instance.close();
      }
    }
  });

  let previousAboveFullscreenShown = $aboveFullscreenShown;
  $effect(() => {
    if (
      fullscreen &&
      instance &&
      previousAboveFullscreenShown !== $aboveFullscreenShown
    ) {
      previousAboveFullscreenShown = $aboveFullscreenShown;
      if ($aboveFullscreenShown) {
        instance.showSurfaceScrim();
      } else {
        instance.hideSurfaceScrim();
      }
    }
  });

  onMount(() => {
    focusTrap = new FocusTrap(element, {
      initialFocusEl: getInitialFocusEl() ?? undefined,
    });

    instance = new MDCDialogFoundation({
      addBodyClass: (className) => document.body.classList.add(className),
      addClass,
      areButtonsStacked: () => util.areTopsMisaligned(getButtonEls()),
      clickDefaultButton: () => {
        const defaultButton = getDefaultButtonEl();
        if (defaultButton) {
          defaultButton.click();
        }
      },
      eventTargetMatches: (target, selector) =>
        target ? matches(target as Element, selector) : false,
      getActionFromEvent: (evt) => {
        if (!evt.target) {
          return '';
        }
        const element = closest(
          evt.target as Element,
          '[data-mdc-dialog-action]',
        );
        return element && element.getAttribute('data-mdc-dialog-action');
      },
      getInitialFocusEl,
      hasClass,
      isContentScrollable: () => util.isScrollable(getContentEl()),
      notifyClosed: (action) => {
        open = false;
        dispatch(getElement(), 'SMUIDialogClosed', action ? { action } : {});
      },
      notifyClosing: (action) =>
        dispatch(getElement(), 'SMUIDialogClosing', action ? { action } : {}),
      notifyOpened: () => dispatch(getElement(), 'SMUIDialogOpened', {}),
      notifyOpening: () => dispatch(getElement(), 'SMUIDialogOpening', {}),
      releaseFocus: () => focusTrap.releaseFocus(),
      removeBodyClass: (className) => document.body.classList.remove(className),
      removeClass,
      reverseButtons: () => {
        $actionButtonsReversed = true;
      },
      trapFocus: () => focusTrap.trapFocus(),
      registerContentEventHandler: (evt, handler) => {
        const content = getContentEl();
        if (content instanceof HTMLElement) {
          eventManager.on(content, evt, handler);
        }
      },
      deregisterContentEventHandler: (evt, handler) => {
        const content = getContentEl();
        if (content instanceof HTMLElement) {
          eventManager.off(content, evt, handler);
        }
      },
      isScrollableContentAtTop: () => {
        return util.isScrollAtTop(getContentEl());
      },
      isScrollableContentAtBottom: () => {
        return util.isScrollAtBottom(getContentEl());
      },
      registerWindowEventHandler: (evt, handler) =>
        eventManager.on(window, evt, handler),
      deregisterWindowEventHandler: (evt, handler) =>
        eventManager.off(window, evt, handler),
    });

    instance.init();

    return () => {
      instance?.destroy();
      eventManager.clear();
    };
  });

  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });

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

  function getButtonEls() {
    return [].slice.call(
      getElement().querySelectorAll<HTMLButtonElement>('.mdc-dialog__button'),
    ) as HTMLButtonElement[];
  }

  function getDefaultButtonEl() {
    return getElement().querySelector<HTMLButtonElement>(
      '[data-mdc-dialog-button-default]',
    );
  }

  function getContentEl() {
    return getElement().querySelector<HTMLElement>('.mdc-dialog__content');
  }

  function getInitialFocusEl() {
    return getElement().querySelector<HTMLElement>(
      '[data-mdc-dialog-initial-focus]',
    );
  }

  function handleDialogOpening() {
    if (aboveFullscreen) {
      $aboveFullscreenShown = true;
    }
    requestAnimationFrame(() => {
      layoutListeners.forEach((listener) => listener());
    });
  }

  function handleDialogOpened() {
    layoutListeners.forEach((listener) => listener());
  }

  function handleDialogClosed() {
    if (aboveFullscreen) {
      $aboveFullscreenShown = false;
    }
  }

  export function isOpen() {
    return open;
  }

  export function setOpen(value: boolean) {
    open = value;
  }

  export function layout() {
    return instance?.layout();
  }

  export function getElement() {
    return element;
  }
</script>
