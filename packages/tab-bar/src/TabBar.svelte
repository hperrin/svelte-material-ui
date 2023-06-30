<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-tab-bar': true,
  })}
  role="tablist"
  {tabindex}
  on:SMUITab:mount={handleTabMount}
  on:SMUITab:unmount={handleTabUnmount}
  on:SMUITab:interacted={instance &&
    instance.handleTabInteraction.bind(instance)}
  on:keydown={instance && instance.handleKeyDown.bind(instance)}
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

<script lang="ts" generics="TabKey extends Object | string | number">
  import { MDCTabBarFoundation } from '@material/tab-bar';
  import type { ComponentProps } from 'svelte';
  import { onMount, setContext } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal';
  import type { SMUITabAccessor } from '@smui/tab';
  import TabScroller from '@smui/tab-scroller';

  type PrimitiveKey = string | number;
  interface $$Slots {
    default: { tab: TabKey };
  }
  type OwnProps = {
    use?: ActionArray;
    class?: string;
    tabs?: TabKey[];
    key?: (tab: TabKey) => PrimitiveKey;
    focusOnActivate?: boolean;
    focusOnProgrammatic?: boolean;
    useAutomaticActivation?: boolean;
    active?: TabKey | undefined;
    tabindex?: number;
  };
  type $$Props = OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof ComponentProps<TabScroller> as `tabScroller\$${k}`]?: ComponentProps<TabScroller>[k];
    };

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let tabs: TabKey[] = [];
  export let key: (tab: TabKey) => PrimitiveKey = (tab) => tab as PrimitiveKey;
  export let focusOnActivate = true;
  export let focusOnProgrammatic = false;
  export let useAutomaticActivation = true;
  export let active: TabKey | undefined = undefined;
  export let tabindex = 0;

  let element: HTMLDivElement;
  let instance: MDCTabBarFoundation;
  let tabScroller: TabScroller;
  let activeIndex = tabs.indexOf(active!);
  let tabAccessorMap: Record<PrimitiveKey, SMUITabAccessor> = {};
  let tabAccessorWeakMap = new WeakMap<Object, SMUITabAccessor>();
  let skipFocus = false;

  setContext('SMUI:tab:focusOnActivate', focusOnActivate);
  setContext('SMUI:tab:initialActive', active);

  $: if (active !== tabs[activeIndex]) {
    activeIndex = tabs.indexOf(active!);
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
        : tabAccessorMap[tabs[0] as PrimitiveKey];

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
      getIndexOfTabById: (id) => tabs.indexOf(id as TabKey),
      getTabListLength: () => tabs.length,
      notifyTabActivated: (index) =>
        dispatch(
          getElement(),
          'SMUITabBar:activated',
          { index },
          undefined,
          true
        ),
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
