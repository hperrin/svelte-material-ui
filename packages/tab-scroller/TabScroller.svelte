<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-tab-scroller {className}"
  {...exclude($$props, ['use', 'class', 'scrollArea$', 'scrollContent$'])}
>
  <div
    use:useActions={scrollArea$use}
    class="mdc-tab-scroller__scroll-area {scrollArea$class}"
    {...exclude(prefixFilter($$props, 'scrollArea$'), ['use', 'class'])}
  >
    <div
      use:useActions={scrollContent$use}
      class="mdc-tab-scroller__scroll-content {scrollContent$class}"
      {...exclude(prefixFilter($$props, 'scrollContent$'), ['use', 'class'])}
    ><slot></slot></div>
  </div>
</div>

<script>
  import {MDCTabScroller} from '@material/tab-scroller';
  import {onMount, onDestroy, getContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {prefixFilter} from '@smui/common/prefixFilter.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export {className as class};
  export let scrollArea$use = [];
  export let scrollArea$class = '';
  export let scrollContent$use = [];
  export let scrollContent$class = '';

  let element;
  let tabScroller;
  let instantiate = getContext('SMUI:tab-scroller:instantiate');
  let getInstance = getContext('SMUI:tab-scroller:getInstance');

  onMount(async () => {
    if (instantiate !== false) {
      tabScroller = new MDCTabScroller(element);
    } else {
      tabScroller = await getInstance();
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
</script>
