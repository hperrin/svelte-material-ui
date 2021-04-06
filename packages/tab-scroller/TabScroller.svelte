<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-tab-scroller': true,
  })}
  {...exclude($$props, ['use', 'class', 'scrollArea$', 'scrollContent$'])}
>
  <div
    use:useActions={scrollArea$use}
    class={classMap({
      [scrollArea$class]: true,
      'mdc-tab-scroller__scroll-area': true,
    })}
    {...exclude(prefixFilter($$props, 'scrollArea$'), ['use', 'class'])}
  >
    <div
      use:useActions={scrollContent$use}
      class={classMap({
        [scrollContent$class]: true,
        'mdc-tab-scroller__scroll-content': true,
      })}
      {...exclude(prefixFilter($$props, 'scrollContent$'), ['use', 'class'])}
    >
      <slot />
    </div>
  </div>
</div>

<script>
  import { MDCTabScroller } from '@material/tab-scroller';
  import { onMount, onDestroy, getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let scrollArea$use = [];
  export let scrollArea$class = '';
  export let scrollContent$use = [];
  export let scrollContent$class = '';

  let element;
  let tabScroller;
  let instantiate = getContext('SMUI:tab-scroller:instantiate');
  let getInstance = getContext('SMUI:tab-scroller:getInstance');

  onMount(() => {
    if (instantiate !== false) {
      tabScroller = new MDCTabScroller(element);
    } else {
      // tabScroller = await getInstance();
    }
  });

  onDestroy(() => {
    tabScroller && tabScroller.destroy();
  });

  export function scrollTo(...args) {
    return tabScroller.scrollTo(...args);
  }

  export function incrementScroll(...args) {
    return tabScroller.incrementScroll(...args);
  }

  export function getScrollPosition(...args) {
    return tabScroller.getScrollPosition(...args);
  }

  export function getScrollContentWidth(...args) {
    return tabScroller.getScrollContentWidth(...args);
  }

  export function getElement() {
    return element;
  }
</script>
