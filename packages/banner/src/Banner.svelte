<svelte:options runes />

<svelte:window onresize={layout} />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    'mdc-banner': true,
    'mdc-banner--centered': centered,
    'mdc-banner--mobile-stacked': mobileStacked,
    ...internalClasses,
    [className]: true,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  role="banner"
  {...exclude(restProps, ['content$', 'textWrapper$', 'graphic$'])}
  onSMUIBannerButtonPrimaryActionClick={(e) => {
    handlePrimaryActionClick();
    restProps.onSMUIBannerButtonPrimaryActionClick?.(e);
  }}
  onSMUIBannerButtonSecondaryActionClick={(e) => {
    handleSecondaryActionClick();
    restProps.onSMUIBannerButtonSecondaryActionClick?.(e);
  }}
>
  <Fixed {fixed} {width}>
    <div
      bind:this={content}
      class={classMap({
        [content$class]: true,
        'mdc-banner__content': true,
      })}
      role="alertdialog"
      aria-live="assertive"
      {...prefixFilter(restProps, 'content$')}
    >
      {#if icon || label}
        <div
          class={classMap({
            [textWrapper$class]: true,
            'mdc-banner__graphic-text-wrapper': true,
          })}
          {...prefixFilter(restProps, 'textWrapper$')}
        >
          {#if icon}
            <div
              class={classMap({
                [graphic$class]: true,
                'mdc-banner__graphic': true,
              })}
              role="img"
              {...altProp}
              {...prefixFilter(restProps, 'graphic$')}
            >
              {@render icon?.()}
            </div>
          {/if}
          {@render label?.()}
        </div>
      {/if}
      {#if actions}
        <div class="mdc-banner__actions">
          {@render actions?.()}
        </div>
      {/if}
    </div>
  </Fixed>
</div>

<script lang="ts">
  import { focusTrap as domFocusTrap } from '@smui/dom';
  import type { Snippet } from 'svelte';
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

  import { CloseReason, MDCBannerFoundation } from './mdc';
  import Fixed from './Fixed.svelte';

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
     * A list of CSS styles.
     */
    style?: string;
    /**
     * Whether the banner is open.
     */
    open?: boolean;
    /**
     * Whether the banner closes on button click.
     */
    autoClose?: boolean;
    /**
     * Whether the banner contents are centered.
     */
    centered?: boolean;
    /**
     * Fix the banner to the top of the container.
     */
    fixed?: boolean;
    /**
     * Stack the buttons under the content on mobile displays.
     */
    mobileStacked?: boolean;
    /**
     * A space separated list of CSS classes.
     */
    content$class?: string;
    /**
     * A space separated list of CSS classes.
     */
    textWrapper$class?: string;
    /**
     * A space separated list of CSS classes.
     */
    graphic$class?: string;

    children?: Snippet;

    icon?: Snippet;
    label?: Snippet;
    actions?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    style = '',
    open = $bindable(false),
    autoClose = true,
    centered = false,
    fixed = false,
    mobileStacked = false,
    content$class = '',
    textWrapper$class = '',
    graphic$class = '',
    children,
    icon,
    label,
    actions,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['div'] as `content\$${k}`]?: SmuiElementPropMap['div'][k];
    } & {
      [k in keyof SmuiElementPropMap['div'] as `textWrapper\$${k}`]?: SmuiElementPropMap['div'][k];
    } & {
      [k in keyof SmuiElementPropMap['div'] as `graphic\$${k}`]?: SmuiElementPropMap['div'][k];
    } = $props();

  let element: HTMLDivElement;
  let instance: MDCBannerFoundation | undefined = $state();
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalStyles: { [k: string]: string } = $state({});
  let content: HTMLDivElement;
  let focusTrap: domFocusTrap.FocusTrap | undefined;
  let addLayoutListener = getContext<AddLayoutListener | undefined>(
    'SMUI:addLayoutListener',
  );
  let removeLayoutListener: RemoveLayoutListener | undefined;
  let width: number | undefined = $state();

  // This is for a div that uses the role of "img". TS doesn't like it directly
  // on the element.
  const altProp = { alt: '' };

  setContext('SMUI:label:context', 'banner');
  setContext('SMUI:icon:context', 'banner');
  setContext('SMUI:button:context', 'banner');

  $effect(() => {
    if (instance && instance.isOpen() !== open) {
      if (open) {
        instance.open();
      } else {
        instance.close(CloseReason.UNSPECIFIED);
      }
    }
  });

  let previousMobileStacked = mobileStacked;
  $effect(() => {
    if (previousMobileStacked !== mobileStacked) {
      previousMobileStacked = mobileStacked;
      tick().then(layout);
    }
  });

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
      instance?.destroy();
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
    instance?.handlePrimaryActionClick(!autoClose);
  }

  function handleSecondaryActionClick() {
    instance?.handleSecondaryActionClick(!autoClose);
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
