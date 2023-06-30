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
  class={classMap({
    [className]: true,
    'mdc-top-app-bar': true,
    'mdc-top-app-bar--short': variant === 'short',
    'mdc-top-app-bar--short-collapsed': collapsed,
    'mdc-top-app-bar--fixed': variant === 'fixed',
    'smui-top-app-bar--static': variant === 'static',
    'smui-top-app-bar--color-secondary': color === 'secondary',
    'mdc-top-app-bar--prominent': prominent,
    'mdc-top-app-bar--dense': dense,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  on:SMUITopAppBarIconButton:nav={() =>
    instance && instance.handleNavigationClick()}
  {...$$restProps}
>
  <slot />
</header>

<script lang="ts">
  import {
    MDCTopAppBarBaseFoundation,
    MDCTopAppBarFoundation,
    MDCFixedTopAppBarFoundation,
    MDCShortTopAppBarFoundation,
  } from '@material/top-app-bar';
  import { onMount } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { Subscriber } from 'svelte/store';
  import { readable } from 'svelte/store';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
  } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    style?: string;
    variant?: 'short' | 'fixed' | 'static' | 'standard';
    color?: 'primary' | 'secondary';
    collapsed?: boolean;
    prominent?: boolean;
    dense?: boolean;
    scrollTarget?: HTMLElement | undefined;
  };
  type $$Props = OwnProps & SmuiAttrs<'header', keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());
  interface UninitializedValue extends Function {}
  let uninitializedValue: UninitializedValue = () => {};
  function isUninitializedValue(value: any): value is UninitializedValue {
    return value === uninitializedValue;
  }

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let variant: 'short' | 'fixed' | 'static' | 'standard' = 'standard';
  export let color: 'primary' | 'secondary' = 'primary';

  // Some trickery to detect uninitialized values but also have the right types.
  export let collapsed: boolean = uninitializedValue as unknown as boolean;
  const alwaysCollapsed = !isUninitializedValue(collapsed) && !!collapsed;
  if (isUninitializedValue(collapsed)) {
    collapsed = false;
  }
  // Done with the trickery.

  export let prominent = false;
  export let dense = false;
  export let scrollTarget: HTMLElement | undefined = undefined;

  let element: HTMLElement;
  let instance:
    | MDCTopAppBarBaseFoundation
    | MDCShortTopAppBarFoundation
    | MDCFixedTopAppBarFoundation
    | MDCTopAppBarFoundation;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};

  let propStoreSet: Subscriber<{
    variant: 'short' | 'fixed' | 'static' | 'standard';
    prominent: boolean;
    dense: boolean;
  }>;
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

  $: if (instance && variant === 'short' && 'setAlwaysCollapsed' in instance) {
    instance.setAlwaysCollapsed(alwaysCollapsed);
  }

  let oldScrollTarget: HTMLElement | undefined = undefined;
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
        standard: MDCTopAppBarFoundation,
      }[variant] || MDCTopAppBarFoundation;

    return new Foundation({
      hasClass,
      addClass,
      removeClass,
      setStyle: addStyle,
      getTopAppBarHeight: () => element.clientHeight,
      notifyNavigationIconClicked: () =>
        dispatch(element, 'SMUITopAppBar:nav', undefined, undefined, true),
      getViewportScrollY: () =>
        scrollTarget == null ? window.pageYOffset : scrollTarget.scrollTop,
      getTotalActionItems: () =>
        element.querySelectorAll('.mdc-top-app-bar__action-item').length,
    });
  }

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

  function handleTargetScroll() {
    if (instance) {
      instance.handleTargetScroll();
      if (variant === 'short') {
        collapsed = 'isCollapsed' in instance && instance.isCollapsed;
      }
    }
  }

  export function getPropStore() {
    return propStore;
  }

  export function getElement() {
    return element;
  }
</script>
