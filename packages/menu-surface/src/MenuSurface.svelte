<svelte:body on:click|capture={handleBodyClick} />

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
  on:keydown={instance && instance.handleKeydown.bind(instance)}
  {...$$restProps}
>
  <slot />
</div>

<script lang="ts">
  import { MDCMenuSurfaceFoundation } from '@material/menu-surface';
  import { onMount, onDestroy, setContext } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
  } from '@smui/common/internal';

  import type { SMUIMenuSurfaceAccessor } from './MenuSurface.types.js';
  import { Corner } from './MenuSurface.types.js';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    style?: string;
    static?: boolean;
    anchor?: boolean;
    fixed?: boolean;
    open?: boolean;
    managed?: boolean;
    fullWidth?: boolean;
    quickOpen?: boolean;
    anchorElement?: Element | undefined;
    anchorCorner?: Corner | keyof typeof Corner | undefined;
    anchorMargin?: { top: number; right: number; bottom: number; left: number };
    maxHeight?: number;
    horizontallyCenteredOnViewport?: boolean;
    /**
     * Set to a positive integer to influence the menu to preferentially open
     * below the anchor instead of above.
     *
     * A value of `x` simulates an extra `x` pixels of available space below the
     * menu during positioning calculations.
     */
    openBottomBias?: number;
    /**
     * Set this to true to never restore focus to the previously focused element
     * when the menu is closed.
     */
    neverRestoreFocus?: boolean;
  };
  type $$Props = OwnProps & SmuiAttrs<'div', keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  let isStatic = false;
  export { isStatic as static };
  export let anchor = true;
  export let fixed = false;
  export let open = isStatic;
  /**
   * A managed menu surface means you completely control the open state. The
   * component will never alter it on its own.
   */
  export let managed = false;
  export let fullWidth = false;
  export let quickOpen = false;
  export let anchorElement: Element | undefined = undefined;
  export let anchorCorner: Corner | keyof typeof Corner | undefined = undefined;
  export let anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 };
  export let maxHeight = 0;
  export let horizontallyCenteredOnViewport = false;
  export let openBottomBias = 0;
  export let neverRestoreFocus = false;

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

  $: if (instance) {
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

  $: if (instance) {
    instance.setOpenBottomBias(openBottomBias);
  }

  onMount(() => {
    instance = new MDCMenuSurfaceFoundation({
      addClass,
      removeClass,
      hasClass,
      hasAnchor: () => !!anchorElement,
      notifyClose: () => {
        if (!managed) {
          open = isStatic;
        }
        if (!open) {
          dispatch(
            element,
            'SMUIMenuSurface:closed',
            undefined,
            undefined,
            true
          );
        }
      },
      notifyClosing: () => {
        if (!managed) {
          open = isStatic;
        }
        if (!open) {
          dispatch(
            element,
            'SMUIMenuSurface:closing',
            undefined,
            undefined,
            true
          );
        }
      },
      notifyOpen: () => {
        if (!managed) {
          open = true;
        }
        if (open) {
          dispatch(
            element,
            'SMUIMenuSurface:opened',
            undefined,
            undefined,
            true
          );
        }
      },
      notifyOpening: () => {
        if (!open) {
          dispatch(
            element,
            'SMUIMenuSurface:opening',
            undefined,
            undefined,
            true
          );
        }
      },
      isElementInContainer: (el) => element.contains(el),
      isRtl: () =>
        getComputedStyle(element).getPropertyValue('direction') === 'rtl',
      setTransformOrigin: (origin) => {
        internalStyles['transform-origin'] = origin;
      },

      isFocused: () => document.activeElement === element,
      saveFocus: () => {
        previousFocus = document.activeElement ?? undefined;
      },
      restoreFocus: () => {
        if (
          !neverRestoreFocus &&
          (!element || element.contains(document.activeElement)) &&
          previousFocus &&
          document.contains(previousFocus) &&
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
        internalStyles['max-height'] = height;
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

  function handleBodyClick(event: MouseEvent) {
    if (instance && open && !managed) {
      instance.handleBodyClick(event);
    }
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

  export function isFixed() {
    return instance.isFixed();
  }

  export function getElement() {
    return element;
  }
</script>
