<svelte:component
  this={component}
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
  on:click={handleClick}
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

<script
  lang="ts"
  generics="Href extends string | undefined = undefined, TagName extends SmuiHTMLElement = Href extends string ? 'a' : 'button'"
>
  import { MDCTabFoundation } from '@material/tab';
  import type { SvelteComponent, ComponentProps } from 'svelte';
  import { onMount, setContext, getContext } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal';
  import Ripple from '@smui/ripple';
  import type {
    SmuiHTMLElement,
    SmuiElementMap,
    SmuiElementPropMap,
    SmuiAttrs,
  } from '@smui/common';
  import { SmuiElement } from '@smui/common';
  import TabIndicator from '@smui/tab-indicator';

  import type { SMUITabAccessor } from './Tab.types.js';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    style?: string;
    tab: any;
    ripple?: boolean;
    stacked?: boolean;
    minWidth?: boolean;
    indicatorSpanOnlyContent?: boolean;
    href?: Href;
    content$use?: ActionArray;
    content$class?: string;
    component?: typeof SvelteComponent;
    tag?: TagName;
  };
  type $$Props = OwnProps &
    SmuiAttrs<TagName, keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['span'] as `content\$${k}`]?: SmuiElementPropMap['span'][k];
    } & {
      [k in keyof ComponentProps<TabIndicator> as `tabIndicator\$${k}`]?: ComponentProps<TabIndicator>[k];
    };

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
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

  let element: SvelteComponent;
  let instance: MDCTabFoundation;
  let content: HTMLSpanElement;
  let tabIndicator: TabIndicator;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};
  let internalAttrs: { [k: string]: string | undefined } = {};
  let focusOnActivate = getContext<boolean>('SMUI:tab:focusOnActivate');
  let active = tabId === getContext<any | undefined>('SMUI:tab:initialActive');
  let forceAccessible = false;

  export let component: typeof SvelteComponent = SmuiElement;
  export let tag: SmuiHTMLElement | undefined =
    component === SmuiElement ? (href == null ? 'button' : 'a') : undefined;

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
        dispatch(
          getElement(),
          'SMUITab:interacted',
          { tabId: tabId },
          undefined,
          true
        ),
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

  function handleClick(event: MouseEvent) {
    if (!event.defaultPrevented && instance) {
      instance.handleClick();
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

  export function getElement(): SmuiElementMap[TagName] {
    return element.getElement();
  }
</script>
