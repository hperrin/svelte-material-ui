<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-tab-bar': true,
  })}
  role="tablist"
  on:SMUI:tab:mount={(event) => handleTabMount(event)}
  on:SMUI:tab:unmount={(event) => handleTabUnmount(event)}
  on:keydown={(event) => instance && instance.handleKeyDown(event)}
  on:MDCTab:interacted={(event) =>
    instance && instance.handleTabInteraction(event)}
  {...exclude($$restProps, ['tabScroller$'])}
>
  <TabScroller
    bind:this={tabScroller}
    {...prefixFilter($$restProps, 'tabScroller$')}
  >
    {#each tabs as tab, i (key(tab))}
      <slot {tab} />
    {/each}
  </TabScroller>
</div>

<script>
  import { MDCTabBarFoundation } from '@material/tab-bar';
  import { onMount, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';
  import TabScroller from '@smui/tab-scroller/TabScroller.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let tabs = [];
  export let key = (tab) => tab;
  export let focusOnActivate = true;
  export let focusOnProgrammatic = false;
  export let useAutomaticActivation = true;
  export let active = null;

  let element;
  let instance;
  let tabScroller;
  let activeIndex = tabs.indexOf(active);
  let tabAccessorMap = {};
  let tabAccessorWeakMap = new WeakMap();
  let skipFocus = false;

  setContext('SMUI:tab:focusOnActivate', focusOnActivate);
  setContext('SMUI:tab:initialActive', active);

  $: if (active !== tabs[activeIndex]) {
    activeIndex = tabs.indexOf(active);
    if (instance) {
      skipFocus = !focusOnProgrammatic;
      instance.activateTab(activeIndex);
      skipFocus = false;
    }
  }

  $: if (tabs.length) {
    // Manually get the accessor so it is reactive.
    const accessor =
      tabs[0] instanceof Object
        ? tabAccessorWeakMap.get(tabs[0])
        : tabAccessorMap[tabs[0]];

    if (accessor) {
      accessor.forceAccessible(activeIndex === -1);
    }
  }

  $: if (instance) {
    instance.setUseAutomaticActivation(useAutomaticActivation);
  }

  onMount(() => {
    instance = new MDCTabBarFoundation({
      scrollTo: (scrollX) => tabScroller.scrollTo(scrollX),
      incrementScroll: (scrollXIncrement) =>
        tabScroller.incrementScroll(scrollXIncrement),
      getScrollPosition: () => tabScroller.getScrollPosition(),
      getScrollContentWidth: () => tabScroller.getScrollContentWidth(),
      getOffsetWidth: () => getElement().offsetWidth,
      isRTL: () =>
        getComputedStyle(getElement()).getPropertyValue('direction') === 'rtl',
      setActiveTab: (index) => {
        active = tabs[index];
        activeIndex = index;
        instance.activateTab(index);
      },
      activateTabAtIndex: (index, clientRect) =>
        getAccessor(tabs[index]).activate(clientRect, skipFocus),
      deactivateTabAtIndex: (index) => getAccessor(tabs[index]).deactivate(),
      focusTabAtIndex: (index) => getAccessor(tabs[index]).focus(),
      getTabIndicatorClientRectAtIndex: (index) =>
        getAccessor(tabs[index]).computeIndicatorClientRect(),
      getTabDimensionsAtIndex: (index) =>
        getAccessor(tabs[index]).computeDimensions(),
      getPreviousActiveTabIndex: () => {
        for (let i = 0; i < tabs.length; i++) {
          if (getAccessor(tabs[i]).active) {
            return i;
          }
        }
        return -1;
      },
      getFocusedTabIndex: () => {
        const tabElements = tabs.map((tab) => getAccessor(tab).element);
        const activeElement = document.activeElement;
        return tabElements.indexOf(activeElement);
      },
      getIndexOfTabById: (id) => tabs.indexOf(id),
      getTabListLength: () => tabs.length,
      notifyTabActivated: (index) =>
        dispatch(getElement(), 'MDCTabBar:activated', { index }),
    });

    instance.init();

    return () => {
      instance.destroy();
    };
  });

  function handleTabMount(event) {
    const accessor = event.detail;

    addAccessor(accessor.tabId, accessor);
  }

  function handleTabUnmount(event) {
    const accessor = event.detail;

    removeAccessor(accessor.tabId);
  }

  function getAccessor(tabId) {
    return tabId instanceof Object
      ? tabAccessorWeakMap.get(tabId)
      : tabAccessorMap[tabId];
  }

  function addAccessor(tabId, accessor) {
    if (tabId instanceof Object) {
      tabAccessorWeakMap.set(tabId, accessor);
      tabAccessorWeakMap = tabAccessorWeakMap;
    } else {
      tabAccessorMap[tabId] = accessor;
      tabAccessorMap = tabAccessorMap;
    }
  }

  function removeAccessor(tabId) {
    if (tabId instanceof Object) {
      tabAccessorWeakMap.delete(tabId);
      tabAccessorWeakMap = tabAccessorWeakMap;
    } else {
      delete tabAccessorMap[tabId];
      tabAccessorMap = tabAccessorMap;
    }
  }

  export function scrollIntoView(index) {
    instance.scrollIntoView(index);
  }

  export function getElement() {
    return element;
  }
</script>
