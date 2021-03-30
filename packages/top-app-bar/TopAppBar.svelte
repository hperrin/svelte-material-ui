<svelte:window
  on:resize={() =>
    variant !== 'short' &&
    variant !== 'fixed' &&
    instance &&
    instance.handleWindowResize()}
  on:scroll={() => scrollTarget == null && handleTargetScroll()}
/>

<header
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-top-app-bar
    {className}
    {Object.keys(
    internalClasses
  ).join(' ')}
    {variant === 'short'
    ? 'mdc-top-app-bar--short'
    : ''}
    {collapsed
    ? 'mdc-top-app-bar--short-collapsed'
    : ''}
    {variant === 'fixed'
    ? 'mdc-top-app-bar--fixed'
    : ''}
    {variant === 'static'
    ? 'smui-top-app-bar--static'
    : ''}
    {color === 'secondary'
    ? 'smui-top-app-bar--color-secondary'
    : ''}
    {prominent ? 'mdc-top-app-bar--prominent' : ''}
    {dense
    ? 'mdc-top-app-bar--dense'
    : ''}
  "
  style="{style} {Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .join(' ')}"
  on:MDCTopAppBar:nav|stopPropagation={() =>
    instance && instance.handleNavigationClick()}
  {...exclude($$props, [
    'use',
    'class',
    'variant',
    'color',
    'collapsed',
    'prominent',
    'dense',
    'scrollTarget',
  ])}
>
  <slot />
</header>

<script>
  import {
    MDCTopAppBarBaseFoundation,
    MDCTopAppBarFoundation,
    MDCFixedTopAppBarFoundation,
    MDCShortTopAppBarFoundation,
  } from '@material/top-app-bar';
  import { onMount } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import { readable } from 'svelte/store';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component(), [
    'MDCList:action',
  ]);
  let uninitializedValue = () => {};

  export let use = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let variant = 'standard';
  export let color = 'primary';
  export let collapsed = uninitializedValue;
  export let prominent = false;
  export let dense = false;
  export let scrollTarget = null;

  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  const alwaysCollapsed = collapsed !== uninitializedValue && !!collapsed;
  if (collapsed === uninitializedValue) {
    collapsed = false;
  }

  let propStoreSet;
  let propStore = readable({ variant, prominent, dense }, (set) => {
    propStoreSet = set;
  });
  $: if (propStoreSet) {
    propStoreSet({
      variant,
      prominent,
      dense,
    });
  }

  $: if (instance && variant === 'short') {
    instance.setAlwaysCollapsed(alwaysCollapsed);
  }

  let oldScrollTarget = null;
  $: if (oldScrollTarget !== scrollTarget) {
    if (oldScrollTarget) {
      oldScrollTarget.removeEventListener('scroll', handleTargetScroll);
    }
    if (scrollTarget) {
      scrollTarget.addEventListener('scroll', handleTargetScroll);
    }
    oldScrollTarget = scrollTarget;
  }

  let oldVariant = variant;
  $: if (oldVariant !== variant && instance) {
    oldVariant = variant;
    instance.destroy();
    internalClasses = {};
    internalStyles = {};
    instance = getInstance();
    instance.init();
  }

  onMount(() => {
    instance = getInstance();
    instance.init();

    return () => {
      instance.destroy();
    };
  });

  function getInstance() {
    const Foundation =
      {
        static: MDCTopAppBarBaseFoundation,
        short: MDCShortTopAppBarFoundation,
        fixed: MDCFixedTopAppBarFoundation,
      }[variant] || MDCTopAppBarFoundation;

    return new Foundation({
      hasClass: (className) => element.classList.contains(className),
      addClass,
      removeClass,
      setStyle: addStyle,
      getTopAppBarHeight: () => element.clientHeight,
      notifyNavigationIconClicked: () => dispatch(element, 'MDCTopAppBar:nav'),
      getViewportScrollY: () =>
        scrollTarget == null ? window.pageYOffset : scrollTarget.scrollTop,
      getTotalActionItems: () =>
        element.querySelectorAll('.mdc-top-app-bar__action-item').length,
    });
  }

  function addClass(className) {
    internalClasses[className] = true;
  }

  function removeClass(className) {
    delete internalClasses[className];
  }

  function addStyle(name, value) {
    internalStyles[name] = value;
  }

  function handleTargetScroll() {
    if (instance) {
      instance.handleTargetScroll();
      if (variant === 'short') {
        collapsed = instance.isCollapsed;
      }
    }
  }

  export function getPropStore() {
    return propStore;
  }
</script>
