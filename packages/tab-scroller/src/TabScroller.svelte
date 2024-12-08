<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-tab-scroller': true,
    'mdc-tab-scroller--align-start': align === 'start',
    'mdc-tab-scroller--align-end': align === 'end',
    'mdc-tab-scroller--align-center': align === 'center',
    ...internalClasses,
  })}
  {...exclude(restProps, ['scrollArea$', 'scrollContent$'])}
>
  <div
    bind:this={scrollArea}
    use:useActions={scrollArea$use}
    class={classMap({
      [scrollArea$class]: true,
      'mdc-tab-scroller__scroll-area': true,
      ...scrollAreaClasses,
    })}
    style={Object.entries(scrollAreaStyles)
      .map(([name, value]) => `${name}: ${value};`)
      .join(' ')}
    {...prefixFilter(restProps, 'scrollArea$')}
    onwheel={(e) => {
      if (instance) {
        instance.handleInteraction();
      }
      restProps.scrollArea$onwheel?.(e);
    }}
    ontouchstart={(e) => {
      if (instance) {
        instance.handleInteraction();
      }
      restProps.scrollArea$ontouchstart?.(e);
    }}
    onpointerdown={(e) => {
      if (instance) {
        instance.handleInteraction();
      }
      restProps.scrollArea$onpointerdown?.(e);
    }}
    onmousedown={(e) => {
      if (instance) {
        instance.handleInteraction();
      }
      restProps.scrollArea$onmousedown?.(e);
    }}
    onkeydown={(e) => {
      if (instance) {
        instance.handleInteraction();
      }
      restProps.scrollArea$onkeydown?.(e);
    }}
  >
    <div
      bind:this={scrollContent}
      use:useActions={scrollContent$use}
      class={classMap({
        [scrollContent$class]: true,
        'mdc-tab-scroller__scroll-content': true,
      })}
      style={Object.entries(scrollContentStyles)
        .map(([name, value]) => `${name}: ${value};`)
        .join(' ')}
      {...prefixFilter(restProps, 'scrollContent$')}
      ontransitionend={(e) => {
        if (instance) {
          instance.handleTransitionEnd(e);
        }
        restProps.scrollContent$ontransitionend?.(e);
      }}
    >
      {@render children?.()}
    </div>
  </div>
</div>

<script lang="ts">
  import { MDCTabScrollerFoundation, util } from '@material/tab-scroller';
  import { ponyfill } from '@material/dom';
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';
  import type { SmuiAttrs, SmuiElementPropMap } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal';

  const { matches } = ponyfill;

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
     * Where to align the tabs.
     */
    align?: 'start' | 'end' | 'center' | undefined;
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    scrollArea$use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    scrollArea$class?: string;
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    scrollContent$use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    scrollContent$class?: string;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    align = undefined,
    scrollArea$use = [],
    scrollArea$class = '',
    scrollContent$use = [],
    scrollContent$class = '',
    children,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['div'] as `scrollArea\$${k}`]?: SmuiElementPropMap['div'][k];
    } & {
      [k in keyof SmuiElementPropMap['div'] as `scrollContent\$${k}`]?: SmuiElementPropMap['div'][k];
    } = $props();

  let element: HTMLDivElement;
  let instance: MDCTabScrollerFoundation | undefined = $state();
  let scrollArea: HTMLDivElement;
  let scrollContent: HTMLDivElement;
  let internalClasses: { [k: string]: boolean } = $state({});
  let scrollAreaClasses: { [k: string]: boolean } = $state({});
  let scrollAreaStyles: { [k: string]: string } = $state({});
  let scrollContentStyles: { [k: string]: string } = $state({});

  onMount(() => {
    instance = new MDCTabScrollerFoundation({
      eventTargetMatchesSelector: (evtTarget, selector) =>
        matches(evtTarget as HTMLElement, selector),
      addClass,
      removeClass,
      addScrollAreaClass,
      setScrollAreaStyleProperty: addScrollAreaStyle,
      setScrollContentStyleProperty: addScrollContentStyle,
      getScrollContentStyleValue: getScrollContentStyle,
      setScrollAreaScrollLeft: (scrollX) => (scrollArea.scrollLeft = scrollX),
      getScrollAreaScrollLeft: () => scrollArea.scrollLeft,
      getScrollContentOffsetWidth: () => scrollContent.offsetWidth,
      getScrollAreaOffsetWidth: () => scrollArea.offsetWidth,
      computeScrollAreaClientRect: () => scrollArea.getBoundingClientRect(),
      computeScrollContentClientRect: () =>
        scrollContent.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () =>
        util.computeHorizontalScrollbarHeight(document),
    });

    instance.init();

    return () => {
      instance?.destroy();
    };
  });

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

  function addScrollAreaClass(className: string) {
    if (!scrollAreaClasses[className]) {
      scrollAreaClasses[className] = true;
    }
  }

  function addScrollAreaStyle(name: string, value: string) {
    if (scrollAreaStyles[name] != value) {
      if (value === '' || value == null) {
        delete scrollAreaStyles[name];
      } else {
        scrollAreaStyles[name] = value;
      }
    }
  }

  function addScrollContentStyle(name: string, value: string) {
    if (scrollContentStyles[name] != value) {
      if (value === '' || value == null) {
        delete scrollContentStyles[name];
      } else {
        scrollContentStyles[name] = value;
      }
    }
  }

  function getScrollContentStyle(name: string) {
    return name in scrollContentStyles
      ? scrollContentStyles[name]
      : getComputedStyle(scrollContent).getPropertyValue(name);
  }

  export function getScrollPosition() {
    if (instance == null) {
      throw new Error('Instance is undefined.');
    }
    return instance.getScrollPosition();
  }

  export function getScrollContentWidth() {
    return scrollContent.offsetWidth;
  }

  export function incrementScroll(scrollXIncrement: number) {
    instance?.incrementScroll(scrollXIncrement);
  }

  export function scrollTo(scrollX: number) {
    instance?.scrollTo(scrollX);
  }

  export function getElement() {
    return element;
  }
</script>
