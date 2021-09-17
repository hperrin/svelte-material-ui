<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-tab-scroller': true,
    'mdc-tab-scroller--align-start': align === 'start',
    'mdc-tab-scroller--align-end': align === 'end',
    'mdc-tab-scroller--align-center': align === 'center',
    ...internalClasses,
  })}
  {...exclude($$restProps, ['scrollArea$', 'scrollContent$'])}
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
    on:wheel={() => instance && instance.handleInteraction()}
    on:touchstart={() => instance && instance.handleInteraction()}
    on:pointerdown={() => instance && instance.handleInteraction()}
    on:mousedown={() => instance && instance.handleInteraction()}
    on:keydown={() => instance && instance.handleInteraction()}
    {...prefixFilter($$restProps, 'scrollArea$')}
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
      on:transitionend={(event) =>
        instance && instance.handleTransitionEnd(event)}
      {...prefixFilter($$restProps, 'scrollContent$')}
    >
      <slot />
    </div>
  </div>
</div>

<script lang="ts">
  import { MDCTabScrollerFoundation, util } from '@material/tab-scroller';
  import { ponyfill } from '@material/dom';
  import { onMount } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    ActionArray,
  } from '@smui/common/internal/index.js';
  const { matches } = ponyfill;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let align: 'start' | 'end' | 'center' | undefined = undefined;
  export let scrollArea$use: ActionArray = [];
  export let scrollArea$class = '';
  export let scrollContent$use: ActionArray = [];
  export let scrollContent$class = '';

  let element: HTMLDivElement;
  let instance: MDCTabScrollerFoundation;
  let scrollArea: HTMLDivElement;
  let scrollContent: HTMLDivElement;
  let internalClasses: { [k: string]: boolean } = {};
  let scrollAreaClasses: { [k: string]: boolean } = {};
  let scrollAreaStyles: { [k: string]: string } = {};
  let scrollContentStyles: { [k: string]: string } = {};

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
      instance.destroy();
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
        scrollAreaStyles = scrollAreaStyles;
      } else {
        scrollAreaStyles[name] = value;
      }
    }
  }

  function addScrollContentStyle(name: string, value: string) {
    if (scrollContentStyles[name] != value) {
      if (value === '' || value == null) {
        delete scrollContentStyles[name];
        scrollContentStyles = scrollContentStyles;
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
    return instance.getScrollPosition();
  }

  export function getScrollContentWidth() {
    return scrollContent.offsetWidth;
  }

  export function incrementScroll(scrollXIncrement: number) {
    instance.incrementScroll(scrollXIncrement);
  }

  export function scrollTo(scrollX: number) {
    instance.scrollTo(scrollX);
  }

  export function getElement() {
    return element;
  }
</script>
