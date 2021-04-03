<div
  bind:this={element}
  use:Ripple={{
    unbounded: true,
    addClass,
    removeClass,
    active: rippleActive,
  }}
  use:useActions={use}
  use:forwardEvents
  class="mdc-radio {className} {Object.keys(internalClasses).join(
    ' '
  )} {disabled ? 'mdc-radio--disabled' : ''} {touch ? 'mdc-radio--touch' : ''}"
  {...exclude($$props, [
    'use',
    'class',
    'disabled',
    'touch',
    'group',
    'value',
    'valueKey',
    'input$',
  ])}
>
  <input
    use:useActions={input$use}
    class="mdc-radio__native-control {input$class}"
    type="radio"
    {...inputProps}
    {disabled}
    value={valueKey === uninitializedValue ? value : valueKey}
    bind:group
    on:change
    on:input
    on:blur
    on:focus
    {...exclude(prefixFilter($$props, 'input$'), ['use', 'class'])}
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
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';
  import Ripple from '@smui/ripple/bare.js';

  const forwardEvents = forwardEventsBuilder(get_current_component(), [
    'SMUI:generic:input:mount',
  ]);
  let uninitializedValue = () => {};

  export let use = [];
  let className = '';
  export { className as class };
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
  let rippleActive = false;
  let inputProps = getContext('SMUI:generic:input:props') || {};
  let setChecked = getContext('SMUI:generic:input:setChecked');

  $: if (setChecked) {
    setChecked(group === value);
  }

  onMount(() => {
    instance = new MDCRadioFoundation({
      addClass,
      removeClass,
      setNativeControlDisabled: (value) => (disabled = value),
    });

    dispatch(element, 'SMUI:generic:input:mount', {
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
    });

    instance.init();

    return () => {
      instance.destroy();
    };
  });

  function addClass(className) {
    // Doesn't need hasClass.
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className) {
    // Doesn't need hasClass.
    if (internalClasses[className]) {
      delete internalClasses[className];
      internalClasses = internalClasses;
    }
  }

  export function getId() {
    return inputProps && inputProps.id;
  }

  export function getElement() {
    return element;
  }
</script>
