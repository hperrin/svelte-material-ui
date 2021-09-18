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
        addStyle,
      },
    ],
    forwardEvents,
    ...use,
  ]}
  class={classMap({
    [className]: true,
    'mdc-tab': true,
    'mdc-tab--active': active,
    'mdc-tab--stacked': stacked,
    'mdc-tab--min-width': minWidth,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  role="tab"
  aria-selected={active ? 'true' : 'false'}
  tabindex={active || forceAccessible ? '0' : '-1'}
  {href}
  on:click={() => instance && instance.handleClick()}
  {...internalAttrs}
  {...exclude($$restProps, ['content$', 'tabIndicator$'])}
>
  <span
    bind:this={content}
    use:useActions={content$use}
    class={classMap({
      [content$class]: true,
      'mdc-tab__content': true,
    })}
    {...prefixFilter($$restProps, 'content$')}
  >
    <slot />
    {#if indicatorSpanOnlyContent}
      <TabIndicator
        bind:this={tabIndicator}
        {active}
        {...prefixFilter($$restProps, 'tabIndicator$')}
        ><slot name="tab-indicator" /></TabIndicator
      >
    {/if}
  </span>
  {#if !indicatorSpanOnlyContent}
    <TabIndicator
      bind:this={tabIndicator}
      {active}
      {...prefixFilter($$restProps, 'tabIndicator$')}
      ><slot name="tab-indicator" /></TabIndicator
    >
  {/if}
  <span class="mdc-tab__ripple" />
</svelte:component>

<script lang="ts">
  import type { TabIndicatorComponentDev } from '@smui/tab-indicator';
  import { MDCTabFoundation } from '@material/tab';
  import { onMount, setContext, getContext } from 'svelte';
  import { get_current_component, SvelteComponentDev } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
    ActionArray,
  } from '@smui/common/internal/index.js';
  import Ripple from '@smui/ripple';
  import { A, Button } from '@smui/common/elements/index.js';
  import TabIndicator from '@smui/tab-indicator';

  import type { SMUITabAccessor } from './Tab.types.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  let tabId: any;
  export { tabId as tab };
  export let ripple = true;
  export let stacked = false;
  export let minWidth = false;
  export let indicatorSpanOnlyContent = false;
  export let href: string | undefined = undefined;
  export let content$use: ActionArray = [];
  export let content$class = '';

  let element: SvelteComponentDev;
  let instance: MDCTabFoundation;
  let content: HTMLSpanElement;
  let tabIndicator: TabIndicatorComponentDev;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};
  let internalAttrs: { [k: string]: string | undefined } = {};
  let focusOnActivate = getContext<boolean>('SMUI:tab:focusOnActivate');
  let active = tabId === getContext<any | undefined>('SMUI:tab:initialActive');
  let forceAccessible = false;

  export let component: typeof SvelteComponentDev = href == null ? Button : A;

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
      activateIndicator: (previousIndicatorClientRect: DOMRect) =>
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

    const accessor: SMUITabAccessor = {
      tabId,
      get element() {
        return getElement();
      },
      get active() {
        return active;
      },
      forceAccessible(accessible: boolean) {
        forceAccessible = accessible;
      },
      computeIndicatorClientRect: () => tabIndicator.computeContentClientRect(),
      computeDimensions: () => instance.computeDimensions(),
      focus,
      activate,
      deactivate,
    };

    dispatch(getElement(), 'SMUITab:mount', accessor);

    instance.init();

    return () => {
      dispatch(getElement(), 'SMUITab:unmount', accessor);

      instance.destroy();
    };
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

  function addAttr(name: string, value: string) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  export function activate(
    previousIndicatorClientRect: DOMRect | undefined,
    skipFocus: boolean
  ) {
    active = true;
    if (skipFocus) {
      instance.setFocusOnActivate(false);
    }
    instance.activate(previousIndicatorClientRect);
    if (skipFocus) {
      instance.setFocusOnActivate(focusOnActivate);
    }
  }

  export function deactivate() {
    active = false;
    instance.deactivate();
  }

  export function focus() {
    getElement().focus();
  }

  export function getElement(): HTMLElement {
    return element.getElement();
  }
</script>
