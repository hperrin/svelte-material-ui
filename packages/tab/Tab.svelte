<button
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-tab
    {className}
    {active ? 'mdc-tab--active' : ''}
    {stacked ? 'mdc-tab--stacked' : ''}
    {minWidth ? 'mdc-tab--min-width' : ''}
  "
  role="tab"
  aria-selected={active}
  tabindex="{active ? '0' : '-1'}"
  on:MDCTab:interacted={interactedHandler}
  {...exclude($$props, ['use', 'class', 'ripple', 'active', 'stacked', 'minWidth', 'indicatorSpanOnlyContent', 'focusOnActivate', 'content$', 'tabIndicator$'])}
>
  <span
    use:useActions={content$use}
    class="mdc-tab__content {content$class}"
    {...exclude(prefixFilter($$props, 'content$'), ['use', 'class'])}
  >
    <slot></slot>
    {#if indicatorSpanOnlyContent}
      <TabIndicator
        {active}
        {...prefixFilter($$props, 'tabIndicator$')}
      ><slot name="tab-indicator"></slot></TabIndicator>
    {/if}
  </span>
  {#if !indicatorSpanOnlyContent}
    <TabIndicator
      {active}
      {...prefixFilter($$props, 'tabIndicator$')}
    ><slot name="tab-indicator"></slot></TabIndicator>
  {/if}
  {#if ripple}
    <span class="mdc-tab__ripple"></span>
  {/if}
</button>

<script>
  import {MDCTab} from '@material/tab';
  import {onMount, onDestroy, setContext, getContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {prefixFilter} from '@smui/common/prefixFilter.js';
  import {useActions} from '@smui/common/useActions.js';
  import TabIndicator from '@smui/tab-indicator/TabIndicator.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component(), ['MDCTab:interacted']);
  let activeEntry = getContext('SMUI:tab:active');

  export let use = [];
  let className = '';
  export {className as class};
  let tabEntry;
  export {tabEntry as tab};
  export let ripple = true;
  export let active = tabEntry === activeEntry;
  export let stacked = false;
  export let minWidth = false;
  export let indicatorSpanOnlyContent = false;
  export let focusOnActivate = true;
  export let content$use = [];
  export let content$class = '';

  let element;
  let tab;
  let instantiate = getContext('SMUI:tab:instantiate');
  let getInstance = getContext('SMUI:tab:getInstance');
  let tabIndicatorPromiseResolve;
  let tabIndicatorPromise = new Promise(resolve => tabIndicatorPromiseResolve = resolve);

  setContext('SMUI:tab-indicator:instantiate', false);
  setContext('SMUI:tab-indicator:getInstance', getTabIndicatorInstancePromise);
  setContext('SMUI:label:context', 'tab');
  setContext('SMUI:icon:context', 'tab');

  if (!tabEntry) {
    throw new Error('The tab property is required! It should be passed down from the TabBar to the Tab.');
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
