<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-tooltip': true,
    'mdc-tooltip--rich': rich,
    ...internalClasses,
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
  on:transitionend={() => instance && instance.handleTransitionEnd()}
  {...roleProps}
  {...internalAttrs}
  {...exclude($$restProps, ['surface$'])}
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
    {...prefixFilter($$restProps, 'surface$')}
  >
    <slot />
  </div>
</div>

<script context="module" lang="ts">
  let counter = 0;
</script>

<script lang="ts">
  import type { SpecificEventListener } from '@material/base/types';
  import {
    MDCTooltipFoundation,
    AnchorBoundaryType,
    XPosition,
    YPosition,
    CssClasses,
  } from '@material/tooltip';
  import { onMount, onDestroy, getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs, SmuiElementPropMap } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    style?: string;
    id?: string;
    unbounded?: boolean;
    xPos?: Lowercase<keyof typeof XPosition>;
    yPos?: Lowercase<keyof typeof YPosition>;
    persistent?: boolean;
    interactive?: boolean;
    hideFromScreenreader?: boolean;
    showDelay?: number | null | undefined;
    hideDelay?: number | null | undefined;
    surface$class?: string;
    surface$style?: string;
  };
  type $$Props = OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['div'] as `surface\$${k}`]?: SmuiElementPropMap['div'][k];
    };

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let id = 'SMUI-tooltip-' + counter++;
  export let unbounded = false;
  export let xPos: Lowercase<keyof typeof XPosition> = 'detected';
  export let yPos: Lowercase<keyof typeof YPosition> = 'detected';
  export let persistent = false;
  export let interactive = persistent;
  export let hideFromScreenreader = false;
  export let showDelay: number | null | undefined = undefined;
  export let hideDelay: number | null | undefined = undefined;
  export let surface$class = '';
  export let surface$style = '';

  let element: HTMLDivElement;
  let instance: MDCTooltipFoundation;
  let nonReactiveLocationStore: {
    readonly parent?: HTMLElement;
    readonly nextSibling?: HTMLElement;
    setParent(value: HTMLElement | undefined): void;
    setNextSibling(value: HTMLElement | undefined): void;
  } = {
    setParent(value: HTMLElement | undefined) {
      Object.defineProperty(this, 'parent', { value });
    },
    setNextSibling(value: HTMLElement | undefined) {
      Object.defineProperty(this, 'nextSibling', { value });
    },
  };
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};
  let internalAttrs: { [k: string]: string | undefined } = {};
  let surfaceAnimationStyles: { [k: string]: string } = {};
  let anchor = getContext<Writable<HTMLElement | undefined>>(
    'SMUI:tooltip:wrapper:anchor'
  );
  let tooltip = getContext<Writable<HTMLDivElement | undefined>>(
    'SMUI:tooltip:wrapper:tooltip'
  );
  const rich = getContext<boolean>('SMUI:tooltip:rich');

  $: roleProps = {
    role: rich && interactive ? 'dialog' : 'tooltip',
    tabindex: rich && persistent ? -1 : undefined,
  };

  let previousAnchor: HTMLElement | undefined = undefined;
  $: if (instance && previousAnchor !== $anchor) {
    if (previousAnchor) {
      destroy(previousAnchor);
    }

    if ($anchor) {
      init($anchor);
    }

    previousAnchor = $anchor;
  }

  $: if (instance) {
    instance.setAnchorBoundaryType(
      AnchorBoundaryType[unbounded ? 'UNBOUNDED' : 'BOUNDED']
    );
  }

  $: if (instance) {
    instance.setTooltipPosition({
      xPos: XPosition[xPos.toUpperCase() as keyof typeof XPosition],
      yPos: YPosition[yPos.toUpperCase() as keyof typeof YPosition],
    });
  }

  $: if (instance && showDelay != null) {
    instance.setShowDelay(showDelay);
  }

  $: if (instance && hideDelay != null) {
    instance.setHideDelay(hideDelay);
  }

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
      registerEventHandler: (evt, handler) => {
        getElement().addEventListener(evt, handler);
      },
      deregisterEventHandler: (evt, handler) => {
        getElement().removeEventListener(evt, handler);
      },
      registerAnchorEventHandler: (evt, handler) => {
        $anchor && $anchor.addEventListener(evt, handler);
      },
      deregisterAnchorEventHandler: (evt, handler) => {
        $anchor && $anchor.removeEventListener(evt, handler);
      },
      registerDocumentEventHandler: (evt, handler) => {
        document.body.addEventListener(evt, handler);
      },
      deregisterDocumentEventHandler: (evt, handler) => {
        document.body.removeEventListener(evt, handler);
      },
      registerWindowEventHandler: (evt, handler) => {
        window.addEventListener(
          evt,
          handler,
          evt === 'scroll' && { capture: true, passive: true }
        );
      },
      deregisterWindowEventHandler: (evt, handler) => {
        window.removeEventListener(
          evt,
          handler as EventListener,
          evt === 'scroll' &&
            ({ capture: true, passive: true } as EventListenerOptions)
        );
      },
      notifyHidden: () => {
        dispatch(
          getElement(),
          'SMUITooltip:hidden',
          undefined,
          undefined,
          true
        );
      },
      // TODO: figure out why MDC-Web included these caret functions, because they're entirely undocumented.
      getTooltipCaretBoundingRect: () => {
        const caret = getElement().querySelector<HTMLElement>(
          `.${CssClasses.TOOLTIP_CARET_TOP}`
        );
        if (!caret) {
          return null;
        }
        return caret.getBoundingClientRect();
      },
      setTooltipCaretStyle: (propertyName, value) => {
        const topCaret = getElement().querySelector<HTMLElement>(
          `.${CssClasses.TOOLTIP_CARET_TOP}`
        );
        const bottomCaret = getElement().querySelector<HTMLElement>(
          `.${CssClasses.TOOLTIP_CARET_BOTTOM}`
        );

        if (!topCaret || !bottomCaret) {
          return;
        }

        topCaret.style.setProperty(propertyName, value);
        bottomCaret.style.setProperty(propertyName, value);
      },
      clearTooltipCaretStyles: () => {
        const topCaret = getElement().querySelector<HTMLElement>(
          `.${CssClasses.TOOLTIP_CARET_TOP}`
        );
        const bottomCaret = getElement().querySelector<HTMLElement>(
          `.${CssClasses.TOOLTIP_CARET_BOTTOM}`
        );

        if (!topCaret || !bottomCaret) {
          return;
        }
        topCaret.removeAttribute('style');
        bottomCaret.removeAttribute('style');
      },
      getActiveElement: () => document.activeElement,
    });

    $tooltip = element;

    return () => {
      if ($anchor) {
        destroy($anchor);
      }
    };
  });

  onDestroy(() => {
    if (
      !rich &&
      typeof document !== 'undefined' &&
      document.body === getElement().parentElement &&
      nonReactiveLocationStore.parent !== getElement().parentElement &&
      nonReactiveLocationStore.parent?.insertBefore &&
      nonReactiveLocationStore.nextSibling
    ) {
      nonReactiveLocationStore.parent.insertBefore(
        getElement(),
        nonReactiveLocationStore.nextSibling
      );
    }
  });

  function destroy(anchor: HTMLElement) {
    anchor.removeEventListener('focusout', handleAnchorFocusOut);
    if (rich && persistent) {
      anchor.removeEventListener('click', handleAnchorActivate);
      anchor.removeEventListener('keydown', handleAnchorActivate);
    } else {
      anchor.removeEventListener('mouseenter', handleAnchorMouseEnter);
      anchor.removeEventListener('focusin', handleAnchorFocus);
      anchor.removeEventListener('mouseleave', handleAnchorMouseLeave);
      anchor.removeEventListener('touchstart', handleAnchorTouchStart);
      anchor.removeEventListener('touchend', handleAnchorTouchEnd);
    }
    if (rich && interactive) {
      anchor.removeAttribute('aria-haspopup');
      anchor.removeAttribute('aria-expanded');
      anchor.removeAttribute('data-tooltip-id');
    } else {
      anchor.removeAttribute('aria-describedby');
    }

    instance.destroy();
  }

  function init(anchor: HTMLElement) {
    anchor.addEventListener('focusout', handleAnchorFocusOut);
    if (rich && persistent) {
      anchor.addEventListener('click', handleAnchorActivate);
      anchor.addEventListener('keydown', handleAnchorActivate);
    } else {
      anchor.addEventListener('mouseenter', handleAnchorMouseEnter);
      anchor.addEventListener('focusin', handleAnchorFocus);
      anchor.addEventListener('mouseleave', handleAnchorMouseLeave);
      anchor.addEventListener('touchstart', handleAnchorTouchStart);
      anchor.addEventListener('touchend', handleAnchorTouchEnd);
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

    instance.init();
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

  function addSurfaceAnimationStyle(name: string, value: string) {
    if (surfaceAnimationStyles[name] != value) {
      if (value === '' || value == null) {
        delete surfaceAnimationStyles[name];
        surfaceAnimationStyles = surfaceAnimationStyles;
      } else {
        surfaceAnimationStyles[name] = value;
      }
    }
  }

  function getAttr(name: string) {
    return name in internalAttrs
      ? internalAttrs[name] ?? null
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
    if (element.contains(event.relatedTarget as Node | null)) {
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
      nonReactiveLocationStore.setParent(
        getElement().parentElement ?? undefined
      );
      nonReactiveLocationStore.setNextSibling(
        (getElement().nextElementSibling as HTMLElement | null) ?? undefined
      );
      document.body.appendChild(getElement());
    }
  }

  export function attachScrollHandler(
    addEventListenerFn: <K extends keyof GlobalEventHandlersEventMap>(
      event: K,
      handler: SpecificEventListener<K>
    ) => void
  ) {
    instance && instance.attachScrollHandler(addEventListenerFn);
  }

  export function removeScrollHandler(
    removeEventHandlerFn: <K extends keyof GlobalEventHandlersEventMap>(
      event: K,
      handler: SpecificEventListener<K>
    ) => void
  ) {
    instance && instance.removeScrollHandler(removeEventHandlerFn);
  }

  export function getElement() {
    return element;
  }
</script>
