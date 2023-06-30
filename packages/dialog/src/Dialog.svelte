<svelte:window
  on:resize={() => open && instance && instance.layout()}
  on:orientationchange={() => open && instance && instance.layout()}
/>
<svelte:body
  on:keydown={instance && instance.handleDocumentKeydown.bind(instance)}
/>

<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
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
  on:SMUIDialog:opening={handleDialogOpening}
  on:SMUIDialog:opened={handleDialogOpened}
  on:SMUIDialog:closed={handleDialogClosed}
  on:click={instance && instance.handleClick.bind(instance)}
  on:keydown={instance && instance.handleKeydown.bind(instance)}
  {...exclude($$restProps, ['container$', 'surface$'])}
>
  <div
    class={classMap({
      [container$class]: true,
      'mdc-dialog__container': true,
    })}
    {...prefixFilter($$restProps, 'container$')}
  >
    <div
      class={classMap({
        [surface$class]: true,
        'mdc-dialog__surface': true,
      })}
      role="alertdialog"
      aria-modal="true"
      {...prefixFilter($$restProps, 'surface$')}
    >
      <slot />
      {#if fullscreen}
        <div
          class="mdc-dialog__surface-scrim"
          on:transitionend={() =>
            instance && instance.handleSurfaceScrimTransitionEnd()}
        />
      {/if}
    </div>
  </div>
  <div class="mdc-dialog__scrim" />
</div>

<slot name="over" />

<script lang="ts">
  import { MDCDialogFoundation, util } from '@material/dialog';
  import { focusTrap as domFocusTrap, ponyfill } from '@material/dom';
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { writable } from 'svelte/store';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type {
    AddLayoutListener,
    RemoveLayoutListener,
    SmuiAttrs,
    SmuiElementPropMap,
  } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal';

  const { FocusTrap } = domFocusTrap;
  const { closest, matches } = ponyfill;

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    open?: boolean;
    selection?: boolean;
    escapeKeyAction?: string;
    scrimClickAction?: string;
    autoStackButtons?: boolean;
    fullscreen?: boolean;
    /**
     * Floating sheets are dialogs with a close icon button. Clicking the close
     * icon button closes the sheet. Having the close icon button is mutually
     * exclusive with having action bar buttons (e.g. cancel and OK buttons).
     * The icon button is absolutely positioned.
     */
    sheet?: boolean;
    noContentPadding?: boolean;
    container$class?: string;
    surface$class?: string;
  };
  type $$Props = OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['div'] as `container\$${k}`]?: SmuiElementPropMap['div'][k];
    } & {
      [k in keyof SmuiElementPropMap['div'] as `surface\$${k}`]?: SmuiElementPropMap['div'][k];
    };

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let open = false;
  export let selection = false;
  export let escapeKeyAction = 'close';
  export let scrimClickAction = 'close';
  export let autoStackButtons = true;
  export let fullscreen = false;
  export let sheet = false;
  export let noContentPadding = false;
  export let container$class = '';
  export let surface$class = '';

  let element: HTMLDivElement;
  let instance: MDCDialogFoundation;
  let internalClasses: { [k: string]: boolean } = {};
  let focusTrap: domFocusTrap.FocusTrap;
  let actionButtonsReversed = writable(false);
  let aboveFullscreen = getContext<boolean | undefined>(
    'SMUI:dialog:aboveFullscreen'
  );
  let aboveFullscreenShown =
    getContext<Writable<boolean> | undefined>(
      'SMUI:dialog:aboveFullscreenShown'
    ) ?? writable(false);
  let addLayoutListener = getContext<AddLayoutListener | undefined>(
    'SMUI:addLayoutListener'
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

  $: if (instance && instance.getEscapeKeyAction() !== escapeKeyAction) {
    instance.setEscapeKeyAction(escapeKeyAction);
  }

  $: if (instance && instance.getScrimClickAction() !== scrimClickAction) {
    instance.setScrimClickAction(scrimClickAction);
  }

  $: if (instance && instance.getAutoStackButtons() !== autoStackButtons) {
    instance.setAutoStackButtons(autoStackButtons);
  }

  $: if (!autoStackButtons) {
    $actionButtonsReversed = true;
  }

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  $: if (instance && instance.isOpen() !== open) {
    if (open) {
      instance.open({
        isAboveFullscreenDialog: !!aboveFullscreen,
      });
    } else {
      instance.close();
    }
  }

  let previousAboveFullscreenShown = $aboveFullscreenShown;
  $: if (
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
          '[data-mdc-dialog-action]'
        );
        return element && element.getAttribute('data-mdc-dialog-action');
      },
      getInitialFocusEl,
      hasClass,
      isContentScrollable: () => util.isScrollable(getContentEl()),
      notifyClosed: (action) => {
        open = false;
        dispatch(
          getElement(),
          'SMUIDialog:closed',
          action ? { action } : {},
          undefined,
          true
        );
      },
      notifyClosing: (action) =>
        dispatch(
          getElement(),
          'SMUIDialog:closing',
          action ? { action } : {},
          undefined,
          true
        ),
      notifyOpened: () =>
        dispatch(getElement(), 'SMUIDialog:opened', {}, undefined, true),
      notifyOpening: () =>
        dispatch(getElement(), 'SMUIDialog:opening', {}, undefined, true),
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
          content.addEventListener(evt, handler);
        }
      },
      deregisterContentEventHandler: (evt, handler) => {
        const content = getContentEl();
        if (content instanceof HTMLElement) {
          content.removeEventListener(evt, handler);
        }
      },
      isScrollableContentAtTop: () => {
        return util.isScrollAtTop(getContentEl());
      },
      isScrollableContentAtBottom: () => {
        return util.isScrollAtBottom(getContentEl());
      },
      registerWindowEventHandler: (evt, handler) => {
        window.addEventListener(evt, handler);
      },
      deregisterWindowEventHandler: (evt, handler) => {
        window.removeEventListener(evt, handler);
      },
    });

    instance.init();

    return () => {
      instance.destroy();
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
      element.querySelectorAll<HTMLButtonElement>('.mdc-dialog__button')
    ) as HTMLButtonElement[];
  }

  function getDefaultButtonEl() {
    return element.querySelector<HTMLButtonElement>(
      '[data-mdc-dialog-button-default]'
    );
  }

  function getContentEl() {
    return element.querySelector<HTMLElement>('.mdc-dialog__content');
  }

  function getInitialFocusEl() {
    return element.querySelector<HTMLElement>(
      '[data-mdc-dialog-initial-focus]'
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
    return instance.layout();
  }

  export function getElement() {
    return element;
  }
</script>
