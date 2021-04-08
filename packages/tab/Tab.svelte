<svelte:component
  this={component}
  bind:this={element}
  use={[
    [
      Ripple,
      {
        ripple,
        unbounded: false,
        addClass,
        removeClass,
      },
    ],
    forwardEvents,
    ...use,
  ]}
  forwardEvents={forwardedEvents}
  class={classMap({
    [className]: true,
    'mdc-tab': true,
    'mdc-tab--active': active,
    'mdc-tab--stacked': stacked,
    'mdc-tab--min-width': minWidth,
    ...internalClasses,
  })}
  role="tab"
  aria-selected={active ? 'true' : 'false'}
  tabindex={active ? '0' : '-1'}
  on:click={instance && instance.handleClick()}
  {...internalAttrs}
  {...exclude($$props, [
    'use',
    'class',
    'ripple',
    'stacked',
    'minWidth',
    'indicatorSpanOnlyContent',
    'component',
    'content$',
    'tabIndicator$',
  ])}
>
  <span
    bind:this={content}
    use:useActions={content$use}
    class={classMap({
      [content$class]: true,
      'mdc-tab__content': true,
    })}
    {...exclude(prefixFilter($$props, 'content$'), ['use', 'class'])}
  >
    <slot />
    {#if indicatorSpanOnlyContent}
      <TabIndicator
        bind:this={tabIndicator}
        {active}
        {...prefixFilter($$props, 'tabIndicator$')}
        ><slot name="tab-indicator" /></TabIndicator
      >
    {/if}
  </span>
  {#if !indicatorSpanOnlyContent}
    <TabIndicator
      bind:this={tabIndicator}
      {active}
      {...prefixFilter($$props, 'tabIndicator$')}
      ><slot name="tab-indicator" /></TabIndicator
    >
  {/if}
  <span class="mdc-tab__ripple" />
</svelte:component>

<script>
  import { MDCTabFoundation } from '@material/tab';
  import { onMount, setContext, getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';
  import Ripple from '@smui/ripple/bare.js';
  import A from '@smui/common/A.svelte';
  import Button from '@smui/common/Button.svelte';
  import TabIndicator from '@smui/tab-indicator/TabIndicator.svelte';

  const forwardedEvents = [
    'MDCTab:interacted',
    'SMUI:tab:mount',
    'SMUI:tab:unmount',
  ];
  const forwardEvents = forwardEventsBuilder(
    get_current_component(),
    forwardedEvents
  );

  export let use = [];
  let className = '';
  export { className as class };
  let tabId;
  export { tabId as tab };
  export let ripple = true;
  export let stacked = false;
  export let minWidth = false;
  export let indicatorSpanOnlyContent = false;
  // Purposely left out of props exclude.
  export let href = null;

  export let content$use = [];
  export let content$class = '';

  let element;
  let instance;
  let content;
  let tabIndicator;
  let internalClasses = {};
  let internalAttrs = {};
  let focusOnActivate = getContext('SMUI:tab:focusOnActivate');
  let active = tabId === getContext('SMUI:tab:initialActive');
  let accessor = {
    tabId,
    get element() {
      return getElement();
    },
    get active() {
      return active;
    },
    computeIndicatorClientRect: () => tabIndicator.computeContentClientRect(),
    computeDimensions: () => instance.computeDimensions(),
    focus,
    activate,
    deactivate,
  };

  export let component = href == null ? Button : A;

  setContext('SMUI:label:context', 'tab');
  setContext('SMUI:icon:context', 'tab');

  if (!tabId) {
    throw new Error(
      'The tab property is required! It should be passed down from the TabBar to the Tab.'
    );
  }

  $: if (instance) {
    instance.setFocusOnActivate(focusOnActivate);
  }

  onMount(() => {
    instance = new MDCTabFoundation({
      setAttr: addAttr,
      addClass,
      removeClass,
      hasClass,
      activateIndicator: (previousIndicatorClientRect) =>
        tabIndicator.activate(previousIndicatorClientRect),
      deactivateIndicator: () => tabIndicator.deactivate(),
      notifyInteracted: () =>
        dispatch(getElement(), 'MDCTab:interacted', { tabId: tabId }),
      getOffsetLeft: () => getElement().offsetLeft,
      getOffsetWidth: () => getElement().offsetWidth,
      getContentOffsetLeft: () => content.offsetLeft,
      getContentOffsetWidth: () => content.offsetWidth,
      focus,
    });

    dispatch(getElement(), 'SMUI:tab:mount', accessor);

    instance.init();

    return () => {
      dispatch(getElement(), 'SMUI:tab:unmount', accessor);

      instance.destroy();
    };
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

  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  export function activate(previousIndicatorClientRect) {
    active = true;
    instance.activate(previousIndicatorClientRect);
  }

  export function deactivate() {
    active = false;
    instance.deactivate();
  }

  export function focus() {
    getElement().focus();
  }

  export function getElement() {
    return element.getElement();
  }
</script>
