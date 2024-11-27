<svelte:options runes={true} />

<svelte:window onscroll={handleTargetScroll} onresize={handleWindowResize} />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'smui-bottom-app-bar': true,
    'smui-bottom-app-bar--standard': variant === 'standard',
    'smui-bottom-app-bar--fixed': variant === 'fixed',
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  {...restProps}
>
  {#if children}{@render children()}{/if}
</div>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount, setContext } from 'svelte';
  import type { Subscriber } from 'svelte/store';
  import { readable, writable } from 'svelte/store';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';

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
    variant?: 'fixed' | 'static' | 'standard';
    /**
     * The color of the app bar.
     */
    color?: 'default' | 'primary' | 'secondary' | string;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    style = '',
    variant = 'standard',
    color = 'primary',
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  let element: HTMLDivElement;

  let internalStyles: { [k: string]: string } = $state({});
  const colorStore = writable(color);
  let withFab = $state(false);
  let adjustOffset = $state(0);
  $effect(() => {
    $colorStore = color;
  });
  setContext('SMUI:bottom-app-bar:color', colorStore);
  let propStoreSet:
    | Subscriber<{
        withFab: boolean;
        adjustOffset: number;
        variant: 'fixed' | 'static' | 'standard';
      }>
    | undefined = $state();
  let propStore = readable(
    {
      withFab,
      adjustOffset,
      variant,
    },
    (set) => {
      propStoreSet = set;
    },
  );
  $effect(() => {
    if (propStoreSet) {
      propStoreSet({
        withFab,
        adjustOffset,
        variant,
      });
    }
  });

  onMount(() => {
    const observer = new MutationObserver(() => {
      if (variant === 'standard' || variant === 'fixed') {
        withFab =
          getElement()?.querySelector<HTMLDivElement>('.mdc-fab') != null;
      } else {
        withFab = false;
      }
    });

    observer.observe(getElement(), { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  });

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

  // A lot of this code was adapted from
  // https://github.com/material-components/material-components-web/blob/v14.0.0/packages/mdc-top-app-bar/standard/foundation.ts

  const DEBOUNCE_THROTTLE_RESIZE_TIME_MS = 100;
  /**
   * Indicates if the bottom app bar was docked in the previous scroll handler iteration.
   */
  let wasDocked = true;
  /**
   * Indicates if the bottom app bar is docked in the fully shown position.
   */
  let isDockedShowing = true;
  /**
   * Variable for current scroll position of the bottom app bar
   */
  let currentAppBarOffsetBottom = 0;
  /**
   * Used to prevent the bottom app bar from being scrolled out of view during resize events
   */
  let isCurrentlyBeingResized = false;
  /**
   * The timeout that's used to throttle the resize events
   */
  let resizeThrottleId: NodeJS.Timeout | number = 0;
  /**
   * Used for diffs of current scroll position vs previous scroll position
   */
  let lastScrollPosition: number;
  /**
   * Used to verify when the bottom app bar is completely showing or completely hidden
   */
  let bottomAppBarHeight: number;
  /**
   * The timeout that's used to debounce toggling the isCurrentlyBeingResized
   * variable after a resize
   */
  let resizeDebounceId: NodeJS.Timeout | number = 0;

  function getViewportScrollY() {
    const win = window;
    const el = window as unknown as Element;
    return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
  }

  function getTopAppBarHeight() {
    return getElement().getBoundingClientRect().height;
  }

  let oldVariant: 'fixed' | 'static' | 'standard' | null = null;
  $effect(() => {
    if (element && variant !== oldVariant) {
      if (variant === 'standard') {
        lastScrollPosition = getViewportScrollY();
        bottomAppBarHeight = getTopAppBarHeight();
      } else if (oldVariant === 'standard') {
        addStyle('bottom', '');
        addStyle('--smui-bottom-app-bar--fab-offset', '0px');
        adjustOffset = 0;
      }
      oldVariant = variant;
    }
  });

  /**
   * Scroll handler for the default scroll behavior of the bottom app bar.
   */
  function handleTargetScroll() {
    if (variant !== 'standard') {
      return;
    }

    const currentScrollPosition = Math.max(getViewportScrollY(), 0);
    const diff = currentScrollPosition - lastScrollPosition;
    lastScrollPosition = currentScrollPosition;

    // If the window is being resized the lastScrollPosition needs to be updated
    // but the current scroll of the bottom app bar should stay in the same
    // position.
    if (!isCurrentlyBeingResized) {
      currentAppBarOffsetBottom -= diff;

      if (currentAppBarOffsetBottom > 0) {
        currentAppBarOffsetBottom = 0;
      } else if (Math.abs(currentAppBarOffsetBottom) > bottomAppBarHeight) {
        currentAppBarOffsetBottom = -bottomAppBarHeight;
      }

      moveTopAppBar();
    }
  }

  /**
   * Top app bar resize handler that throttle/debounce functions that execute updates.
   */
  function handleWindowResize() {
    if (variant !== 'standard') {
      return;
    }

    // Throttle resize events 10 p/s
    if (!resizeThrottleId) {
      resizeThrottleId = setTimeout(() => {
        resizeThrottleId = 0;
        throttledResizeHandler();
      }, DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    }

    isCurrentlyBeingResized = true;

    if (resizeDebounceId) {
      clearTimeout(resizeDebounceId);
    }

    resizeDebounceId = setTimeout(() => {
      handleTargetScroll();
      isCurrentlyBeingResized = false;
      resizeDebounceId = 0;
    }, DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
  }

  /**
   * Function to determine if the DOM needs to update.
   */
  function checkForUpdate(): boolean {
    const offscreenBoundaryBottom = -bottomAppBarHeight;
    const hasAnyPixelsOffscreen = currentAppBarOffsetBottom < 0;
    const hasAnyPixelsOnscreen =
      currentAppBarOffsetBottom > offscreenBoundaryBottom;
    const partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;

    // If it's partially showing, it can't be docked.
    if (partiallyShowing) {
      wasDocked = false;
    } else {
      // Not previously docked and not partially showing, it's now docked.
      if (!wasDocked) {
        wasDocked = true;
        return true;
      } else if (isDockedShowing !== hasAnyPixelsOnscreen) {
        isDockedShowing = hasAnyPixelsOnscreen;
        return true;
      }
    }

    return partiallyShowing;
  }

  /**
   * Function to move the bottom app bar if needed.
   */
  function moveTopAppBar() {
    if (checkForUpdate()) {
      let offset = currentAppBarOffsetBottom;
      addStyle('--smui-bottom-app-bar--fab-offset', offset * 0.75 + 'px');
      addStyle('bottom', offset + 'px');
      adjustOffset = offset;
      if (withFab) {
        adjustOffset -= +offset * 0.75;
      }
    }
  }

  /**
   * Throttled function that updates the bottom app bar scrolled values if the
   * bottom app bar height changes.
   */
  function throttledResizeHandler() {
    const currentHeight = getTopAppBarHeight();
    if (bottomAppBarHeight !== currentHeight) {
      wasDocked = false;

      // Since the bottom app bar has a different height depending on the screen width, this
      // will ensure that the bottom app bar remains in the correct location if
      // completely hidden and a resize makes the bottom app bar a different height.
      currentAppBarOffsetBottom -= bottomAppBarHeight - currentHeight;
      bottomAppBarHeight = currentHeight;
    }
    handleTargetScroll();
  }

  export function getPropStore() {
    return propStore;
  }

  export function getElement() {
    return element;
  }
</script>
