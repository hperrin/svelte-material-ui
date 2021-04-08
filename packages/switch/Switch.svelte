<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-switch': true,
    'mdc-switch--disabled': disabled,
    'mdc-switch--checked': nativeChecked,
    'smui-switch--color-primary': color === 'primary',
    ...internalClasses,
  })}
  {...exclude($$props, [
    'use',
    'class',
    'disabled',
    'color',
    'group',
    'checked',
    'value',
    'input$',
  ])}
>
  <div class="mdc-switch__track" />
  <div
    class={classMap({
      'mdc-switch__thumb-underlay': true,
      ...thumbUnderlayClasses,
    })}
    use:Ripple={{
      unbounded: true,
      color,
      addClass: addThumbUnderlayClass,
      removeClass: removeThumbUnderlayClass,
      active: rippleActive,
    }}
  >
    <div class="mdc-switch__thumb" />
    <input
      use:useActions={input$use}
      class={classMap({
        [input$class]: true,
        'mdc-switch__native-control': true,
      })}
      type="checkbox"
      role="switch"
      {...inputProps}
      {disabled}
      bind:checked={nativeChecked}
      aria-checked={nativeChecked ? 'true' : 'false'}
      value={valueKey === uninitializedValue ? value : valueKey}
      on:change={handleChange}
      on:change={(event) => instance && instance.handleChange(event)}
      on:change
      on:input
      on:blur
      on:focus
      {...nativeControlAttrs}
      {...exclude(prefixFilter($$props, 'input$'), ['use', 'class'])}
    />
  </div>
</div>

<script>
  import { MDCSwitchFoundation } from '@material/switch';
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
  import Ripple from '@smui/ripple/bare.js';

  const forwardEvents = forwardEventsBuilder(get_current_component(), [
    'SMUI:generic:input:mount',
  ]);
  let uninitializedValue = () => {};

  export let use = [];
  let className = '';
  export { className as class };
  export let disabled = false;
  export let color = 'secondary';
  export let group = uninitializedValue;
  export let checked = uninitializedValue;
  export let value = null;
  export let valueKey = uninitializedValue;
  export let input$use = [];
  export let input$class = '';

  let element;
  let instance;
  let internalClasses = {};
  let thumbUnderlayClasses = {};
  let nativeControlAttrs = {};
  let rippleActive = false;
  let inputProps = getContext('SMUI:generic:input:props') || {};
  let setChecked = getContext('SMUI:generic:input:setChecked');
  let nativeChecked =
    group === uninitializedValue
      ? checked === uninitializedValue
        ? false
        : checked
      : group.indexOf(value) !== -1;

  $: if (setChecked) {
    setChecked(nativeChecked);
  }

  let previousChecked = checked;
  $: if (checked !== uninitializedValue) {
    if (checked === previousChecked) {
      checked = nativeChecked;
    } else if (nativeChecked !== checked) {
      nativeChecked = checked;
      instance && instance.handleChange();
    }
    previousChecked = checked;
  }

  onMount(() => {
    instance = new MDCSwitchFoundation({
      addClass,
      removeClass,
      setNativeControlChecked: (checked) => (nativeChecked = checked),
      setNativeControlDisabled: (disabledValue) => (disabled = disabledValue),
      setNativeControlAttr: addNativeControlAttr,
    });

    dispatch(element, 'SMUI:generic:input:mount', {
      get element() {
        return getElement();
      },
      get checked() {
        return nativeChecked;
      },
      set checked(checked) {
        if (nativeChecked !== checked) {
          nativeChecked = checked;
          handleChange();
          instance && instance.handleChange();
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
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  function addThumbUnderlayClass(className) {
    if (!thumbUnderlayClasses[className]) {
      thumbUnderlayClasses[className] = true;
    }
  }

  function removeThumbUnderlayClass(className) {
    if (
      !(className in thumbUnderlayClasses) ||
      thumbUnderlayClasses[className]
    ) {
      thumbUnderlayClasses[className] = false;
    }
  }

  function addNativeControlAttr(name, value) {
    if (nativeControlAttrs[name] !== value) {
      nativeControlAttrs[name] = value;
    }
  }

  function handleChange() {
    if (group !== uninitializedValue) {
      const idx = group.indexOf(value);
      if (nativeChecked && idx === -1) {
        group.push(value);
        group = group;
      } else if (!nativeChecked && idx !== -1) {
        group.splice(idx, 1);
        group = group;
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
