<svelte:window
  on:resize={() => open && instance && instance.layout()}
  on:orientationchange={() => open && instance && instance.layout()}
/>
<svelte:body
  on:keydown={(event) =>
    open && instance && instance.handleDocumentKeydown(event)} />

<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-dialog': true,
    'mdc-dialog--stacked': !autoStackButtons,
    'smui-dialog--selection': selection,
    ...internalClasses,
  })}
  role="alertdialog"
  aria-modal="true"
  on:MDCDialog:opening={handleDialogOpening}
  on:MDCDialog:opened={handleDialogOpened}
  on:click={(event) => instance && instance.handleClick(event)}
  on:keydown={(event) => instance && instance.handleKeydown(event)}
  {...exclude($$props, [
    'use',
    'class',
    'open',
    'selection',
    'escapeKeyAction',
    'scrimClickAction',
    'autoStackButtons',
  ])}
>
  <div class="mdc-dialog__container">
    <div class="mdc-dialog__surface" role="alertdialog" aria-modal="true">
      <slot />
    </div>
  </div>
  <div class="mdc-dialog__scrim" />
</div>

<script>
  import { MDCDialogFoundation, util } from '@material/dialog';
  import { FocusTrap } from '@material/dom/focus-trap';
  import { closest, matches } from '@material/dom/ponyfill';
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component(), [
    'MDCDialog:opening',
    'MDCDialog:opened',
    'MDCDialog:closing',
    'MDCDialog:closed',
  ]);

  export let use = [];
  let className = '';
  export { className as class };
  export let open = false;
  export let selection = false;
  export let escapeKeyAction = 'close';
  export let scrimClickAction = 'close';
  export let autoStackButtons = true;

  let element;
  let instance;
  let internalClasses = {};
  let focusTrap;
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;
  let layoutListeners = [];
  let addLayoutListenerFn = (listener) => {
    layoutListeners.push(listener);

    return () => {
      const idx = layoutListeners.indexOf(listener);
      if (idx >= 0) {
        layoutListeners.splice(idx, 1);
      }
    };
  };

  setContext('SMUI:addLayoutListener', addLayoutListenerFn);
  setContext('SMUI:dialog:selection', selection);

  $: if (instance && instance.getEscapeKeyAction() !== escapeKeyAction) {
    instance.setEscapeKeyAction(escapeKeyAction);
  }

  $: if (instance && instance.getScrimClickAction() !== scrimClickAction) {
    instance.setScrimClickAction(scrimClickAction);
  }

  $: if (instance && instance.getAutoStackButtons() !== autoStackButtons) {
    instance.setAutoStackButtons(autoStackButtons);
  }

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  $: if (instance && instance.isOpen() !== open) {
    if (open) {
      instance.open();
    } else {
      instance.close();
    }
  }

  onMount(() => {
    focusTrap = new FocusTrap(element, {
      initialFocusEl: getInitialFocusEl(),
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
        target ? matches(target, selector) : false,
      getActionFromEvent: (evt) => {
        if (!evt.target) {
          return '';
        }
        const element = closest(evt.target, '[data-mdc-dialog-action]');
        return element && element.getAttribute('data-mdc-dialog-action');
      },
      getInitialFocusEl: () => getInitialFocusEl(),
      hasClass,
      isContentScrollable: () => util.isScrollable(getContentEl()),
      notifyClosed: (action) => {
        open = false;
        dispatch(getElement(), 'MDCDialog:closed', action ? { action } : {});
      },
      notifyClosing: (action) =>
        dispatch(getElement(), 'MDCDialog:closing', action ? { action } : {}),
      notifyOpened: () => dispatch(getElement(), 'MDCDialog:opened', {}),
      notifyOpening: () => dispatch(getElement(), 'MDCDialog:opening', {}),
      releaseFocus: () => focusTrap.releaseFocus(),
      removeBodyClass: (className) => document.body.classList.remove(className),
      removeClass,
      reverseButtons: () => {
        // this.buttons.reverse();
        // this.buttons.forEach((button) => {
        //   button.parentElement!.appendChild(button);
        // });
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

  function getButtonEls() {
    return [].slice.call(element.querySelectorAll('.mdc-dialog__button'));
  }

  function getDefaultButtonEl() {
    return element.querySelector('[data-mdc-dialog-button-default');
  }

  function getContentEl() {
    return element.querySelector('.mdc-dialog__content');
  }

  function getInitialFocusEl() {
    return element.querySelector('[data-mdc-dialog-initial-focus]');
  }

  function handleDialogOpening() {
    requestAnimationFrame(() => {
      layoutListeners.forEach((listener) => listener());
    });
  }

  function handleDialogOpened() {
    layoutListeners.forEach((listener) => listener());
  }

  export function isOpen() {
    return open;
  }

  export function setOpen(value) {
    open = value;
  }

  export function layout() {
    return instance.layout();
  }

  export function getElement() {
    return element;
  }
</script>
