<svelte:window on:resize={layout} />

<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-banner': true,
    'mdc-banner--centered': centered,
    'mdc-banner--mobile-stacked': mobileStacked,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  role="banner"
  on:SMUIBannerButton:primaryActionClick={handlePrimaryActionClick}
  on:SMUIBannerButton:secondaryActionClick={handleSecondaryActionClick}
  {...exclude($$restProps, ['content$', 'textWrapper$', 'graphic$'])}
>
  <Fixed bind:fixed {width}>
    <div
      bind:this={content}
      class={classMap({
        [content$class]: true,
        'mdc-banner__content': true,
      })}
      role="alertdialog"
      aria-live="assertive"
      {...prefixFilter($$restProps, 'content$')}
    >
      {#if $$slots.icon || $$slots.label}
        <div
          class={classMap({
            [textWrapper$class]: true,
            'mdc-banner__graphic-text-wrapper': true,
          })}
          {...prefixFilter($$restProps, 'textWrapper$')}
        >
          {#if $$slots.icon}
            <div
              class={classMap({
                [graphic$class]: true,
                'mdc-banner__graphic': true,
              })}
              role="img"
              alt=""
              {...prefixFilter($$restProps, 'graphic$')}
            >
              <slot name="icon" />
            </div>
          {/if}
          <slot name="label" />
        </div>
      {/if}
      {#if $$slots.actions}
        <div class="mdc-banner__actions">
          <slot name="actions" />
        </div>
      {/if}
    </div>
  </Fixed>
</div>

<script lang="ts">
  import { CloseReason, MDCBannerFoundation } from '@material/banner';
  import { focusTrap as domFocusTrap } from '@material/dom';
  import { onMount, onDestroy, getContext, setContext, tick } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import type { AddLayoutListener, RemoveLayoutListener } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal';

  import Fixed from './Fixed.svelte';

  const { FocusTrap } = domFocusTrap;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let open = false;
  export let centered = false;
  export let fixed = false;
  export let mobileStacked = false;
  export let content$class = '';
  export let textWrapper$class = '';
  export let graphic$class = '';

  let element: HTMLDivElement;
  let instance: MDCBannerFoundation;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};
  let content: HTMLDivElement;
  let focusTrap: domFocusTrap.FocusTrap | undefined;
  let addLayoutListener = getContext<AddLayoutListener | undefined>(
    'SMUI:addLayoutListener'
  );
  let removeLayoutListener: RemoveLayoutListener | undefined;
  let width: number | undefined = undefined;

  setContext('SMUI:label:context', 'banner');
  setContext('SMUI:icon:context', 'banner');
  setContext('SMUI:button:context', 'banner');

  $: if (instance && instance.isOpen() !== open) {
    if (open) {
      instance.open();
    } else {
      instance.close(CloseReason.UNSPECIFIED);
    }
  }

  let previousMobileStacked = mobileStacked;
  $: if (previousMobileStacked !== mobileStacked) {
    previousMobileStacked = mobileStacked;
    tick().then(layout);
  }

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  onMount(() => {
    focusTrap = new FocusTrap(element, {
      initialFocusEl: getPrimaryActionEl(),
    });

    instance = new MDCBannerFoundation({
      addClass,
      getContentHeight: () => {
        let offsetHeight = content.offsetHeight;
        if (offsetHeight === 0) {
          getElement().classList.add('smui-banner--force-show');
          offsetHeight = content.offsetHeight;
          getElement().classList.remove('smui-banner--force-show');
        }
        return offsetHeight;
      },
      notifyClosed: (reason) => {
        open = false;
        dispatch(
          getElement(),
          'SMUIBanner:closed',
          { reason },
          undefined,
          true
        );
      },
      notifyClosing: (reason) => {
        dispatch(
          getElement(),
          'SMUIBanner:closing',
          { reason },
          undefined,
          true
        );
      },
      notifyOpened: () => {
        open = true;
        dispatch(getElement(), 'SMUIBanner:opened', {}, undefined, true);
      },
      notifyOpening: () => {
        dispatch(getElement(), 'SMUIBanner:opening', {}, undefined, true);
      },
      releaseFocus: () => focusTrap && focusTrap.releaseFocus(),
      removeClass,
      setStyleProperty: addStyle,
      trapFocus: () => focusTrap && focusTrap.trapFocus(),
    });

    instance.init();
    layout();

    return () => {
      instance.destroy();
    };
  });

  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
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

  function getPrimaryActionEl(): HTMLElement | undefined {
    return (
      element.querySelector<HTMLElement>('.mdc-banner__primary-action') ??
      undefined
    );
  }

  function handlePrimaryActionClick() {
    instance.handlePrimaryActionClick();
  }

  function handleSecondaryActionClick() {
    instance.handleSecondaryActionClick();
  }

  export function isOpen() {
    return open;
  }

  export function setOpen(value: boolean) {
    open = value;
  }

  export function layout() {
    if (fixed) {
      width = element.offsetWidth;
      if (width === 0) {
        element.classList.add('smui-banner--force-show');
        width = element.offsetWidth;
        element.classList.remove('smui-banner--force-show');
      }
    }
    if (instance) {
      instance.layout();
    }
  }

  export function getElement() {
    return element;
  }
</script>
