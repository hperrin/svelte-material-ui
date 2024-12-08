<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-tab-bar': true,
  })}
  role="tablist"
  {tabindex}
  {...exclude(restProps, ['tabScroller$'])}
  onkeydown={(e) => {
    if (instance) {
      instance.handleKeyDown(e);
    }
    restProps.onkeydown?.(e);
  }}
  onSMUITabInteracted={(e) => {
    if (instance) {
      instance.handleTabInteraction(e);
    }
    restProps.onSMUITabInteracted?.(e);
  }}
>
  <TabScroller
    bind:this={tabScroller}
    {...prefixFilter(restProps, 'tabScroller$')}
  >
    {#each tabs as tabKey (key(tabKey))}
      {@render tab(tabKey)}
    {/each}
  </TabScroller>
</div>

<script lang="ts" generics="TabKey extends Object | string | number">
  import { MDCTabBarFoundation } from '@material/tab-bar';
  import type { ComponentProps, Snippet } from 'svelte';
  import { onMount, setContext } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal';
  import type { SMUITabAccessor } from '@smui/tab';
  import TabScroller from '@smui/tab-scroller';

  type PrimitiveKey = string | number;
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
     * An array of tab objects.
     */
    tabs?: TabKey[];
    /**
     * A function that takes a tab object and returns a unique string or number.
     *
     * If your tabs are strings or numbers, you don't need this.
     */
    key?: (tab: TabKey) => PrimitiveKey;
    /**
     * Whether tabs should focus themselves when activated by the user.
     *
     * The user will always set focus to the tab when they click on it or tab to
     * it. Setting this to false just means that the user will focus on the tab
     * when they click on it like always, but will not focus the next tab if
     * they hit the right arrow key like they normally would.
     */
    focusOnActivate?: boolean;
    /**
     * Whether tabs should focus themselves when activated programmatically.
     */
    focusOnProgrammatic?: boolean;
    /**
     * Switches between automatic and manual activation modes.
     */
    useAutomaticActivation?: boolean;
    /**
     * The tab that is currently active.
     */
    active?: TabKey | undefined;
    /**
     * The tab index of the control.
     *
     * (This is the element's tabindex attribute, as in the index when cycling
     * focus with the Tab key, not anything to do with the tabs.)
     */
    tabindex?: number;

    tab: Snippet<[TabKey]>;
  };
  let {
    use = [],
    class: className = '',
    tabs = [],
    key = (tab) => tab as PrimitiveKey,
    focusOnActivate = true,
    focusOnProgrammatic = false,
    useAutomaticActivation = true,
    active = $bindable(),
    tabindex = 0,
    tab,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof ComponentProps<
        typeof TabScroller
      > as `tabScroller\$${k}`]?: ComponentProps<typeof TabScroller>[k];
    } = $props();

  let element: HTMLDivElement;
  let instance: MDCTabBarFoundation | undefined = $state();
  let tabScroller: TabScroller;
  let activeIndex = $state(
    active == null
      ? -1
      : tabs.findIndex((tab) => active && key(tab) === key(active)),
  );
  let tabAccessorMap: Record<PrimitiveKey, SMUITabAccessor> = $state({});
  let tabAccessorWeakMap = $state.raw(new WeakMap<Object, SMUITabAccessor>());
  let skipFocus = false;

  setContext('SMUI:tab:focusOnActivate', focusOnActivate);
  setContext('SMUI:tab:initialActive', {
    active: active == null ? null : key(active),
    key,
  });

  $effect(() => {
    if (
      (active == null && activeIndex !== -1) ||
      (active != null && activeIndex === -1) ||
      (active != null && key(active) !== key(tabs[activeIndex]))
    ) {
      activeIndex = tabs.findIndex((tab) => active && key(tab) === key(active));
      if (instance) {
        skipFocus = !focusOnProgrammatic;
        instance.activateTab(activeIndex);
        skipFocus = false;
      }
    }
  });

  $effect(() => {
    if (tabs.length) {
      // Manually get the accessor so it is reactive.
      const accessor =
        tabs[0] instanceof Object
          ? tabAccessorWeakMap.get(tabs[0])
          : tabAccessorMap[tabs[0] as PrimitiveKey];

      if (accessor) {
        accessor.forceAccessible(activeIndex === -1);
      }
    }
  });

  let setUseAutomaticActivation = false;
  $effect(() => {
    if (!instance) {
      setUseAutomaticActivation = false;
      return;
    }
    if (!setUseAutomaticActivation) {
      setUseAutomaticActivation = true;
      instance.setUseAutomaticActivation(useAutomaticActivation);
    }
  });

  setContext('SMUI:tab:mount', (accessor: SMUITabAccessor) => {
    addAccessor(accessor.tabId, accessor);
  });
  setContext('SMUI:tab:unmount', (accessor: SMUITabAccessor) => {
    removeAccessor(accessor.tabId);
  });

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
        instance?.activateTab(index);
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
      getIndexOfTabById: (id) =>
        tabs.findIndex((tab) => key(tab) === key(id as TabKey)),
      getTabListLength: () => tabs.length,
      notifyTabActivated: (index) =>
        dispatch(getElement(), 'SMUITabBarActivated', { index }),
    });

    instance.init();

    return () => {
      instance?.destroy();
    };
  });

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
    }
  }

  function removeAccessor(tabId: any) {
    if (tabId instanceof Object) {
      tabAccessorWeakMap.delete(tabId);
      tabAccessorWeakMap = tabAccessorWeakMap;
    } else {
      delete tabAccessorMap[tabId];
    }
  }

  export function scrollIntoView(index: number) {
    instance?.scrollIntoView(index);
  }

  export function getElement() {
    return element;
  }
</script>
