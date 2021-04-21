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

<script>
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
  } from '@smui/common/internal.js';
  const { matches } = ponyfill;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let align = null;
  export let scrollArea$use = [];
  export let scrollArea$class = '';
  export let scrollContent$use = [];
  export let scrollContent$class = '';

  let element;
  let instance;
  let scrollArea;
  let scrollContent;
  let internalClasses = {};
  let scrollAreaClasses = {};
  let scrollAreaStyles = {};
  let scrollContentStyles = {};

  onMount(() => {
    instance = new MDCTabScrollerFoundation({
      eventTargetMatchesSelector: (evtTarget, selector) =>
        matches(evtTarget, selector),
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

  function addClass(className) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  function addScrollAreaClass(className) {
    if (!scrollAreaClasses[className]) {
      scrollAreaClasses[className] = true;
    }
  }

  function addScrollAreaStyle(name, value) {
    if (scrollAreaStyles[name] != value) {
      if (value === '' || value == null) {
        delete scrollAreaStyles[name];
        scrollAreaStyles = scrollAreaStyles;
      } else {
        scrollAreaStyles[name] = value;
      }
    }
  }

  function addScrollContentStyle(name, value) {
    if (scrollContentStyles[name] != value) {
      if (value === '' || value == null) {
        delete scrollContentStyles[name];
        scrollContentStyles = scrollContentStyles;
      } else {
        scrollContentStyles[name] = value;
      }
    }
  }

  function getScrollContentStyle(name) {
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

  export function incrementScroll(scrollXIncrement) {
    instance.incrementScroll(scrollXIncrement);
  }

  export function scrollTo(scrollX) {
    instance.scrollTo(scrollX);
  }

  export function getElement() {
    return element;
  }
</script>
