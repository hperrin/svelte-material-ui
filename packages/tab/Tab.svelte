<svelte:component
  this={component}
  bind:this={element}
  use={[forwardEvents, ...use]}
  forwardEvents={forwardedEvents}
  class="
    mdc-tab
    {className}
    {active
    ? 'mdc-tab--active'
    : ''}
    {stacked ? 'mdc-tab--stacked' : ''}
    {minWidth
    ? 'mdc-tab--min-width'
    : ''}
  "
  role="tab"
  aria-selected={active}
  tabindex={active ? '0' : '-1'}
  on:MDCTab:interacted={interactedHandler}
  {...exclude($$props, [
    'use',
    'class',
    'ripple',
    'active',
    'stacked',
    'minWidth',
    'indicatorSpanOnlyContent',
    'focusOnActivate',
    'component',
    'content$',
    'tabIndicator$',
  ])}
>
  <span
    use:useActions={content$use}
    class="mdc-tab__content {content$class}"
    {...exclude(prefixFilter($$props, 'content$'), ['use', 'class'])}
  >
    <slot />
    {#if indicatorSpanOnlyContent}
      <TabIndicator {active} {...prefixFilter($$props, 'tabIndicator$')}
        ><slot name="tab-indicator" /></TabIndicator
      >
    {/if}
  </span>
  {#if !indicatorSpanOnlyContent}
    <TabIndicator {active} {...prefixFilter($$props, 'tabIndicator$')}
      ><slot name="tab-indicator" /></TabIndicator
    >
  {/if}
  {#if ripple}
    <span class="mdc-tab__ripple" />
  {/if}
</svelte:component>

<script>
  import { MDCTab } from '@material/tab';
  import {
    onMount,
    onDestroy,
    setContext,
    getContext,
    createEventDispatcher,
  } from 'svelte';
  import {
    forwardEventsBuilder,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal.js';
  import A from '@smui/common/A.svelte';
  import Button from '@smui/common/Button.svelte';
  import TabIndicator from '@smui/tab-indicator/TabIndicator.svelte';

  const forwardedEvents = ['MDCTab:interacted'];
  const forwardEvents = forwardEventsBuilder(
    createEventDispatcher(),
    forwardedEvents
  );
  let activeEntry = getContext('SMUI:tab:active');

  export let use = [];
  let className = '';
  export { className as class };
  let tabEntry;
  export { tabEntry as tab };
  export let ripple = true;
  export let active = tabEntry === activeEntry;
  export let stacked = false;
  export let minWidth = false;
  export let indicatorSpanOnlyContent = false;
  export let focusOnActivate = true;
  // Purposely left out of props exclude.
  export let href = null;

  export let component = href == null ? Button : A;
  export let content$use = [];
  export let content$class = '';

  let element;
  let tab;
  let instantiate = getContext('SMUI:tab:instantiate');
  let getInstance = getContext('SMUI:tab:getInstance');
  let tabIndicatorPromiseResolve;
  let tabIndicatorPromise = new Promise(
    (resolve) => (tabIndicatorPromiseResolve = resolve)
  );
  $: hrefProp = href == null ? {} : { href };

  setContext('SMUI:tab-indicator:instantiate', false);
  setContext('SMUI:tab-indicator:getInstance', getTabIndicatorInstancePromise);
  setContext('SMUI:label:context', 'tab');
  setContext('SMUI:icon:context', 'tab');

  if (!tabEntry) {
    throw new Error(
      'The tab property is required! It should be passed down from the TabBar to the Tab.'
    );
  }

  $: if (tab && tab.active !== active) {
    active = tab.active;
  }

  $: if (tab) {
    tab.focusOnActivate = focusOnActivate;
  }

  onMount(async () => {
    if (instantiate !== false) {
      tab = new MDCTab(element);
    } else {
      tab = await getInstance(tabEntry);
    }
    tabIndicatorPromiseResolve(tab.tabIndicator_);
    if (!ripple) {
      tab.ripple_ && tab.ripple_.destroy();
    }
  });

  onDestroy(() => {
    tab && tab.destroy();
  });

  function getTabIndicatorInstancePromise() {
    return tabIndicatorPromise;
  }

  function interactedHandler() {
    active = tab.active;
  }

  export function activate(...args) {
    active = true;
    return tab.activate(...args);
  }

  export function deactivate(...args) {
    active = false;
    return tab.deactivate(...args);
  }

  export function focus(...args) {
    return tab.focus(...args);
  }

  export function computeIndicatorClientRect(...args) {
    return tab.computeIndicatorClientRect(...args);
  }

  export function computeDimensions(...args) {
    return tab.computeDimensions(...args);
  }
</script>
