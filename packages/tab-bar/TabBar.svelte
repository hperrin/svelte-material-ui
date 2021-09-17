<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-tab-bar': true,
  })}
  role="tablist"
  on:SMUITab:mount={handleTabMount}
  on:SMUITab:unmount={handleTabUnmount}
  on:MDCTab:interacted={(event) =>
    instance && instance.handleTabInteraction(event)}
  on:keydown={(event) => instance && instance.handleKeyDown(event)}
  {...exclude($$restProps, ['tabScroller$'])}
>
  <TabScroller
    bind:this={tabScroller}
    {...prefixFilter($$restProps, 'tabScroller$')}
  >
    {#each tabs as tab (key(tab))}
      <slot {tab} />
    {/each}
  </TabScroller>
</div>

<script lang="ts">
  import type { SMUITabAccessor } from '@smui/tab';
  import type { TabScrollerComponentDev } from '@smui/tab-scroller';
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
    ActionArray,
  } from '@smui/common/internal/index.js';
  import TabScroller from '@smui/tab-scroller';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let tabs: any[] = [];
  export let key: (tab: any) => string | number = (tab) => tab;
  export let focusOnActivate = true;
  export let focusOnProgrammatic = false;
  export let useAutomaticActivation = true;
  export let active: any | undefined = undefined;

  let element: HTMLDivElement;
  let instance: MDCTabBarFoundation;
  let tabScroller: TabScrollerComponentDev;
  let activeIndex = tabs.indexOf(active);
  let tabAccessorMap: {
    [k: string]: SMUITabAccessor;
    [k: number]: SMUITabAccessor;
  } = {};
  let tabAccessorWeakMap = new WeakMap<Object, SMUITabAccessor>();
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
        getAccessor(tabs[index])?.activate(clientRect as DOMRect, skipFocus),
      deactivateTabAtIndex: (index) => getAccessor(tabs[index])?.deactivate(),
      focusTabAtIndex: (index) => getAccessor(tabs[index])?.focus(),
      getTabIndicatorClientRectAtIndex: (index) =>
        getAccessor(tabs[index])?.computeIndicatorClientRect() ?? new DOMRect(),
      getTabDimensionsAtIndex: (index) =>
        getAccessor(tabs[index])?.computeDimensions() ?? {
          rootLeft: 0,
          rootRight: 0,
          contentLeft: 0,
          contentRight: 0,
        },
      getPreviousActiveTabIndex: () => {
        for (let i = 0; i < tabs.length; i++) {
          if (getAccessor(tabs[i])?.active) {
            return i;
          }
        }
        return -1;
      },
      getFocusedTabIndex: () => {
        const tabElements = tabs.map((tab) => getAccessor(tab)?.element);
        const activeElement = document.activeElement;
        return tabElements.indexOf(activeElement as HTMLElement);
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

  function handleTabMount(event: CustomEvent<SMUITabAccessor>) {
    const accessor = event.detail;

    addAccessor(accessor.tabId, accessor);
  }

  function handleTabUnmount(event: CustomEvent<SMUITabAccessor>) {
    const accessor = event.detail;

    removeAccessor(accessor.tabId);
  }

  function getAccessor(tabId: any) {
    return tabId instanceof Object
      ? tabAccessorWeakMap.get(tabId)
      : tabAccessorMap[tabId];
  }

  function addAccessor(tabId: any, accessor: SMUITabAccessor) {
    if (tabId instanceof Object) {
      tabAccessorWeakMap.set(tabId, accessor);
      tabAccessorWeakMap = tabAccessorWeakMap;
    } else {
      tabAccessorMap[tabId] = accessor;
      tabAccessorMap = tabAccessorMap;
    }
  }

  function removeAccessor(tabId: any) {
    if (tabId instanceof Object) {
      tabAccessorWeakMap.delete(tabId);
      tabAccessorWeakMap = tabAccessorWeakMap;
    } else {
      delete tabAccessorMap[tabId];
      tabAccessorMap = tabAccessorMap;
    }
  }

  export function scrollIntoView(index: number) {
    instance.scrollIntoView(index);
  }

  export function getElement() {
    return element;
  }
</script>
