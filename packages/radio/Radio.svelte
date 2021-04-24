<div
  bind:this={element}
  use:Ripple={{
    unbounded: true,
    active: rippleActive,
    addClass,
    removeClass,
    addStyle,
  }}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-radio': true,
    'mdc-radio--disabled': disabled,
    'mdc-radio--touch': touch,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  {...exclude($$restProps, ['input$'])}
>
  <input
    use:useActions={input$use}
    class={classMap({
      [input$class]: true,
      'mdc-radio__native-control': true,
    })}
    type="radio"
    {...inputProps}
    {disabled}
    value={valueKey === uninitializedValue ? value : valueKey}
    bind:group
    on:change
    on:input
    on:blur
    on:focus
    {...prefixFilter($$restProps, 'input$')}
  />
  <div class="mdc-radio__background">
    <div class="mdc-radio__outer-circle" />
    <div class="mdc-radio__inner-circle" />
  </div>
  <div class="mdc-radio__ripple" />
</div>

<script>
  import { MDCRadioFoundation } from '@material/radio';
  import { onMount, getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';
  import Ripple from '@smui/ripple';

  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {};

  export let use = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let disabled = false;
  export let touch = false;
  export let group = null;
  export let value = null;
  export let valueKey = uninitializedValue;
  export let input$use = [];
  export let input$class = '';

  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let rippleActive = false;
  let inputProps = getContext('SMUI:generic:input:props') || {};

  onMount(() => {
    instance = new MDCRadioFoundation({
      addClass,
      removeClass,
      setNativeControlDisabled: (value) => (disabled = value),
    });

    const accessor = {
      _smui_radio_accessor: true,
      get element() {
        return getElement();
      },
      get checked() {
        return group === value;
      },
      set checked(checked) {
        if (checked && group !== value) {
          group = value;
        } else if (!checked && group === value) {
          group = undefined;
        }
      },
      activateRipple() {
        if (!disabled) {
          rippleActive = true;
        }
      },
      deactivateRipple() {
        rippleActive = false;
      },
    };

    dispatch(element, 'SMUI:generic:input:mount', accessor);

    instance.init();

    return () => {
      dispatch(element, 'SMUI:generic:input:unmount', accessor);

      instance.destroy();
    };
  });

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

  export function getId() {
    return inputProps && inputProps.id;
  }

  export function getElement() {
    return element;
  }
</script>
