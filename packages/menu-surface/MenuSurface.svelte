<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-menu-surface
    {className}
    {Object.keys(
    internalClasses
  ).join(' ')}
    {fixed ? 'mdc-menu-surface--fixed' : ''}
    {isStatic
    ? 'mdc-menu-surface--open'
    : ''}
    {isStatic ? 'smui-menu-surface--static' : ''}
    {fullWidth
    ? 'mdc-menu-surface--fullwidth'
    : ''}
  "
  style="{style} {Object.entries(internalStyle)
    .map(([name, value]) => `${name}: ${value};`)
    .join(' ')}"
  on:MDCMenuSurface:closed={updateOpen}
  on:MDCMenuSurface:opened={updateOpen}
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
  import {
    MDCMenuSurfaceFoundation,
    Corner,
    CornerBit,
  } from '@material/menu-surface';
  import { getCorrectPropertyName } from '@material/animation/util';
  import {
    onMount,
    onDestroy,
    setContext,
    createEventDispatcher,
  } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder } from '@smui/common/forwardEvents.js';
  import { exclude } from '@smui/common/exclude.js';
  import { useActions } from '@smui/common/useActions.js';

  const dispatch = createEventDispatcher();
  const forwardEvents = forwardEventsBuilder(get_current_component(), [
    'MDCMenuSurface:closed',
    'MDCMenuSurface:closing',
    'MDCMenuSurface:opened',
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

  export let element = undefined; // This is exported because Menu needs it.
  let instance;
  let internalClasses = {};
  let internalStyle = {};
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

  $: if (instance && anchorCorner != null) {
    if (Corner.hasOwnProperty(anchorCorner)) {
      instance.setAnchorCorner(Corner[anchorCorner]);
    } else if (CornerBit.hasOwnProperty(anchorCorner)) {
      instance.setAnchorCorner(CornerBit[anchorCorner]);
    } else {
      instance.setAnchorCorner(anchorCorner);
    }
  }

  $: if (instance) {
    instance.setAnchorMargin(anchorMargin);
  }

  onMount(async () => {
    instance = new MDCMenuSurfaceFoundation({
      addClass,
      removeClass,
      hasClass: (className) => element.classList.contains(className),
      hasAnchor: () => !!anchorElement,
      notifyClose: () => dispatch('MDCMenuSurface:closed'),
      notifyClosing: () => {
        dispatch('MDCMenuSurface:closing');
      },
      notifyOpen: () => dispatch('MDCMenuSurface:opened'),
      isElementInContainer: (el) => element.contains(el),
      isRtl: () =>
        getComputedStyle(element).getPropertyValue('direction') === 'rtl',
      setTransformOrigin: (origin) => {
        const propertyName = `${getCorrectPropertyName(
          window,
          'transform'
        )}-origin`;
        internalStyle[propertyName] = origin;
      },

      isFocused: () => document.activeElement === element,
      saveFocus: () => {
        previousFocus = document.activeElement;
      },
      restoreFocus: () => {
        if (element.contains(document.activeElement)) {
          if (previousFocus && previousFocus.focus) {
            previousFocus.focus();
          }
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
        internalStyle.left = 'left' in position ? `${position.left}px` : '';
        internalStyle.right = 'right' in position ? `${position.right}px` : '';
        internalStyle.top = 'top' in position ? `${position.top}px` : '';
        internalStyle.bottom =
          'bottom' in position ? `${position.bottom}px` : '';
      },
      setMaxHeight: (height) => {
        internalStyle.maxHeight = height;
      },
    });
    dispatch('SMUI:menu-surface:mount', {
      get open() {
        return open;
      },
      set open(value) {
        open = value;
      },
      closeProgrammatic,
    });
    instance.init();
  });

  onDestroy(() => {
    if (anchor) {
      element &&
        element.parentNode.classList.remove('mdc-menu-surface--anchor');
    }
    const isHoisted = instance.isHoistedElement_;
    menuSurface.destroy();
    if (isHoisted) {
      element.parentNode.removeChild(element);
    }
  });

  function addClass(className) {
    internalClasses[className] = true;
  }

  function removeClass(className) {
    delete internalClasses[className];
  }

  function updateOpen() {
    if (instance) {
      if (isStatic) {
        open = true;
      } else {
        open = instance.isOpen();
      }
    }
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
</script>
