<svelte:options runes />

<svelte:body onclickcapture={handleBodyClick} />

<div
  bind:this={element}
  use:useActions={use}
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
  role="dialog"
  {...restProps}
  onkeydown={(e) => {
    if (instance && !managed) {
      instance.handleKeydown(e);
    }
    restProps.onkeydown?.(e);
  }}
>
  {@render children?.()}
</div>

<script lang="ts">
  import { MDCMenuSurfaceFoundation } from '@material/menu-surface';
  import type { Snippet } from 'svelte';
  import { onMount, onDestroy, setContext, getContext } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions, dispatch } from '@smui/common/internal';

  import type { SMUIMenuSurfaceAccessor } from './MenuSurface.types.js';
  import { Corner } from './MenuSurface.types.js';

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
     * A static menu is always open.
     */
    static?: boolean;
    /**
     * Anchor the menu surface automatically to its parent element.
     *
     * If you set this to false, you need to provide an element to
     * `anchorElement`.
     */
    anchor?: boolean;
    /**
     * Set the menu surface calculations based on a fixed position menu.
     */
    fixed?: boolean;
    /**
     * Whether the menu surface is open.
     */
    open?: boolean;
    /**
     * A managed menu surface means you completely control the open state. The
     * component will never alter it on its own.
     */
    managed?: boolean;
    /**
     * Set width to 100%.
     */
    fullWidth?: boolean;
    /**
     * Skip animating when the menu surface opens.
     */
    quickOpen?: boolean;
    /**
     * The element to anchor the menu to, if not done automatically.
     *
     * You should only need this if you set `anchor` to false.
     */
    anchorElement?: Element;
    /**
     * Default anchor corner alignment of top left menu surface corner.
     */
    anchorCorner?: Corner | keyof typeof Corner;
    /**
     * The margin to put between the anchor and the menu.
     */
    anchorMargin?: { top: number; right: number; bottom: number; left: number };
    /**
     * The maximum height to allow the menu surface to be.
     */
    maxHeight?: number;
    /**
     * Whether menu-surface should be horizontally centered to viewport.
     *
     * (Only effective when the menu surface is hoisted to the body.)
     */
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

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    style = '',
    static: isStatic = false,
    anchor = true,
    fixed = false,
    open = $bindable(isStatic),
    managed = false,
    fullWidth = false,
    quickOpen = false,
    anchorElement = $bindable(),
    anchorCorner,
    anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 },
    maxHeight = 0,
    horizontallyCenteredOnViewport = false,
    openBottomBias = 0,
    neverRestoreFocus = false,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  let element: HTMLDivElement;
  let instance: MDCMenuSurfaceFoundation | undefined = $state();
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalStyles: { [k: string]: string } = $state({});
  let previousFocus: Element | undefined = $state(undefined);

  setContext('SMUI:list:role', 'menu');
  setContext('SMUI:list:item:role', 'menuitem');

  $effect(() => {
    if (
      element &&
      anchor &&
      !element.parentElement?.classList.contains('mdc-menu-surface--anchor')
    ) {
      element.parentElement?.classList.add('mdc-menu-surface--anchor');
      anchorElement = element.parentElement ?? undefined;
    }
  });

  $effect(() => {
    if (instance && instance.isOpen() !== open) {
      if (open) {
        instance.open();
      } else {
        instance.close();
      }
    }
  });

  $effect(() => {
    if (instance) {
      instance.setQuickOpen(quickOpen);
    }
  });

  $effect(() => {
    if (instance) {
      instance.setFixedPosition(fixed);
    }
  });

  $effect(() => {
    if (instance) {
      instance.setMaxHeight(maxHeight);
    }
  });

  $effect(() => {
    if (instance) {
      instance.setIsHorizontallyCenteredOnViewport(
        horizontallyCenteredOnViewport,
      );
    }
  });

  const iCorner = Corner;
  $effect(() => {
    if (instance && anchorCorner != null) {
      if (typeof anchorCorner === 'string') {
        instance.setAnchorCorner(iCorner[anchorCorner]);
      } else {
        instance.setAnchorCorner(anchorCorner);
      }
    }
  });

  $effect(() => {
    if (instance) {
      instance.setAnchorMargin(anchorMargin);
    }
  });

  $effect(() => {
    if (instance) {
      instance.setOpenBottomBias(openBottomBias);
    }
  });

  const SMUIMenuSurfaceMount = getContext<
    ((accessor: SMUIMenuSurfaceAccessor) => void) | undefined
  >('SMUI:menu-surface:mount');
  const SMUIMenuSurfaceUnmount = getContext<
    ((accessor: SMUIMenuSurfaceAccessor) => void) | undefined
  >('SMUI:menu-surface:unmount');

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
          dispatch(getElement(), 'SMUIMenuSurfaceClosed');
        }
      },
      notifyClosing: () => {
        if (!managed) {
          open = isStatic;
        }
        if (!open) {
          dispatch(getElement(), 'SMUIMenuSurfaceClosing');
        }
      },
      notifyOpen: () => {
        if (!managed) {
          open = true;
        }
        if (open) {
          dispatch(getElement(), 'SMUIMenuSurfaceOpened');
        }
      },
      notifyOpening: () => {
        if (!open) {
          dispatch(getElement(), 'SMUIMenuSurfaceOpening');
        }
      },
      isElementInContainer: (el) => getElement().contains(el),
      isRtl: () =>
        getComputedStyle(getElement()).getPropertyValue('direction') === 'rtl',
      setTransformOrigin: (origin) => {
        internalStyles['transform-origin'] = origin;
      },

      isFocused: () => document.activeElement === getElement(),
      saveFocus: () => {
        previousFocus = document.activeElement ?? undefined;
      },
      restoreFocus: () => {
        if (
          !neverRestoreFocus &&
          (!element || getElement().contains(document.activeElement)) &&
          previousFocus &&
          document.contains(previousFocus) &&
          'focus' in previousFocus
        ) {
          (previousFocus as HTMLInputElement).focus();
        }
      },
      getInnerDimensions: () => {
        return {
          width: getElement().offsetWidth,
          height: getElement().offsetHeight,
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

    SMUIMenuSurfaceMount && SMUIMenuSurfaceMount(accessor);

    instance.init();

    return () => {
      SMUIMenuSurfaceUnmount && SMUIMenuSurfaceUnmount(accessor);

      const isHoisted = (instance as any).isHoistedElement;
      instance?.destroy();
      if (isHoisted) {
        getElement().parentNode?.removeChild(getElement());
      }
    };
  });

  onDestroy(() => {
    if (anchor) {
      getElement() &&
        getElement().parentElement?.classList.remove(
          'mdc-menu-surface--anchor',
        );
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
    instance?.close(skipRestoreFocus);
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
    if (instance == null) {
      throw new Error('Instance is not defined.');
    }
    return instance.setAbsolutePosition(x, y);
  }

  export function setIsHoisted(isHoisted: boolean) {
    if (instance == null) {
      throw new Error('Instance is not defined.');
    }
    return instance.setIsHoisted(isHoisted);
  }

  export function isFixed() {
    if (instance == null) {
      throw new Error('Instance is not defined.');
    }
    return instance.isFixed();
  }

  export function flipCornerHorizontally() {
    if (instance == null) {
      throw new Error('Instance is not defined.');
    }
    return instance.flipCornerHorizontally();
  }

  export function getElement() {
    return element;
  }
</script>
