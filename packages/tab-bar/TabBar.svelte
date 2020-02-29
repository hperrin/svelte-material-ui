<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-tab-bar {className}"
  role="tablist"
  on:MDCTabBar:activated={activatedHandler}
  {...exclude($$props, ['use', 'class', 'tabs', 'key', 'focusOnActivate', 'useAutomaticActivation', 'activeIndex', 'tabScroller$'])}
>
  <TabScroller
    {...prefixFilter($$props, 'tabScroller$')}
  >
    {#each tabs as tab, i (key(tab))}
      <slot {tab}></slot>
    {/each}
  </TabScroller>
</div>

<script>
  import {MDCTabBar} from '@material/tab-bar';
  import {onMount, onDestroy, setContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {prefixFilter} from '@smui/common/prefixFilter.js';
  import {useActions} from '@smui/common/useActions.js';
  import TabScroller from '@smui/tab-scroller/TabScroller.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component(), ['MDCTabBar:activated']);
  let uninitializedValue = () => {};

  export let use = [];
  let className = '';
  export {className as class};
  export let tabs = [];
  export let key = tab => tab;
  export let focusOnActivate = true;
  export let useAutomaticActivation = true;
  export let activeIndex = uninitializedValue;
  export let active = uninitializedValue;

  if (activeIndex === uninitializedValue && active === uninitializedValue) {
    activeIndex = 0;
    active = tabs[0];
  } else if (activeIndex === uninitializedValue) {
    activeIndex = tabs.indexOf(active);
  } else if (active === uninitializedValue) {
    active = tabs[activeIndex];
  }

  let element;
  let tabBar;
  let tabScrollerPromiseResolve;
  let tabScrollerPromise = new Promise(resolve => tabScrollerPromiseResolve = resolve);
  let tabPromiseResolve = [];
  let tabPromise = tabs.map((tab, i) => new Promise(resolve => tabPromiseResolve[i] = resolve));

  setContext('SMUI:tab-scroller:instantiate', false);
  setContext('SMUI:tab-scroller:getInstance', getTabScrollerInstancePromise);
  setContext('SMUI:tab:instantiate', false);
  setContext('SMUI:tab:getInstance', getTabInstancePromise);
  setContext('SMUI:tab:active', active);

  $: if (tabBar) {
    active = tabs[activeIndex];
  }

  $: if (tabBar) {
    tabBar.focusOnActivate = focusOnActivate;
  }

  $: if (tabBar) {
    tabBar.useAutomaticActivation = useAutomaticActivation;
  }

  let previousActiveIndex = activeIndex;
  $: if (tabBar && previousActiveIndex !== activeIndex) {
    activateTab(activeIndex);
  }

  let previousActive = active;
  $: if (tabBar && previousActive !== active) {
    activateTab(tabs.indexOf(active));
  }

  onMount(() => {
    tabBar = new MDCTabBar(element);
    tabScrollerPromiseResolve(tabBar.tabScroller_);
    for (let i = 0; i < tabs.length; i++) {
      tabPromiseResolve[i](tabBar.tabList_[i]);
    }
  });

  onDestroy(() => {
    tabBar && tabBar.destroy();
  });

  function getTabScrollerInstancePromise() {
    return tabScrollerPromise;
  }

  function getTabInstancePromise(tabEntry) {
    return tabPromise[tabs.indexOf(tabEntry)];
  }

  function updateIndexAfterActivate(index) {
    activeIndex = index;
    previousActiveIndex = index;
    active = tabs[index];
    previousActive = tabs[index];
  }

  function activatedHandler(e) {
    updateIndexAfterActivate(e.detail.index);
  }

  export function activateTab(index, ...args) {
    updateIndexAfterActivate(index);
    return tabBar.activateTab(index, ...args);
  }

  export function scrollIntoView(...args) {
    return tabBar.scrollIntoView(...args);
  }
</script>
