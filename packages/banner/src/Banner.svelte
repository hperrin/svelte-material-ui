<svelte:options runes={false} />

<svelte:window onresize={layout} />

<div
  bind:this={element}
  use:useActions={use}
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
  {...exclude($$restProps, ['content$', 'textWrapper$', 'graphic$'])}
  onSMUIBannerButtonPrimaryActionClick={(e) => {
    handlePrimaryActionClick();
    $$restProps.onSMUIBannerButtonPrimaryActionClick?.(e);
  }}
  onSMUIBannerButtonSecondaryActionClick={(e) => {
    handleSecondaryActionClick();
    $$restProps.onSMUIBannerButtonSecondaryActionClick?.(e);
  }}
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
              {...altProp}
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
  } from '@smui/common/internal';

  import Fixed from './Fixed.svelte';

  const { FocusTrap } = domFocusTrap;

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    style?: string;
    open?: boolean;
    autoClose?: false;
    centered?: boolean;
    fixed?: boolean;
    mobileStacked?: boolean;
    content$class?: string;
    textWrapper$class?: string;
    graphic$class?: string;
  };
  type $$Props = OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['div'] as `content\$${k}`]?: SmuiElementPropMap['div'][k];
    } & {
      [k in keyof SmuiElementPropMap['div'] as `textWrapper\$${k}`]?: SmuiElementPropMap['div'][k];
    } & {
      [k in keyof SmuiElementPropMap['div'] as `graphic\$${k}`]?: SmuiElementPropMap['div'][k];
    };

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let open = false;
  export let autoClose = true;
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
    'SMUI:addLayoutListener',
  );
  let removeLayoutListener: RemoveLayoutListener | undefined;
  let width: number | undefined = undefined;

  // This is for a div that uses the role of "img". TS doesn't like it directly
  // on the element.
  const altProp = { alt: '' };

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
    let initialFocusEl = getPrimaryActionEl();
    if (initialFocusEl) {
      focusTrap = new FocusTrap(element, { initialFocusEl });
    }

    instance = new MDCBannerFoundation({
      addClass,
      getContentHeight: () => {
        let offsetHeight = content.offsetHeight;
        if (offsetHeight === 0) {
          getElement().classList.add('smui-banner--force-show');
          if (width) {
            content.style.setProperty('width', `${width}px`);
          }
          offsetHeight = content.offsetHeight;
          getElement().classList.remove('smui-banner--force-show');
          if (width) {
            content.style.removeProperty('width');
          }
        }
        return offsetHeight;
      },
      notifyClosed: (reason) => {
        open = false;
        dispatch(getElement(), 'SMUIBannerClosed', { reason });
      },
      notifyClosing: (reason) =>
        dispatch(getElement(), 'SMUIBannerClosing', { reason }),
      notifyOpened: () => {
        open = true;
        dispatch(getElement(), 'SMUIBannerOpened', {});
      },
      notifyOpening: () => dispatch(getElement(), 'SMUIBannerOpening', {}),
      notifyActionClicked: (action) =>
        dispatch(getElement(), 'SMUIBannerActionClicked', { action }),
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
      getElement().querySelector<HTMLElement>('.mdc-banner__primary-action') ??
      undefined
    );
  }

  function handlePrimaryActionClick() {
    instance.handlePrimaryActionClick(!autoClose);
  }

  function handleSecondaryActionClick() {
    instance.handleSecondaryActionClick(!autoClose);
  }

  export function isOpen() {
    return open;
  }

  export function setOpen(value: boolean) {
    open = value;
  }

  export function layout() {
    if (fixed) {
      width = getElement().offsetWidth;
      if (width === 0) {
        getElement().classList.add('smui-banner--force-show');
        width = getElement().offsetWidth;
        getElement().classList.remove('smui-banner--force-show');
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
