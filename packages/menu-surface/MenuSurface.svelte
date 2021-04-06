<svelte:body
  on:click|capture={(event) =>
    instance && open && instance.handleBodyClick(event)} />

<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-menu-surface': true,
    'mdc-menu-surface--fixed': fixed,
    'mdc-menu-surface--open': isStatic,
    'smui-menu-surface--static': isStatic,
    'mdc-menu-surface--fullwidth': fullWidth,
    ...internalClasses,
  })}
  style="{style} {Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .join(' ')}"
  on:keydown={(event) => instance && instance.handleKeydown(event)}
  {...exclude($$props, [
    'use',
    'class',
    'style',
    'static',
    'anchor',
    'fixed',
    'open',
    'fullWidth',
    'quickOpen',
    'anchorElement',
    'anchorCorner',
    'anchorMargin',
    'element',
  ])}
>
  <slot />
</div>

<script context="module">
  import { Corner, CornerBit } from '@material/menu-surface';

  export { Corner, CornerBit };
</script>

<script>
  import { MDCMenuSurfaceFoundation } from '@material/menu-surface';
  import { getCorrectPropertyName } from '@material/animation/util';
  import { onMount, onDestroy, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component(), [
    'MDCMenuSurface:closed',
    'MDCMenuSurface:closing',
    'MDCMenuSurface:opened',
    'SMUI:menu-surface:mount',
    'MDCList:action',
    'SMUI:list:mount',
  ]);

  export let use = [];
  let className = '';
  export { className as class };
  export let style = '';
  let isStatic = false;
  export { isStatic as static };
  export let anchor = true;
  export let fixed = false;
  export let open = isStatic;
  export let fullWidth = false;
  export let quickOpen = false;
  export let anchorElement = null;
  export let anchorCorner = null;
  export let anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 };

  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let previousFocus;

  setContext('SMUI:list:role', 'menu');
  setContext('SMUI:list:item:role', 'menuitem');

  $: if (
    element &&
    anchor &&
    !element.parentNode.classList.contains('mdc-menu-surface--anchor')
  ) {
    element.parentNode.classList.add('mdc-menu-surface--anchor');
    anchorElement = element.parentNode;
  }

  $: if (instance && instance.isOpen() !== open) {
    if (open) {
      instance.open();
    } else {
      instance.close();
    }
  }

  $: if (instance) {
    instance.setQuickOpen(quickOpen);
  }

  $: if (instance) {
    instance.setFixedPosition(fixed);
  }

  const iCorner = Corner;
  const iCornerBit = CornerBit;
  $: if (instance && anchorCorner != null) {
    if (iCorner.hasOwnProperty(anchorCorner)) {
      instance.setAnchorCorner(iCorner[anchorCorner]);
    } else if (iCornerBit.hasOwnProperty(anchorCorner)) {
      instance.setAnchorCorner(iCornerBit[anchorCorner]);
    } else {
      instance.setAnchorCorner(anchorCorner);
    }
  }

  $: if (instance) {
    instance.setAnchorMargin(anchorMargin);
  }

  onMount(() => {
    instance = new MDCMenuSurfaceFoundation({
      addClass,
      removeClass,
      hasClass,
      hasAnchor: () => !!anchorElement,
      notifyClose: () => {
        open = isStatic;
        if (!open) {
          dispatch(element, 'MDCMenuSurface:closed');
        }
      },
      notifyClosing: () => {
        open = isStatic;
        if (!open) {
          dispatch(element, 'MDCMenuSurface:closing');
        }
      },
      notifyOpen: () => {
        open = true;
        dispatch(element, 'MDCMenuSurface:opened');
      },
      isElementInContainer: (el) => element.contains(el),
      isRtl: () =>
        getComputedStyle(element).getPropertyValue('direction') === 'rtl',
      setTransformOrigin: (origin) => {
        const propertyName = `${getCorrectPropertyName(
          window,
          'transform'
        )}-origin`;
        internalStyles[propertyName] = origin;
      },

      isFocused: () => document.activeElement === element,
      saveFocus: () => {
        previousFocus = document.activeElement;
      },
      restoreFocus: () => {
        if (
          element.contains(document.activeElement) &&
          previousFocus &&
          previousFocus.focus
        ) {
          previousFocus.focus();
        }
      },

      getInnerDimensions: () => {
        return {
          width: element.offsetWidth,
          height: element.offsetHeight,
        };
      },
      getAnchorDimensions: () =>
        anchorElement ? anchorElement.getBoundingClientRect() : null,
      getWindowDimensions: () => {
        return { width: window.innerWidth, height: window.innerHeight };
      },
      getBodyDimensions: () => {
        return {
          width: document.body.clientWidth,
          height: document.body.clientHeight,
        };
      },
      getWindowScroll: () => {
        return { x: window.pageXOffset, y: window.pageYOffset };
      },
      setPosition: (position) => {
        internalStyles.left = 'left' in position ? `${position.left}px` : '';
        internalStyles.right = 'right' in position ? `${position.right}px` : '';
        internalStyles.top = 'top' in position ? `${position.top}px` : '';
        internalStyles.bottom =
          'bottom' in position ? `${position.bottom}px` : '';
      },
      setMaxHeight: (height) => {
        internalStyles.maxHeight = height;
      },
    });

    dispatch(element, 'SMUI:menu-surface:mount', {
      get open() {
        return open;
      },
      set open(value) {
        open = value;
      },
      closeProgrammatic,
    });

    instance.init();

    return () => {
      const isHoisted = instance.isHoistedElement;
      instance.destroy();
      if (isHoisted) {
        element.parentNode.removeChild(element);
      }
    };
  });

  onDestroy(() => {
    if (anchor) {
      element &&
        element.parentNode.classList.remove('mdc-menu-surface--anchor');
    }
  });

  function hasClass(className) {
    return className in internalClasses
      ? internalClasses[className]
      : getElement().classList.contains(className);
  }

  function addClass(className) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className) {
    if (internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  export function isOpen() {
    return open;
  }

  export function setOpen(value) {
    open = value;
  }

  function closeProgrammatic(skipRestoreFocus) {
    instance.close(skipRestoreFocus);
    open = false;
  }

  export function setAbsolutePosition(...args) {
    return instance.setAbsolutePosition(...args);
  }

  export function setIsHoisted(...args) {
    return instance.setIsHoisted(...args);
  }

  export function getElement() {
    return element;
  }
</script>
