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
  on:SMUI:banner:button:primaryActionClick={() =>
    instance && instance.handlePrimaryActionClick()}
  on:SMUI:banner:button:secondaryActionClick={() =>
    instance && instance.handleSecondaryActionClick()}
  {...exclude($$restProps, ['content$', 'textWrapper$', 'graphic$'])}
>
  <Fixed bind:fixed {width}>
    <div
      bind:this={content}
      class={classMap({
        [content$class]: true,
        'mdc-banner__content': true,
      })}
      role="status"
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

<script>
  import { MDCBannerFoundation } from '@material/banner';
  import { onMount, onDestroy, getContext, setContext, tick } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';
  import Fixed from './Fixed.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component(), [
    'MDCBanner:closed',
    'MDCBanner:closing',
    'MDCBanner:opened',
    'MDCBanner:opening',
  ]);

  export let use = [];
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

  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let content;
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;
  let width;

  setContext('SMUI:label:context', 'banner');
  setContext('SMUI:icon:context', 'banner');
  setContext('SMUI:button:context', 'banner');

  $: if (instance && instance.isOpen() !== open) {
    if (open) {
      instance.open();
    } else {
      instance.close();
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
        dispatch(getElement(), 'MDCBanner:closed', { reason });
      },
      notifyClosing: (reason) => {
        dispatch(getElement(), 'MDCBanner:closing', { reason });
      },
      notifyOpened: () => {
        open = true;
        dispatch(getElement(), 'MDCBanner:opened', {});
      },
      notifyOpening: () => {
        dispatch(getElement(), 'MDCBanner:opening', {});
      },
      removeClass,
      setStyleProperty: addStyle,
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

  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }

  export function isOpen() {
    return open;
  }

  export function setOpen(value) {
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
    instance.layout();
  }

  export function getElement() {
    return element;
  }
</script>
