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
        addClass: (className) => addThumbClass(className),
        removeClass: (className) => removeThumbClass(className),
        addStyle: (name, value) => addThumbStyle(name, value),
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

<script>
  import { MDCSliderFoundation, Thumb, TickMark } from '@material/slider';
  import { onMount, onDestroy, getContext, tick } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal';
  import Ripple from '@smui/ripple';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let disabled = false;
  export let range = false;
  export let discrete = false;
  export let tickMarks = false;
  export let step = 1;
  export let min = 0;
  export let max = 100;
  export let value = null;
  export let start = null;
  export let end = null;
  export let valueToAriaValueTextFn = (value) => `${value}`;
  export let input$class = '';

  let element;
  let instance;
  let input;
  let inputStart;
  let thumbEl;
  let thumbStart;
  let thumbKnob;
  let thumbKnobStart;
  let internalClasses = {};
  let thumbStartClasses = {};
  let thumbClasses = {};
  let inputAttrs = {};
  let inputStartAttrs = {};
  let trackActiveStyles = {};
  let thumbStyles = {};
  let thumbStartStyles = {};
  let thumbRippleActive = false;
  let thumbStartRippleActive = false;
  let currentTickMarks;
  let inputProps = getContext('SMUI:generic:input:props') || {};
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;

  if (tickMarks && step > 0) {
    const absMax = max + Math.abs(min);
    if (range) {
      const absStart = start + Math.abs(min);
      const absEnd = end + Math.abs(min);
      currentTickMarks = [
        ...Array(absStart / step).map(() => TickMark.INACTIVE),
        ...Array(
          absMax / step - absStart / step - (absMax - absMax) / step + 1
        ).map(() => TickMark.ACTIVE),
        ...Array((absMax - absMax) / step).map(() => TickMark.INACTIVE),
      ];
    } else {
      const absValue = value + Math.abs(min);

      currentTickMarks = [
        ...Array(absValue / step + 1).map(() => TickMark.ACTIVE),
        ...Array((absMax - absValue) / step).map(() => TickMark.INACTIVE),
      ];
    }
  }

  if (range) {
    const percent = (end - start) / (max - min);
    const percentStart = start / (max - min);
    const percentEnd = end / (max - min);
    trackActiveStyles.transform = `scaleX(${percent})`;
    thumbStyles.left = `calc(${percentEnd * 100}% -24px)`;
    thumbStartStyles.left = `calc(${percentStart * 100}% -24px)`;
  } else {
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
    if (previousValue !== value) {
      instance.setValue(value);
    }
    if (previousStart !== start) {
      instance.setValueStart(start);
    }
    if (previousEnd !== end) {
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
        range ? (thumb === Thumb.START ? start : end) : value,
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
        if (range && thumb === Thumb.START) {
          inputStart.focus();
        } else {
          input.focus();
        }
      },
      isInputFocused: (thumb) =>
        (range && thumb === Thumb.START ? inputStart : input) ===
        document.activeElement,
      getThumbKnobWidth: (thumb) =>
        (range && thumb === Thumb.START
          ? thumbKnobStart
          : thumbKnob
        ).getBoundingClientRect().width,
      getThumbBoundingClientRect: (thumb) =>
        (range && thumb === Thumb.START
          ? thumbStart
          : thumbEl
        ).getBoundingClientRect(),
      getBoundingClientRect: () => getElement().getBoundingClientRect(),
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
        dispatch(getElement(), 'MDCSlider:change', { value, thumb });
      },
      emitInputEvent: (value, thumb) => {
        dispatch(getElement(), 'MDCSlider:input', { value, thumb });
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
        ).addEventListener(evtType, handler);
      },
      deregisterThumbEventHandler: (thumb, evtType, handler) => {
        (range && thumb === Thumb.START
          ? thumbStart
          : thumbEl
        ).removeEventListener(evtType, handler);
      },
      registerInputEventHandler: (thumb, evtType, handler) => {
        (range && thumb === Thumb.START ? inputStart : input).addEventListener(
          evtType,
          handler
        );
      },
      deregisterInputEventHandler: (thumb, evtType, handler) => {
        (range && thumb === Thumb.START
          ? inputStart
          : input
        ).removeEventListener(evtType, handler);
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

    dispatch(element, 'SMUI:generic:input:mount', accessor);

    instance.init();
    instance.layout(true);

    return () => {
      dispatch(element, 'SMUI:generic:input:unmount', accessor);

      instance.destroy();
    };
  });

  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
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
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  function addThumbClass(className, thumb) {
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

  function removeThumbClass(className, thumb) {
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

  function addThumbStyle(name, value, thumb) {
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

  function removeThumbStyle(name, thumb) {
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

  function getInputAttr(name, thumb) {
    // Some custom logic for "value", since Svelte doesn't seem to actually
    // set the attribute, just the DOM property.
    if (range && thumb === Thumb.START) {
      if (name === 'value') {
        return `${start}`;
      }
      return name in inputStartAttrs
        ? inputStartAttrs[name]
        : inputStart.getAttribute(name);
    } else {
      if (name === 'value') {
        return `${range ? end : value}`;
      }
      return name in inputAttrs ? inputAttrs[name] : input.getAttribute(name);
    }
  }

  function addInputAttr(name, value, thumb) {
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

  function removeInputAttr(name, thumb) {
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

  function addTrackActiveStyle(name, value) {
    if (trackActiveStyles[name] != value) {
      if (value === '' || value == null) {
        delete trackActiveStyles[name];
        trackActiveStyles = trackActiveStyles;
      } else {
        trackActiveStyles[name] = value;
      }
    }
  }

  function removeTrackActiveStyle(name) {
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
