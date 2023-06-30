<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={Object.entries({
    [className]: true,
    'mdc-slider': true,
    'mdc-slider--range': range,
    'mdc-slider--discrete': discrete,
    'mdc-slider--tick-marks': discrete && tickMarks,
    'mdc-slider--disabled': disabled,
    ...internalClasses,
  })
    .filter(([name, value]) => name !== '' && value)
    .map(([name]) => name)
    .join(' ')}
  {...range ? { 'data-min-range': `${minRange}` } : {}}
  {...exclude($$restProps, ['input$'])}
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
      on:blur
      on:focus
      {...inputStartAttrs}
      {...prefixFilter($$restProps, 'input$')}
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
      on:blur
      on:focus
      {...inputProps}
      {...inputAttrs}
      {...prefixFilter($$restProps, 'input$')}
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
      on:blur
      on:focus
      {...inputProps}
      {...inputAttrs}
      {...prefixFilter($$restProps, 'input$')}
    />
  {/if}

  <div class="mdc-slider__track">
    <div class="mdc-slider__track--inactive" />
    <div class="mdc-slider__track--active">
      <div
        class="mdc-slider__track--active_fill"
        style={Object.entries(trackActiveStyles)
          .map(([name, value]) => `${name}: ${value};`)
          .join(' ')}
      />
    </div>
    {#if discrete && tickMarks && step > 0}
      <div class="mdc-slider__tick-marks">
        {#each currentTickMarks as tickMark}
          <div
            class={tickMark === TickMark.ACTIVE
              ? 'mdc-slider__tick-mark--active'
              : 'mdc-slider__tick-mark--inactive'}
          />
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
      <div bind:this={thumbKnobStart} class="mdc-slider__thumb-knob" />
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
      <div bind:this={thumbKnob} class="mdc-slider__thumb-knob" />
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
      <div bind:this={thumbKnob} class="mdc-slider__thumb-knob" />
    </div>
  {/if}
</div>

<script lang="ts">
  import { MDCSliderFoundation, Thumb, TickMark } from '@material/slider';
  import { onMount, onDestroy, getContext } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type {
    AddLayoutListener,
    RemoveLayoutListener,
    SmuiAttrs,
    SmuiElementPropMap,
  } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal';
  import Ripple from '@smui/ripple';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    disabled?: boolean;
    range?: boolean;
    discrete?: boolean;
    tickMarks?: boolean;
    step?: number;
    min?: number;
    max?: number;
    minRange?: number;
    value?: number | undefined;
    start?: number | undefined;
    end?: number | undefined;
    valueToAriaValueTextFn?: (value: number, thumb: Thumb) => string;
    hideFocusStylesForPointerEvents?: boolean;
    input$class?: string;
  };
  type $$Props = OwnProps &
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
    };

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let disabled = false;
  export let range = false;
  export let discrete = false;
  export let tickMarks = false;
  export let step = 1;
  export let min = 0;
  export let max = 100;
  export let minRange = 0;
  export let value: number | undefined = undefined;
  export let start: number | undefined = undefined;
  export let end: number | undefined = undefined;
  export let valueToAriaValueTextFn: (value: number, thumb: Thumb) => string = (
    value
  ) => `${value}`;
  export let hideFocusStylesForPointerEvents = false;
  export let input$class = '';

  let element: HTMLDivElement;
  let instance: MDCSliderFoundation;
  let input: HTMLInputElement;
  let inputStart: HTMLInputElement | undefined = undefined;
  let thumbEl: HTMLDivElement;
  let thumbStart: HTMLDivElement | undefined = undefined;
  let thumbKnob: HTMLDivElement;
  let thumbKnobStart: HTMLDivElement | undefined = undefined;
  let internalClasses: { [k: string]: boolean } = {};
  let thumbStartClasses: { [k: string]: boolean } = {};
  let thumbClasses: { [k: string]: boolean } = {};
  let inputAttrs: { [k: string]: string | undefined } = {};
  let inputStartAttrs: { [k: string]: string | undefined } = {};
  let trackActiveStyles: { [k: string]: string } = {};
  let thumbStyles: { [k: string]: string } = {};
  let thumbStartStyles: { [k: string]: string } = {};
  let thumbRippleActive = false;
  let thumbStartRippleActive = false;
  let currentTickMarks: TickMark[];
  let inputProps =
    getContext<{ id?: string } | undefined>('SMUI:generic:input:props') ?? {};
  let addLayoutListener = getContext<AddLayoutListener | undefined>(
    'SMUI:addLayoutListener'
  );
  let removeLayoutListener: RemoveLayoutListener | undefined;

  let previousMin = min;
  $: if (min !== previousMin) {
    if (instance) {
      instance.setMin(min);
    }
    previousMin = min;
  }

  let previousMax = max;
  $: if (max !== previousMax) {
    if (instance) {
      instance.setMax(max);
    }
    previousMax = max;
  }

  let previousStep = step;
  $: if (step !== previousStep) {
    if (instance) {
      instance.setStep(step);
    }
    previousStep = step;
  }

  let previousDiscrete = discrete;
  $: if (discrete !== previousDiscrete) {
    if (instance) {
      instance.setIsDiscrete(discrete);
    }
    previousDiscrete = discrete;
  }

  let previousTickMarks = tickMarks;
  $: if (tickMarks !== previousTickMarks) {
    if (instance) {
      instance.setHasTickMarks(tickMarks);
    }
    previousTickMarks = tickMarks;
  }

  if (tickMarks && step > 0) {
    const absMax = max + Math.abs(min);
    if (range && typeof start === 'number' && typeof end === 'number') {
      const absStart = start + Math.abs(min);
      const absEnd = end + Math.abs(min);
      currentTickMarks = [
        ...Array(absStart / step).map(() => TickMark.INACTIVE),
        ...Array(
          absMax / step - absStart / step - (absMax - absEnd) / step + 1
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
  $: if (instance) {
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
          input.focus();
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
        dispatch(
          getElement(),
          'SMUISlider:change',
          { value, thumb },
          undefined,
          true
        );
      },
      emitInputEvent: (value, thumb) => {
        dispatch(
          getElement(),
          'SMUISlider:input',
          { value, thumb },
          undefined,
          true
        );
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
      registerEventHandler: (evtType, handler) => {
        getElement().addEventListener(evtType, handler);
      },
      deregisterEventHandler: (evtType, handler) => {
        getElement().removeEventListener(evtType, handler);
      },
      registerThumbEventHandler: (thumb, evtType, handler) => {
        (range && thumb === Thumb.START
          ? thumbStart
          : thumbEl
        )?.addEventListener(evtType, handler);
      },
      deregisterThumbEventHandler: (thumb, evtType, handler) => {
        (range && thumb === Thumb.START
          ? thumbStart
          : thumbEl
        )?.removeEventListener(evtType, handler);
      },
      registerInputEventHandler: (thumb, evtType, handler) => {
        (range && thumb === Thumb.START ? inputStart : input)?.addEventListener(
          evtType,
          handler
        );
      },
      deregisterInputEventHandler: (thumb, evtType, handler) => {
        (range && thumb === Thumb.START
          ? inputStart
          : input
        )?.removeEventListener(evtType, handler);
      },
      registerBodyEventHandler: (evtType, handler) => {
        document.body.addEventListener(evtType, handler);
      },
      deregisterBodyEventHandler: (evtType, handler) => {
        document.body.removeEventListener(evtType, handler);
      },
      registerWindowEventHandler: (evtType, handler) => {
        window.addEventListener(evtType, handler);
      },
      deregisterWindowEventHandler: (evtType, handler) => {
        window.removeEventListener(evtType, handler);
      },
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

    dispatch(element, 'SMUIGenericInput:mount', accessor);

    instance.init();
    instance.layout({ skipUpdateUI: true });

    return () => {
      dispatch(element, 'SMUIGenericInput:unmount', accessor);

      instance.destroy();
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
          thumbStartStyles = thumbStartStyles;
        } else {
          thumbStartStyles[name] = value;
        }
      }
    } else {
      if (thumbStyles[name] != value) {
        if (value === '' || value == null) {
          delete thumbStyles[name];
          thumbStyles = thumbStyles;
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
        thumbStartStyles = thumbStartStyles;
      }
    } else {
      if (name in thumbStyles) {
        delete thumbStyles[name];
        thumbStyles = thumbStyles;
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
        ? inputStartAttrs[name] ?? null
        : inputStart?.getAttribute(name) ?? null;
    } else {
      if (name === 'value') {
        return `${range ? end : value}`;
      }
      return name in inputAttrs
        ? inputAttrs[name] ?? null
        : input.getAttribute(name);
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
        trackActiveStyles = trackActiveStyles;
      } else {
        trackActiveStyles[name] = value;
      }
    }
  }

  function removeTrackActiveStyle(name: string) {
    if (name in trackActiveStyles) {
      delete trackActiveStyles[name];
      trackActiveStyles = trackActiveStyles;
    }
  }

  export function layout() {
    return instance.layout();
  }

  export function getId() {
    return inputProps && inputProps.id;
  }

  export function getElement() {
    return element;
  }
</script>
