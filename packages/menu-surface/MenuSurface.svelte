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
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  on:keydown={(event) => instance && instance.handleKeydown(event)}
  {...$$restProps}
>
  <slot />
</div>

<script lang="ts">
  import { MDCMenuSurfaceFoundation } from '@material/menu-surface';
  import { getCorrectPropertyName } from '@material/animation/util.js';
  import { onMount, onDestroy, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
    ActionArray,
  } from '@smui/common/internal/index.js';

  import { Corner, SMUIMenuSurfaceAccessor } from './MenuSurface.types.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
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
  export let anchorElement: Element | undefined = undefined;
  export let anchorCorner: Corner | keyof typeof Corner | undefined = undefined;
  export let anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 };
  export let maxHeight = 0;
  export let horizontallyCenteredOnViewport = false;

  let element: HTMLDivElement;
  let instance: MDCMenuSurfaceFoundation;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};
  let previousFocus: Element | undefined = undefined;

  setContext('SMUI:list:role', 'menu');
  setContext('SMUI:list:item:role', 'menuitem');

  $: if (
    element &&
    anchor &&
    !element.parentElement?.classList.contains('mdc-menu-surface--anchor')
  ) {
    element.parentElement?.classList.add('mdc-menu-surface--anchor');
    anchorElement = element.parentElement ?? undefined;
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

  $: if (instance && maxHeight > 0) {
    instance.setMaxHeight(maxHeight);
  }

  $: if (instance) {
    instance.setIsHorizontallyCenteredOnViewport(
      horizontallyCenteredOnViewport
    );
  }

  const iCorner = Corner;
  $: if (instance && anchorCorner != null) {
    if (typeof anchorCorner === 'string') {
      instance.setAnchorCorner(iCorner[anchorCorner]);
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
        previousFocus = document.activeElement ?? undefined;
      },
      restoreFocus: () => {
        if (
          element.contains(document.activeElement) &&
          previousFocus &&
          'focus' in previousFocus
        ) {
          (previousFocus as HTMLInputElement).focus();
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

    const accessor: SMUIMenuSurfaceAccessor = {
      get open() {
        return open;
      },
      set open(value) {
        open = value;
      },
      closeProgrammatic,
    };

    dispatch(element, 'SMUIMenuSurface:mount', accessor);

    instance.init();

    return () => {
      const isHoisted = (instance as any).isHoistedElement;
      instance.destroy();
      if (isHoisted) {
        element.parentNode?.removeChild(element);
      }
    };
  });

  onDestroy(() => {
    if (anchor) {
      element &&
        element.parentElement?.classList.remove('mdc-menu-surface--anchor');
    }
  });

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

  function closeProgrammatic(skipRestoreFocus?: boolean) {
    instance.close(skipRestoreFocus);
    open = false;
  }

  export function isOpen() {
    return open;
  }

  export function setOpen(value: boolean) {
    open = value;
  }

  export function setAbsolutePosition(x: number, y: number) {
    return instance.setAbsolutePosition(x, y);
  }

  export function setIsHoisted(isHoisted: boolean) {
    return instance.setIsHoisted(isHoisted);
  }

  export function getElement() {
    return element;
  }
</script>
