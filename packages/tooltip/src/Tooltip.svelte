<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    'mdc-tooltip': true,
    'mdc-tooltip--rich': rich,
    ...internalClasses,
    [className]: true,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  aria-hidden="true"
  {id}
  data-mdc-tooltip-persist={rich && persistent ? 'true' : undefined}
  data-mdc-tooltip-persistent={/* MDC uses this attr, but document the one above */ rich &&
  persistent
    ? 'true'
    : undefined}
  data-mdc-tooltip-has-caret={undefined}
  data-hide-tooltip-from-screenreader={hideFromScreenreader
    ? 'true'
    : undefined}
  {...roleProps}
  {...internalAttrs}
  {...exclude(restProps, ['surface$'])}
  ontransitionend={(e) => {
    if (instance) {
      instance.handleTransitionEnd();
    }
    restProps.ontransitionend?.(e);
  }}
>
  <div
    class={classMap({
      [surface$class]: true,
      'mdc-tooltip__surface': true,
      'mdc-tooltip__surface-animation': true,
    })}
    style={Object.entries(surfaceAnimationStyles)
      .map(([name, value]) => `${name}: ${value};`)
      .concat([surface$style])
      .join(' ')}
    {...prefixFilter(restProps, 'surface$')}
  >
    {@render children?.()}
  </div>
</div>

<script module lang="ts">
  let counter = 0;
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import type { SpecificEventListener } from '@smui/base/types';
  import type { SmuiAttrs, SmuiElementPropMap } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
    SvelteEventManager,
  } from '@smui/common/internal';

  import {
    MDCTooltipFoundation,
    AnchorBoundaryType,
    XPosition,
    YPosition,
    CssClasses,
  } from './mdc';

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
     * The ID of the tooltip.
     *
     * If one is not provided, one will be generated.
     */
    id?: string;
    /**
     * Whether the tooltip should use unbounded styling.
     *
     * Unbounded styling adds more gap between the anchor element and the
     * tooltip.
     */
    unbounded?: boolean;
    /**
     * The horizontal position of the tooltip.
     */
    xPos?: Lowercase<keyof typeof XPosition>;
    /**
     * The vertical position of the tooltip.
     */
    yPos?: Lowercase<keyof typeof YPosition>;
    /**
     * Whether the tooltip should act as a persistent popup.
     *
     * A persistent rich tooltip shows up when you click or press enter/space
     * bar on an element and goes away when you activate it again or it loses
     * focus. Great for informational popups on those little "i" icons.
     */
    persistent?: boolean;
    /**
     * Whether the tooltip will have interative elements inside.
     *
     * Using this lets the browser know that this is an interactive area, not
     * just an informational tooltip, helping with accessibility.
     */
    interactive?: boolean;
    /**
     * Whether the tooltip should be hidden from users using screen readers.
     *
     * You should only use this if the information in the tooltip is either
     * redundant or unhelpful.
     */
    hideFromScreenreader?: boolean;
    /**
     * The delay before the tooltip is shown when the user hovers.
     *
     * Defaults to 500ms.
     */
    showDelay?: number | null | undefined;
    /**
     * The delay before the tooltip is hidden when the user quits hovering.
     *
     * Defaults to 600ms.
     */
    hideDelay?: number | null | undefined;
    /**
     * A space separated list of CSS classes.
     */
    surface$class?: string;
    /**
     * A list of CSS styles.
     */
    surface$style?: string;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    style = '',
    id = 'SMUI-tooltip-' + counter++,
    unbounded = false,
    xPos = 'detected',
    yPos = 'detected',
    persistent = false,
    interactive = persistent,
    hideFromScreenreader = false,
    showDelay = undefined,
    hideDelay = undefined,
    surface$class = '',
    surface$style = '',
    children,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['div'] as `surface\$${k}`]?: SmuiElementPropMap['div'][k];
    } = $props();

  let element: HTMLDivElement;
  let instance: MDCTooltipFoundation | undefined = $state();
  let eventManager = new SvelteEventManager();
  let nonReactiveLocationStore: {
    parent?: HTMLElement;
    nextSibling?: HTMLElement;
  } = {};
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalStyles: { [k: string]: string } = $state({});
  let internalAttrs: { [k: string]: string | undefined } = $state({});
  let surfaceAnimationStyles: { [k: string]: string } = $state({});
  let anchor = getContext<Writable<HTMLElement | undefined>>(
    'SMUI:tooltip:wrapper:anchor',
  );
  let tooltip = getContext<Writable<HTMLDivElement | undefined>>(
    'SMUI:tooltip:wrapper:tooltip',
  );
  const rich = getContext<boolean>('SMUI:tooltip:rich');

  const roleProps = $derived({
    role: rich && interactive ? 'dialog' : 'tooltip',
    tabindex: rich && persistent ? -1 : undefined,
  });

  let previousAnchor: HTMLElement | undefined = undefined;
  $effect(() => {
    if (instance && previousAnchor !== $anchor) {
      if (previousAnchor) {
        destroy(previousAnchor);
      }

      if ($anchor) {
        init($anchor);
      }

      previousAnchor = $anchor;
    }
  });

  $effect(() => {
    if (instance) {
      instance.setAnchorBoundaryType(
        AnchorBoundaryType[unbounded ? 'UNBOUNDED' : 'BOUNDED'],
      );
    }
  });

  $effect(() => {
    if (instance) {
      instance.setTooltipPosition({
        xPos: XPosition[xPos.toUpperCase() as keyof typeof XPosition],
        yPos: YPosition[yPos.toUpperCase() as keyof typeof YPosition],
      });
    }
  });

  $effect(() => {
    if (instance && showDelay != null) {
      instance.setShowDelay(showDelay);
    }
  });

  $effect(() => {
    if (instance && hideDelay != null) {
      instance.setHideDelay(hideDelay);
    }
  });

  setContext('SMUI:label:context', 'tooltip');

  onMount(() => {
    instance = new MDCTooltipFoundation({
      getAttribute: getAttr,
      setAttribute: addAttr,
      removeAttribute: removeAttr,
      addClass,
      hasClass,
      removeClass,
      getComputedStyleProperty: (propertyName) => {
        const element = getElement();
        let style = getComputedStyle(element).getPropertyValue(propertyName);
        if (style === 'auto') {
          element.classList.add('smui-banner--force-show');
          style = getComputedStyle(element).getPropertyValue(propertyName);
          element.classList.remove('smui-banner--force-show');
        }
        return style;
      },
      setStyleProperty: addStyle,
      setSurfaceAnimationStyleProperty: addSurfaceAnimationStyle,
      getViewportWidth: () => window.innerWidth,
      getViewportHeight: () => window.innerHeight,
      getTooltipSize: () => {
        const element = getElement();
        let size = {
          width: element.offsetWidth,
          height: element.offsetHeight,
        };
        if (size.width === 0 || size.height === 0) {
          element.classList.add('smui-banner--force-show');
          size = {
            width: element.offsetWidth,
            height: element.offsetHeight,
          };
          element.classList.remove('smui-banner--force-show');
        }
        return size;
      },
      getAnchorBoundingRect: () => {
        return $anchor ? $anchor.getBoundingClientRect() : null;
      },
      getParentBoundingRect: () => {
        let parent = getElement().parentElement;
        if (!rich) {
          parent = document.body;
        }
        return parent?.getBoundingClientRect() || null;
      },
      getAnchorAttribute: (attr) => {
        return $anchor ? $anchor.getAttribute(attr) : null;
      },
      setAnchorAttribute: (attr, value) => {
        $anchor && $anchor.setAttribute(attr, value);
      },
      isRTL: () => getComputedStyle(getElement()).direction === 'rtl',
      anchorContainsElement: (element) => {
        return !!($anchor && $anchor.contains(element));
      },
      tooltipContainsElement: (element) => {
        return getElement().contains(element);
      },
      focusAnchorElement: () => {
        $anchor && $anchor.focus();
      },
      registerEventHandler: (evt, handler) =>
        eventManager.on(getElement(), evt, handler),
      deregisterEventHandler: (evt, handler) =>
        eventManager.off(getElement(), evt, handler),
      registerAnchorEventHandler: (evt, handler) =>
        $anchor && eventManager.on($anchor, evt, handler),
      deregisterAnchorEventHandler: (evt, handler) =>
        $anchor && eventManager.off($anchor, evt, handler),
      registerDocumentEventHandler: (evt, handler) =>
        eventManager.on(document.body, evt, handler),
      deregisterDocumentEventHandler: (evt, handler) =>
        eventManager.off(document.body, evt, handler),
      registerWindowEventHandler: (evt, handler) =>
        eventManager.on(
          window,
          evt,
          handler,
          (evt === 'scroll' && { capture: true, passive: true }) || undefined,
        ),
      deregisterWindowEventHandler: (evt, handler) =>
        eventManager.off(window, evt, handler),
      notifyHidden: () => {
        dispatch(getElement(), 'SMUITooltipHidden');
      },
      notifyShown: () => {
        dispatch(getElement(), 'SMUITooltipShown');
      },
      // TODO: figure out why MDC-Web included these caret functions, because they're entirely undocumented.
      getTooltipCaretBoundingRect: () => {
        const caret = getElement().querySelector<HTMLElement>(
          `.${CssClasses.TOOLTIP_CARET_TOP}`,
        );
        if (!caret) {
          return null;
        }
        return caret.getBoundingClientRect();
      },
      setTooltipCaretStyle: (propertyName, value) => {
        const topCaret = getElement().querySelector<HTMLElement>(
          `.${CssClasses.TOOLTIP_CARET_TOP}`,
        );
        const bottomCaret = getElement().querySelector<HTMLElement>(
          `.${CssClasses.TOOLTIP_CARET_BOTTOM}`,
        );

        if (!topCaret || !bottomCaret) {
          return;
        }

        topCaret.style.setProperty(propertyName, value);
        bottomCaret.style.setProperty(propertyName, value);
      },
      clearTooltipCaretStyles: () => {
        const topCaret = getElement().querySelector<HTMLElement>(
          `.${CssClasses.TOOLTIP_CARET_TOP}`,
        );
        const bottomCaret = getElement().querySelector<HTMLElement>(
          `.${CssClasses.TOOLTIP_CARET_BOTTOM}`,
        );

        if (!topCaret || !bottomCaret) {
          return;
        }
        topCaret.removeAttribute('style');
        bottomCaret.removeAttribute('style');
      },
      getActiveElement: () => document.activeElement,
      isInstanceOfElement: (eventTarget: EventTarget | null) =>
        eventTarget instanceof Element,
    });

    $tooltip = element;

    return () => {
      if ($anchor) {
        destroy($anchor);
      }
      eventManager.clear();
    };
  });

  onDestroy(() => {
    if (
      !rich &&
      typeof document !== 'undefined' &&
      document.body === getElement()?.parentElement &&
      nonReactiveLocationStore.parent !== getElement()?.parentElement &&
      nonReactiveLocationStore.parent?.insertBefore &&
      nonReactiveLocationStore.nextSibling
    ) {
      nonReactiveLocationStore.parent?.insertBefore(
        getElement(),
        nonReactiveLocationStore.nextSibling,
      );
    }
  });

  function destroy(anchor: HTMLElement) {
    eventManager.off(anchor, 'focusout', handleAnchorFocusOut);
    if (rich && persistent) {
      eventManager.off(anchor, 'click', handleAnchorActivate);
      eventManager.off(anchor, 'keydown', handleAnchorActivate);
    } else {
      eventManager.off(anchor, 'mouseenter', handleAnchorMouseEnter);
      eventManager.off(anchor, 'focusin', handleAnchorFocus);
      eventManager.off(anchor, 'mouseleave', handleAnchorMouseLeave);
      eventManager.off(anchor, 'touchstart', handleAnchorTouchStart);
      eventManager.off(anchor, 'touchend', handleAnchorTouchEnd);
    }
    if (rich && interactive) {
      anchor.removeAttribute('aria-haspopup');
      anchor.removeAttribute('aria-expanded');
      anchor.removeAttribute('data-tooltip-id');
    } else {
      anchor.removeAttribute('aria-describedby');
    }

    instance?.destroy();
  }

  function init(anchor: HTMLElement) {
    eventManager.on(anchor, 'focusout', handleAnchorFocusOut);
    if (rich && persistent) {
      eventManager.on(anchor, 'click', handleAnchorActivate);
      eventManager.on(anchor, 'keydown', handleAnchorActivate);
    } else {
      eventManager.on(anchor, 'mouseenter', handleAnchorMouseEnter);
      eventManager.on(anchor, 'focusin', handleAnchorFocus);
      eventManager.on(anchor, 'mouseleave', handleAnchorMouseLeave);
      eventManager.on(anchor, 'touchstart', handleAnchorTouchStart);
      eventManager.on(anchor, 'touchend', handleAnchorTouchEnd);
    }
    if (rich && interactive) {
      anchor.setAttribute('aria-haspopup', 'dialog');
      anchor.setAttribute('aria-expanded', 'false');
      anchor.setAttribute('data-tooltip-id', id);
    } else {
      anchor.setAttribute('aria-describedby', id);
    }
    if (!rich) {
      hoistToBody();
    }

    instance?.init();
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
      } else {
        internalStyles[name] = value;
      }
    }
  }

  function addSurfaceAnimationStyle(name: string, value: string) {
    if (surfaceAnimationStyles[name] != value) {
      if (value === '' || value == null) {
        delete surfaceAnimationStyles[name];
      } else {
        surfaceAnimationStyles[name] = value;
      }
    }
  }

  function getAttr(name: string) {
    return name in internalAttrs
      ? (internalAttrs[name] ?? null)
      : getElement().getAttribute(name);
  }

  function addAttr(name: string, value: string) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function removeAttr(name: string) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      internalAttrs[name] = undefined;
    }
  }

  function handleAnchorFocusOut(event: FocusEvent) {
    // The foundation only watches for blur, which
    // doesn't fire on all components you would
    // anchor a tooltip to (since it doesn't
    // bubble), so we handle focusout like a blur.
    if (getElement().contains(event.relatedTarget as Node | null)) {
      return;
    }
    instance && instance.hide();
  }

  function handleAnchorActivate(event: MouseEvent | KeyboardEvent) {
    if (
      event.type === 'keydown' &&
      (event as KeyboardEvent).key !== 'Enter' &&
      (event as KeyboardEvent).key !== ' '
    ) {
      return;
    }
    instance && instance.handleAnchorClick();
  }

  function handleAnchorMouseEnter() {
    instance && instance.handleAnchorMouseEnter();
  }

  function handleAnchorFocus(event: FocusEvent) {
    instance && instance.handleAnchorFocus(event);
  }

  function handleAnchorMouseLeave() {
    instance && instance.handleAnchorMouseLeave();
  }

  function handleAnchorTouchStart() {
    // Purposefully capitalized differently to match MDC.
    instance && instance.handleAnchorTouchstart();
  }

  function handleAnchorTouchEnd() {
    // Purposefully capitalized differently to match MDC.
    instance && instance.handleAnchorTouchend();
  }

  function hoistToBody() {
    if ($anchor && document.body !== getElement().parentNode) {
      nonReactiveLocationStore.parent = getElement().parentElement ?? undefined;
      nonReactiveLocationStore.nextSibling =
        (getElement().nextElementSibling as HTMLElement | null) ?? undefined;
      document.body.appendChild(getElement());
    }
  }

  export function attachScrollHandler(
    addEventListenerFn: <K extends keyof GlobalEventHandlersEventMap>(
      event: K,
      handler: SpecificEventListener<K>,
    ) => void,
  ) {
    instance && instance.attachScrollHandler(addEventListenerFn);
  }

  export function removeScrollHandler(
    removeEventHandlerFn: <K extends keyof GlobalEventHandlersEventMap>(
      event: K,
      handler: SpecificEventListener<K>,
    ) => void,
  ) {
    instance && instance.removeScrollHandler(removeEventHandlerFn);
  }

  export function getElement() {
    return element;
  }
</script>
