<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-tooltip': !rich,
    'mdc-tooltip--rich': rich,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  role={rich && interactive ? 'dialog' : 'tooltip'}
  aria-hidden="true"
  {id}
  tabindex={rich && persistent ? '-1' : null}
  data-mdc-tooltip-persist={rich && persistent ? 'true' : null}
  data-mdc-tooltip-persistent={/* MDC uses this attr, but document the one above */ rich &&
  persistent
    ? 'true'
    : null}
  on:transitionend={() => instance && instance.handleTransitionEnd()}
  {...internalAttrs}
  {...exclude($$restProps, ['surface$'])}
>
  <div
    class={classMap({
      [surface$class]: true,
      'mdc-tooltip__surface': true,
    })}
    style={Object.entries(surfaceStyles)
      .map(([name, value]) => `${name}: ${value};`)
      .concat([surface$style])
      .join(' ')}
    {...prefixFilter($$restProps, 'surface$')}
  >
    <slot />
  </div>
</div>

<script context="module">
  let counter = 0;
</script>

<script>
  import {
    MDCTooltipFoundation,
    AnchorBoundaryType,
    XPosition,
    YPosition,
  } from '@material/tooltip';
  import { onMount, onDestroy, getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let id = 'SMUI-tooltip-' + counter++;
  export let unbounded = false;
  export let xPos = 'detected';
  export let yPos = 'detected';
  export let persistent = false;
  export let interactive = persistent;
  export let surface$class = '';
  export let surface$style = '';

  let element;
  let instance;
  let nonReactiveLocationStore = {
    setParent(value) {
      Object.defineProperty(this, 'parent', { value });
    },
    setNextSibling(value) {
      Object.defineProperty(this, 'nextSibling', { value });
    },
  };
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let surfaceStyles = {};
  let anchor = getContext('SMUI:tooltip:wrapper:anchor');
  let tooltip = getContext('SMUI:tooltip:wrapper:tooltip');
  const rich = getContext('SMUI:tooltip:rich');

  let previousAnchor = null;
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
      xPos: XPosition[xPos.toUpperCase()],
      yPos: YPosition[yPos.toUpperCase()],
    });
  }

  onMount(() => {
    instance = new MDCTooltipFoundation({
      getAttribute: getAttr,
      setAttribute: addAttr,
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
      setSurfaceStyleProperty: addSurfaceStyle,
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
        let parent = getElement().parentNode;
        if (!rich) {
          parent = document.body;
        }
        return parent.getBoundingClientRect() || null;
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
          handler,
          evt === 'scroll' && { capture: true, passive: true }
        );
      },
      notifyHidden: () => {
        dispatch(getElement(), 'MDCTooltip:hidden');
      },
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
      document.body === getElement().parentNode &&
      nonReactiveLocationStore.parent.insertBefore
    ) {
      nonReactiveLocationStore.parent.insertBefore(
        getElement(),
        nonReactiveLocationStore.nextSibling
      );
    }
  });

  function destroy(anchor) {
    anchor.removeEventListener('focusout', handleAnchorBlur);
    if (rich && persistent) {
      anchor.removeEventListener('click', handleAnchorActivate);
      anchor.removeEventListener('keydown', handleAnchorActivate);
    } else {
      anchor.removeEventListener('mouseenter', handleAnchorMouseEnter);
      anchor.removeEventListener('focusin', handleAnchorFocus);
      anchor.removeEventListener('mouseleave', handleAnchorMouseLeave);
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

  function init(anchor) {
    anchor.addEventListener('focusout', handleAnchorBlur);
    if (rich && persistent) {
      anchor.addEventListener('click', handleAnchorActivate);
      anchor.addEventListener('keydown', handleAnchorActivate);
    } else {
      anchor.addEventListener('mouseenter', handleAnchorMouseEnter);
      anchor.addEventListener('focusin', handleAnchorFocus);
      anchor.addEventListener('mouseleave', handleAnchorMouseLeave);
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
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }

  function addSurfaceStyle(name, value) {
    if (surfaceStyles[name] != value) {
      if (value === '' || value == null) {
        delete surfaceStyles[name];
        surfaceStyles = surfaceStyles;
      } else {
        surfaceStyles[name] = value;
      }
    }
  }

  function getAttr(name) {
    return name in internalAttrs
      ? internalAttrs[name]
      : getElement().getAttribute(name);
  }

  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function handleAnchorBlur(event) {
    instance && instance.handleAnchorBlur(event);
  }

  function handleAnchorActivate(event) {
    if (
      event.type === 'keydown' &&
      event.key !== 'Enter' &&
      event.key !== ' '
    ) {
      return;
    }
    instance && instance.handleAnchorClick();
  }

  function handleAnchorMouseEnter() {
    instance && instance.handleAnchorMouseEnter();
  }

  function handleAnchorFocus(event) {
    instance && instance.handleAnchorFocus(event);
  }

  function handleAnchorMouseLeave() {
    instance && instance.handleAnchorMouseLeave();
  }

  function hoistToBody() {
    if ($anchor && document.body !== getElement().parentNode) {
      nonReactiveLocationStore.setParent(getElement().parentNode);
      nonReactiveLocationStore.setNextSibling(getElement().nextSibling);
      document.body.appendChild(getElement());
    }
  }

  export function getElement() {
    return element;
  }
</script>
