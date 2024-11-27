<svelte:options runes={true} />

<svelte:window
  onresize={() =>
    variant !== 'short' &&
    variant !== 'fixed' &&
    instance &&
    instance.handleWindowResize()}
  onscroll={() => scrollTarget == null && handleTargetScroll()}
/>

<header
  bind:this={element}
  use:useActions={use}
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
  {...restProps}
  onSMUITopAppBarIconButtonNav={(e) => {
    if (instance) {
      instance.handleNavigationClick();
    }
    restProps.onSMUITopAppBarIconButtonNav?.(e);
  }}
>
  {#if children}{@render children()}{/if}
</header>

<script lang="ts">
  import {
    MDCTopAppBarBaseFoundation,
    MDCTopAppBarFoundation,
    MDCFixedTopAppBarFoundation,
    MDCShortTopAppBarFoundation,
  } from '@material/top-app-bar';
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';
  import type { Subscriber } from 'svelte/store';
  import { readable } from 'svelte/store';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions, dispatch } from '@smui/common/internal';

  interface UninitializedValue extends Function {}
  let uninitializedValue: UninitializedValue = () => {};
  function isUninitializedValue(value: any): value is UninitializedValue {
    return value === uninitializedValue;
  }

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
     * The type of app bar to display.
     */
    variant?: 'short' | 'fixed' | 'static' | 'standard';
    /**
     * The color of the app bar.
     */
    color?: 'primary' | 'secondary';
    /**
     * When using short variant, whether the app bar is collapsed.
     */
    collapsed?: boolean;
    /**
     * Whether to style the app bar as prominent.
     */
    prominent?: boolean;
    /**
     * Whether to style the app bar more densely.
     */
    dense?: boolean;
    /**
     * You can specify the scroll target if needed.
     */
    scrollTarget?: HTMLElement;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    style = '',
    variant = 'standard',
    color = 'primary',
    collapsed = $bindable(uninitializedValue as unknown as boolean),
    prominent = false,
    dense = false,
    scrollTarget,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'header', keyof OwnProps> = $props();

  // Some trickery to detect uninitialized values but also have the right types.
  const alwaysCollapsed = !isUninitializedValue(collapsed) && !!collapsed;
  if (isUninitializedValue(collapsed)) {
    collapsed = false;
  }
  // Done with the trickery.

  let element: HTMLElement;
  let instance:
    | MDCTopAppBarBaseFoundation
    | MDCShortTopAppBarFoundation
    | MDCFixedTopAppBarFoundation
    | MDCTopAppBarFoundation
    | undefined = $state();
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalStyles: { [k: string]: string } = $state({});

  let propStoreSet:
    | Subscriber<{
        variant: 'short' | 'fixed' | 'static' | 'standard';
        prominent: boolean;
        dense: boolean;
      }>
    | undefined = $state();
  let propStore = readable({ variant, prominent, dense }, (set) => {
    propStoreSet = set;
  });
  $effect(() => {
    if (propStoreSet) {
      propStoreSet({
        variant,
        prominent,
        dense,
      });
    }
  });

  $effect(() => {
    if (instance && variant === 'short' && 'setAlwaysCollapsed' in instance) {
      instance.setAlwaysCollapsed(alwaysCollapsed);
    }
  });

  let oldScrollTarget: HTMLElement | undefined = undefined;
  $effect(() => {
    if (oldScrollTarget !== scrollTarget) {
      if (oldScrollTarget) {
        oldScrollTarget.removeEventListener('scroll', handleTargetScroll);
      }
      if (scrollTarget) {
        scrollTarget.addEventListener('scroll', handleTargetScroll);
      }
      oldScrollTarget = scrollTarget;
    }
  });

  let oldVariant = variant;
  $effect(() => {
    if (oldVariant !== variant && instance) {
      oldVariant = variant;
      instance.destroy();
      internalClasses = {};
      internalStyles = {};
      instance = getInstance();
      instance.init();
    }
  });

  onMount(() => {
    instance = getInstance();
    instance.init();

    return () => {
      instance?.destroy();
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
      getTopAppBarHeight: () => getElement().clientHeight,
      notifyNavigationIconClicked: () =>
        dispatch(getElement(), 'SMUITopAppBarNav'),
      getViewportScrollY: () =>
        scrollTarget == null ? window.pageYOffset : scrollTarget.scrollTop,
      getTotalActionItems: () =>
        getElement().querySelectorAll('.mdc-top-app-bar__action-item').length,
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
