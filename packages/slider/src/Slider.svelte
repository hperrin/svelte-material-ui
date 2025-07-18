<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={Object.entries({
    'mdc-slider': true,
    'mdc-slider--range': range,
    'mdc-slider--discrete': discrete,
    'mdc-slider--tick-marks': discrete && tickMarks,
    'mdc-slider--disabled': disabled,
    ...internalClasses,
    [className]: true,
  })
    .filter(([name, value]) => name !== '' && value)
    .map(([name]) => name)
    .join(' ')}
  {...range ? { 'data-min-range': `${minRange}` } : {}}
  {...exclude(restProps, ['input$'])}
>
  {#if range}
    <input
      bind:this={inputStart}
      class={classMap({
        [input$class]: true,
        'mdc-slider__input': true,
      })}
      type="range"
      {disabled}
      {step}
      {min}
      max={end}
      bind:value={start}
      {...inputStartAttrs}
      {...prefixFilter(restProps, 'input$')}
      onblur={(e) => {
        dispatch(getElement(), 'blur', e);
        restProps.input$onblur?.(e);
      }}
      onfocus={(e) => {
        dispatch(getElement(), 'focus', e);
        restProps.input$onfocus?.(e);
      }}
    />
    <input
      bind:this={input}
      class={classMap({
        [input$class]: true,
        'mdc-slider__input': true,
      })}
      type="range"
      {disabled}
      {step}
      min={start}
      {max}
      bind:value={end}
      {...inputProps}
      {...inputAttrs}
      {...prefixFilter(restProps, 'input$')}
      onblur={(e) => {
        dispatch(getElement(), 'blur', e);
        restProps.input$onblur?.(e);
      }}
      onfocus={(e) => {
        dispatch(getElement(), 'focus', e);
        restProps.input$onfocus?.(e);
      }}
    />
  {:else}
    <input
      bind:this={input}
      class={classMap({
        [input$class]: true,
        'mdc-slider__input': true,
      })}
      type="range"
      {disabled}
      {step}
      {min}
      {max}
      bind:value
      {...inputProps}
      {...inputAttrs}
      {...prefixFilter(restProps, 'input$')}
      onblur={(e) => {
        dispatch(getElement(), 'blur', e);
        restProps.input$onblur?.(e);
      }}
      onfocus={(e) => {
        dispatch(getElement(), 'focus', e);
        restProps.input$onfocus?.(e);
      }}
    />
  {/if}

  <div class="mdc-slider__track">
    <div class="mdc-slider__track--inactive"></div>
    <div class="mdc-slider__track--active">
      <div
        class="mdc-slider__track--active_fill"
        style={Object.entries(trackActiveStyles)
          .map(([name, value]) => `${name}: ${value};`)
          .join(' ')}
      ></div>
    </div>
    {#if discrete && tickMarks && step > 0}
      <div class="mdc-slider__tick-marks">
        {#each currentTickMarks as tickMark}
          <div
            class={tickMark === TickMark.ACTIVE
              ? 'mdc-slider__tick-mark--active'
              : 'mdc-slider__tick-mark--inactive'}
          ></div>
        {/each}
      </div>
    {/if}
  </div>
  {#if range}
    <div
      bind:this={thumbStart}
      use:Ripple={{
        unbounded: true,
        disabled,
        active: thumbStartRippleActive,
        eventTarget: inputStart,
        activeTarget: inputStart,
        addClass: (className) => addThumbClass(className, Thumb.START),
        removeClass: (className) => removeThumbClass(className, Thumb.START),
        addStyle: (name, value) => addThumbStyle(name, value, Thumb.START),
      }}
      class={classMap({
        'mdc-slider__thumb': true,
        ...thumbStartClasses,
      })}
      style={Object.entries(thumbStartStyles)
        .map(([name, value]) => `${name}: ${value};`)
        .join(' ')}
    >
      {#if discrete}
        <div class="mdc-slider__value-indicator-container" aria-hidden="true">
          <div class="mdc-slider__value-indicator">
            <span class="mdc-slider__value-indicator-text">{start}</span>
          </div>
        </div>
      {/if}
      <div bind:this={thumbKnobStart} class="mdc-slider__thumb-knob"></div>
    </div>
    <div
      bind:this={thumbEl}
      use:Ripple={{
        unbounded: true,
        disabled,
        active: thumbRippleActive,
        eventTarget: input,
        activeTarget: input,
        addClass: (className) => addThumbClass(className, Thumb.END),
        removeClass: (className) => removeThumbClass(className, Thumb.END),
        addStyle: (name, value) => addThumbStyle(name, value, Thumb.END),
      }}
      class={classMap({
        'mdc-slider__thumb': true,
        ...thumbClasses,
      })}
      style={Object.entries(thumbStyles)
        .map(([name, value]) => `${name}: ${value};`)
        .join(' ')}
    >
      {#if discrete}
        <div class="mdc-slider__value-indicator-container" aria-hidden="true">
          <div class="mdc-slider__value-indicator">
            <span class="mdc-slider__value-indicator-text">{end}</span>
          </div>
        </div>
      {/if}
      <div bind:this={thumbKnob} class="mdc-slider__thumb-knob"></div>
    </div>
  {:else}
    <div
      bind:this={thumbEl}
      use:Ripple={{
        unbounded: true,
        disabled,
        active: thumbRippleActive,
        eventTarget: input,
        activeTarget: input,
        addClass: (className) => addThumbClass(className, Thumb.END),
        removeClass: (className) => removeThumbClass(className, Thumb.END),
        addStyle: (name, value) => addThumbStyle(name, value, Thumb.END),
      }}
      class={classMap({
        'mdc-slider__thumb': true,
        ...thumbClasses,
      })}
      style={Object.entries(thumbStyles)
        .map(([name, value]) => `${name}: ${value};`)
        .join(' ')}
    >
      {#if discrete}
        <div class="mdc-slider__value-indicator-container" aria-hidden="true">
          <div class="mdc-slider__value-indicator">
            <span class="mdc-slider__value-indicator-text">{value}</span>
          </div>
        </div>
      {/if}
      <div bind:this={thumbKnob} class="mdc-slider__thumb-knob"></div>
    </div>
  {/if}
</div>

<script lang="ts">
  import { MDCSliderFoundation, Thumb, TickMark } from '@material/slider';
  import { onMount, onDestroy, getContext } from 'svelte';
  import type {
    AddLayoutListener,
    RemoveLayoutListener,
    SmuiAttrs,
    SmuiElementPropMap,
  } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
    SvelteEventManager,
  } from '@smui/common/internal';
  import Ripple from '@smui/ripple';

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
     * Whether the input is disabled.
     */
    disabled?: boolean;
    /**
     * Whether the input is for a range.
     */
    range?: boolean;
    /**
     * Whether to show a discrete value indicator when sliding.
     */
    discrete?: boolean;
    /**
     * Whether to show tick marks on the slider.
     */
    tickMarks?: boolean;
    /**
     * The step in between values.
     */
    step?: number;
    /**
     * The minimum value.
     */
    min?: number;
    /**
     * The maximum value.
     */
    max?: number;
    /**
     * The minimum range.
     */
    minRange?: number;
    /**
     * The value of the input.
     */
    value?: number | undefined;
    /**
     * The value of the start of the range.
     */
    start?: number | undefined;
    /**
     * The value of the end of the range.
     */
    end?: number | undefined;
    /**
     * A function that converts values to their ARIA value strings.
     */
    valueToAriaValueTextFn?: (value: number, thumb: Thumb) => string;
    /**
     * Whether to hide focus styles when a change comes from a pointer (finger).
     */
    hideFocusStylesForPointerEvents?: boolean;
    /**
     * A space separated list of CSS classes.
     */
    input$class?: string;
  };
  let {
    use = [],
    class: className = '',
    disabled = false,
    range = false,
    discrete = false,
    tickMarks = false,
    step = 1,
    min = 0,
    max = 100,
    minRange = 0,
    value = $bindable(),
    start = $bindable(),
    end = $bindable(),
    valueToAriaValueTextFn = (value) => `${value}`,
    hideFocusStylesForPointerEvents = false,
    input$class = '',
    ...restProps
  }: OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['input'] as `input\$${k}`]?: SmuiElementPropMap['input'][k];
    } & {
      input$type?: never;
      input$disabled?: never;
      input$step?: never;
      input$min?: never;
      input$max?: never;
      input$value?: never;
      input$checked?: never;
      input$group?: never;
    } = $props();

  let element: HTMLDivElement;
  let instance: MDCSliderFoundation | undefined = $state();
  let eventManager = new SvelteEventManager();
  let input: HTMLInputElement | undefined = $state();
  let inputStart: HTMLInputElement | undefined = $state();
  let thumbEl: HTMLDivElement;
  let thumbStart: HTMLDivElement | undefined = undefined;
  let thumbKnob: HTMLDivElement;
  let thumbKnobStart: HTMLDivElement | undefined = undefined;
  let internalClasses: { [k: string]: boolean } = $state({});
  let thumbStartClasses: { [k: string]: boolean } = $state({});
  let thumbClasses: { [k: string]: boolean } = $state({});
  let inputAttrs: { [k: string]: string | undefined } = $state({});
  let inputStartAttrs: { [k: string]: string | undefined } = $state({});
  let trackActiveStyles: { [k: string]: string } = $state({});
  let thumbStyles: { [k: string]: string } = $state({});
  let thumbStartStyles: { [k: string]: string } = $state({});
  let thumbRippleActive = $state(false);
  let thumbStartRippleActive = $state(false);
  let currentTickMarks: TickMark[] = $state([]);
  let inputProps =
    getContext<{ id?: string } | undefined>('SMUI:generic:input:props') ?? {};
  let addLayoutListener = getContext<AddLayoutListener | undefined>(
    'SMUI:addLayoutListener',
  );
  let removeLayoutListener: RemoveLayoutListener | undefined;

  let previousMin = min;
  $effect(() => {
    if (min !== previousMin) {
      if (instance) {
        instance.setMin(min);
      }
      previousMin = min;
    }
  });

  let previousMax = max;
  $effect(() => {
    if (max !== previousMax) {
      if (instance) {
        instance.setMax(max);
      }
      previousMax = max;
    }
  });

  let previousStep = step;
  $effect(() => {
    if (step !== previousStep) {
      if (instance) {
        instance.setStep(step);
      }
      previousStep = step;
    }
  });

  let previousDiscrete = discrete;
  $effect(() => {
    if (discrete !== previousDiscrete) {
      if (instance) {
        instance.setIsDiscrete(discrete);
      }
      previousDiscrete = discrete;
    }
  });

  let previousTickMarks = tickMarks;
  $effect(() => {
    if (tickMarks !== previousTickMarks) {
      if (instance) {
        instance.setHasTickMarks(tickMarks);
      }
      previousTickMarks = tickMarks;
    }
  });

  if (tickMarks && step > 0) {
    const absMax = max + Math.abs(min);
    if (range && typeof start === 'number' && typeof end === 'number') {
      const absStart = start + Math.abs(min);
      const absEnd = end + Math.abs(min);
      currentTickMarks = [
        ...Array(absStart / step).map(() => TickMark.INACTIVE),
        ...Array(
          absMax / step - absStart / step - (absMax - absEnd) / step + 1,
        ).map(() => TickMark.ACTIVE),
        ...Array((absMax - absEnd) / step).map(() => TickMark.INACTIVE),
      ];
    } else if (typeof value === 'number') {
      const absValue = value + Math.abs(min);
      currentTickMarks = [
        ...Array(absValue / step + 1).map(() => TickMark.ACTIVE),
        ...Array((absMax - absValue) / step).map(() => TickMark.INACTIVE),
      ];
    }
  }

  if (range && typeof start === 'number' && typeof end === 'number') {
    const percent = (end - start) / (max - min);
    const percentStart = start / (max - min);
    const percentEnd = end / (max - min);
    trackActiveStyles.transform = `scaleX(${percent})`;
    thumbStyles.left = `calc(${percentEnd * 100}% -24px)`;
    thumbStartStyles.left = `calc(${percentStart * 100}% -24px)`;
  } else if (typeof value === 'number') {
    const percent = value / (max - min);
    trackActiveStyles.transform = `scaleX(${percent})`;
    thumbStyles.left = `calc(${percent * 100}% -24px)`;
  }

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  let previousValue = value;
  let previousStart = start;
  let previousEnd = end;
  $effect(() => {
    if (instance) {
      if (previousValue !== value && typeof value === 'number') {
        instance.setValue(value);
      }
      if (previousStart !== start && typeof start === 'number') {
        instance.setValueStart(start);
      }
      if (previousEnd !== end && typeof end === 'number') {
        instance.setValue(end);
      }
      previousValue = value;
      previousStart = start;
      previousEnd = end;
      // Needed for range start to take effect.
      instance.layout();
    }
  });

  const SMUIGenericInputMount = getContext<
    ((accessor: any) => void) | undefined
  >('SMUI:generic:input:mount');
  const SMUIGenericInputUnmount = getContext<
    ((accessor: any) => void) | undefined
  >('SMUI:generic:input:unmount');

  onMount(() => {
    instance = new MDCSliderFoundation({
      hasClass,
      addClass,
      removeClass,
      addThumbClass,
      removeThumbClass,
      getAttribute: (attribute) => getElement().getAttribute(attribute),
      getInputValue: (thumb) =>
        `${(range ? (thumb === Thumb.START ? start : end) : value) ?? 0}`,
      setInputValue: (val, thumb) => {
        if (range) {
          if (thumb === Thumb.START) {
            start = Number(val);
            previousStart = start;
          } else {
            end = Number(val);
            previousEnd = end;
          }
        } else {
          value = Number(val);
          previousValue = value;
        }
      },
      getInputAttribute: getInputAttr,
      setInputAttribute: addInputAttr,
      removeInputAttribute: removeInputAttr,
      focusInput: (thumb) => {
        if (range && thumb === Thumb.START && inputStart) {
          inputStart.focus();
        } else {
          input?.focus();
        }
      },
      isInputFocused: (thumb) =>
        (range && thumb === Thumb.START ? inputStart : input) ===
        document.activeElement,
      shouldHideFocusStylesForPointerEvents: () =>
        hideFocusStylesForPointerEvents,
      getThumbKnobWidth: (thumb) =>
        (
          (range && thumb === Thumb.START ? thumbKnobStart : thumbKnob) ??
          thumbKnob
        ).getBoundingClientRect().width,
      getThumbBoundingClientRect: (thumb) =>
        (
          (range && thumb === Thumb.START ? thumbStart : thumbEl) ?? thumbEl
        ).getBoundingClientRect(),
      getBoundingClientRect: () => getElement().getBoundingClientRect(),
      getValueIndicatorContainerWidth: (thumb: Thumb) => {
        return (
          (range && thumb === Thumb.START ? thumbStart : thumbEl) ?? thumbEl
        )
          .querySelector<HTMLElement>(`.mdc-slider__value-indicator-container`)!
          .getBoundingClientRect().width;
      },
      isRTL: () => getComputedStyle(getElement()).direction === 'rtl',
      setThumbStyleProperty: addThumbStyle,
      removeThumbStyleProperty: removeThumbStyle,
      setTrackActiveStyleProperty: addTrackActiveStyle,
      removeTrackActiveStyleProperty: removeTrackActiveStyle,
      // Handled by Svelte.
      setValueIndicatorText: (_value, _thumb) => undefined,
      getValueToAriaValueTextFn: () => valueToAriaValueTextFn,
      updateTickMarks: (tickMarks) => {
        currentTickMarks = tickMarks;
      },
      setPointerCapture: (pointerId) => {
        getElement().setPointerCapture(pointerId);
      },
      emitChangeEvent: (value, thumb) => {
        dispatch(getElement(), 'SMUISliderChange', { value, thumb });
      },
      emitInputEvent: (value, thumb) => {
        dispatch(getElement(), 'SMUISliderInput', { value, thumb });
      },
      emitDragStartEvent: (_, thumb) => {
        // Emitting event is not yet implemented. See issue:
        // https://github.com/material-components/material-components-web/issues/6448
        if (range && thumb === Thumb.START) {
          thumbStartRippleActive = true;
        } else {
          thumbRippleActive = true;
        }
      },
      emitDragEndEvent: (_, thumb) => {
        // Emitting event is not yet implemented. See issue:
        // https://github.com/material-components/material-components-web/issues/6448
        if (range && thumb === Thumb.START) {
          thumbStartRippleActive = false;
        } else {
          thumbRippleActive = false;
        }
      },
      registerEventHandler: (evtType, handler) =>
        eventManager.on(getElement(), evtType, handler),
      deregisterEventHandler: (evtType, handler) =>
        eventManager.off(getElement(), evtType, handler),
      registerThumbEventHandler: (thumb, evtType, handler) => {
        const el = range && thumb === Thumb.START ? thumbStart : thumbEl;
        if (el) {
          eventManager.on(el, evtType, handler);
        }
      },
      deregisterThumbEventHandler: (thumb, evtType, handler) => {
        const el = range && thumb === Thumb.START ? thumbStart : thumbEl;
        if (el) {
          eventManager.off(el, evtType, handler);
        }
      },
      registerInputEventHandler: (thumb, evtType, handler) => {
        const el = range && thumb === Thumb.START ? inputStart : input;
        if (el) {
          eventManager.on(el, evtType, handler);
        }
      },
      deregisterInputEventHandler: (thumb, evtType, handler) => {
        const el = range && thumb === Thumb.START ? inputStart : input;
        if (el) {
          eventManager.off(el, evtType, handler);
        }
      },
      registerBodyEventHandler: (evtType, handler) =>
        eventManager.on(document.body, evtType, handler),
      deregisterBodyEventHandler: (evtType, handler) =>
        eventManager.off(document.body, evtType, handler),
      registerWindowEventHandler: (evtType, handler) =>
        eventManager.on(window, evtType, handler),
      deregisterWindowEventHandler: (evtType, handler) =>
        eventManager.off(window, evtType, handler),
    });

    const accessor = {
      get element() {
        return getElement();
      },
      activateRipple() {
        if (!disabled) {
          thumbRippleActive = true;
        }
      },
      deactivateRipple() {
        thumbRippleActive = false;
      },
    };

    SMUIGenericInputMount && SMUIGenericInputMount(accessor);

    instance.init();
    instance.layout({ skipUpdateUI: true });

    return () => {
      SMUIGenericInputUnmount && SMUIGenericInputUnmount(accessor);

      instance?.destroy();
      eventManager.clear();
    };
  });

  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
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

  function addThumbClass(className: string, thumb: Thumb) {
    if (range && thumb === Thumb.START) {
      if (!thumbStartClasses[className]) {
        thumbStartClasses[className] = true;
      }
    } else {
      if (!thumbClasses[className]) {
        thumbClasses[className] = true;
      }
    }
  }

  function removeThumbClass(className: string, thumb: Thumb) {
    if (range && thumb === Thumb.START) {
      if (!(className in thumbStartClasses) || thumbStartClasses[className]) {
        thumbStartClasses[className] = false;
      }
    } else {
      if (!(className in thumbClasses) || thumbClasses[className]) {
        thumbClasses[className] = false;
      }
    }
  }

  function addThumbStyle(name: string, value: string, thumb: Thumb) {
    if (range && thumb === Thumb.START) {
      if (thumbStartStyles[name] != value) {
        if (value === '' || value == null) {
          delete thumbStartStyles[name];
        } else {
          thumbStartStyles[name] = value;
        }
      }
    } else {
      if (thumbStyles[name] != value) {
        if (value === '' || value == null) {
          delete thumbStyles[name];
        } else {
          thumbStyles[name] = value;
        }
      }
    }
  }

  function removeThumbStyle(name: string, thumb: Thumb) {
    if (range && thumb === Thumb.START) {
      if (name in thumbStartStyles) {
        delete thumbStartStyles[name];
      }
    } else {
      if (name in thumbStyles) {
        delete thumbStyles[name];
      }
    }
  }

  function getInputAttr(name: string, thumb: Thumb) {
    // Some custom logic for "value", since Svelte doesn't seem to actually
    // set the attribute, just the DOM property.
    if (range && thumb === Thumb.START) {
      if (name === 'value') {
        return `${start}`;
      }
      return name in inputStartAttrs
        ? (inputStartAttrs[name] ?? null)
        : (inputStart?.getAttribute(name) ?? null);
    } else {
      if (name === 'value') {
        return `${range ? end : value}`;
      }
      return name in inputAttrs
        ? (inputAttrs[name] ?? null)
        : (input?.getAttribute(name) ?? null);
    }
  }

  function addInputAttr(name: string, value: string, thumb: Thumb) {
    if (range && thumb === Thumb.START) {
      if (inputStartAttrs[name] !== value) {
        inputStartAttrs[name] = value;
      }
    } else {
      if (inputAttrs[name] !== value) {
        inputAttrs[name] = value;
      }
    }
  }

  function removeInputAttr(name: string, thumb: Thumb) {
    if (range && thumb === Thumb.START) {
      if (!(name in inputStartAttrs) || inputStartAttrs[name] != null) {
        inputStartAttrs[name] = undefined;
      }
    } else {
      if (!(name in inputAttrs) || inputAttrs[name] != null) {
        inputAttrs[name] = undefined;
      }
    }
  }

  function addTrackActiveStyle(name: string, value: string) {
    if (trackActiveStyles[name] != value) {
      if (value === '' || value == null) {
        delete trackActiveStyles[name];
      } else {
        trackActiveStyles[name] = value;
      }
    }
  }

  function removeTrackActiveStyle(name: string) {
    if (name in trackActiveStyles) {
      delete trackActiveStyles[name];
    }
  }

  export function layout() {
    return instance?.layout();
  }

  export function getId() {
    return inputProps && inputProps.id;
  }

  export function getElement() {
    return element;
  }
</script>
