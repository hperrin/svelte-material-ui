<svelte:options runes />

<MyComponent
  {tag}
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
  {...internalAttrs}
  {...exclude(restProps, ['content$', 'tabIndicator$'])}
  onclick={(e: MouseEvent) => {
    restProps.onclick?.(e);
    if (!e.defaultPrevented && instance) {
      instance.handleClick();
    }
  }}
>
  <span
    bind:this={content}
    use:useActions={content$use}
    class={classMap({
      [content$class]: true,
      'mdc-tab__content': true,
    })}
    {...prefixFilter(restProps, 'content$')}
  >
    {@render children?.()}
    {#if indicatorSpanOnlyContent}
      {@render tabIndicatorSnippet()}
    {/if}
  </span>
  {#if !indicatorSpanOnlyContent}
    {@render tabIndicatorSnippet()}
  {/if}
  <span class="mdc-tab__ripple"></span>
</MyComponent>

{#snippet tabIndicatorSnippet()}
  <TabIndicator
    bind:this={tabIndicatorInstance}
    bind:active
    {...prefixFilter(restProps, 'tabIndicator$')}
    >{@render tabIndicator?.()}</TabIndicator
  >
{/snippet}

<script
  lang="ts"
  generics="Href extends string | undefined = undefined, TagName extends SmuiHTMLElement = Href extends string ? 'a' : 'button'"
>
  import { MDCTabFoundation } from '@material/tab';
  import type { ComponentProps, Snippet } from 'svelte';
  import { onMount, setContext, getContext } from 'svelte';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal';
  import Ripple from '@smui/ripple';
  import type {
    SmuiComponent,
    SmuiHTMLElement,
    SmuiElementMap,
    SmuiElementPropMap,
    SmuiAttrs,
  } from '@smui/common';
  import { SmuiElement } from '@smui/common';
  import TabIndicator from '@smui/tab-indicator';

  import type { SMUITabAccessor } from './Tab.types.js';

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
     * A list of CSS styles.
     */
    style?: string;
    /**
     * The tab object this tab is for.
     */
    tab: any;
    /**
     * Whether to show a ripple animation.
     */
    ripple?: boolean;
    /**
     * Whether to stack the contents of the tab.
     */
    stacked?: boolean;
    /**
     * Whether to use minimum width possible.
     */
    minWidth?: boolean;
    /**
     * Whether the indicator spans only the content instead of the whole tab.
     */
    indicatorSpanOnlyContent?: boolean;
    /**
     * If provided, the tab will act as a link.
     */
    href?: Href;
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    content$use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    content$class?: string;
    /**
     * The component to use to render the element.
     */
    component?: SmuiComponent<SmuiElementMap[TagName]>;
    /**
     * The tag name of the element to create.
     */
    tag?: TagName;

    children?: Snippet;
    /**
     * A spot for the tab indicator content.
     */
    tabIndicator?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    style = '',
    tab: tabId,
    ripple = true,
    stacked = false,
    minWidth = false,
    indicatorSpanOnlyContent = false,
    href = undefined,
    content$use = [],
    content$class = '',
    component: MyComponent = SmuiElement,
    tag = (href == null ? 'button' : 'a') as TagName,
    children,
    tabIndicator,
    ...restProps
  }: OwnProps &
    SmuiAttrs<TagName, keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['span'] as `content\$${k}`]?: SmuiElementPropMap['span'][k];
    } & {
      [k in keyof ComponentProps<
        typeof TabIndicator
      > as `tabIndicator\$${k}`]?: ComponentProps<typeof TabIndicator>[k];
    } = $props();

  let element: ReturnType<SmuiComponent<SmuiElementMap[TagName]>>;
  let instance: MDCTabFoundation | undefined = $state();
  let content: HTMLSpanElement;
  let tabIndicatorInstance: TabIndicator;
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalStyles: { [k: string]: string } = $state({});
  let internalAttrs: { [k: string]: string | undefined } = $state({});
  let focusOnActivate = getContext<boolean>('SMUI:tab:focusOnActivate');
  const initialActive = getContext<{
    active: string | number | null | undefined;
    key: (tab: any) => string | number;
  }>('SMUI:tab:initialActive');
  let active = $state(
    initialActive.active != null &&
      initialActive.key(tabId) === initialActive.active,
  );
  let forceAccessible = $state(false);

  setContext('SMUI:label:context', 'tab');
  setContext('SMUI:icon:context', 'tab');

  if (!tabId) {
    throw new Error(
      'The tab property is required! It should be passed down from the TabBar to the Tab.',
    );
  }

  let setFocusOnActivate = false;
  $effect(() => {
    if (!instance) {
      setFocusOnActivate = false;
      return;
    }
    if (!setFocusOnActivate) {
      setFocusOnActivate = true;
      instance.setFocusOnActivate(focusOnActivate);
    }
  });

  const SMUITabMount = getContext<
    ((accessor: SMUITabAccessor) => void) | undefined
  >('SMUI:tab:mount');
  const SMUITabUnmount = getContext<
    ((accessor: SMUITabAccessor) => void) | undefined
  >('SMUI:tab:unmount');

  onMount(() => {
    instance = new MDCTabFoundation({
      setAttr: addAttr,
      addClass,
      removeClass,
      hasClass,
      activateIndicator: (previousIndicatorClientRect: DOMRect) =>
        tabIndicatorInstance.activate(previousIndicatorClientRect),
      deactivateIndicator: () => tabIndicatorInstance.deactivate(),
      notifyInteracted: () =>
        dispatch(getElement(), 'SMUITabInteracted', { tabId }),
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
      computeIndicatorClientRect: () =>
        tabIndicatorInstance.computeContentClientRect(),
      computeDimensions: () => {
        if (instance == null) {
          throw new Error('Instance is undefined.');
        }
        return instance.computeDimensions();
      },
      focus,
      activate,
      deactivate,
    };

    SMUITabMount && SMUITabMount(accessor);

    instance.init();

    return () => {
      SMUITabUnmount && SMUITabUnmount(accessor);

      instance?.destroy();
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
    skipFocus: boolean,
  ) {
    active = true;
    if (skipFocus) {
      instance?.setFocusOnActivate(false);
    }
    instance?.activate(previousIndicatorClientRect);
    if (skipFocus) {
      instance?.setFocusOnActivate(focusOnActivate);
    }
  }

  export function deactivate() {
    active = false;
    instance?.deactivate();
  }

  export function focus() {
    getElement().focus();
  }

  export function getElement() {
    return element.getElement();
  }
</script>
