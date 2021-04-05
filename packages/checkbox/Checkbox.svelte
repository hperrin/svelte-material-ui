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
  class="mdc-checkbox {className} {Object.keys(internalClasses).join(
    ' '
  )} {disabled ? 'mdc-checkbox--disabled' : ''} {touch
    ? 'mdc-checkbox--touch'
    : ''} {context === 'data-table' && dataTableHeader
    ? 'mdc-data-table__header-row-checkbox'
    : ''} {context === 'data-table' && !dataTableHeader
    ? 'mdc-data-table__row-checkbox'
    : ''}"
  on:animationend={() => instance && instance.handleAnimationEnd()}
  {...exclude($$props, [
    'use',
    'class',
    'disabled',
    'touch',
    'indeterminate',
    'group',
    'checked',
    'value',
    'valueKey',
    'input$',
  ])}
>
  <input
    bind:this={checkbox}
    use:useActions={input$use}
    class="mdc-checkbox__native-control {input$class}"
    type="checkbox"
    {...inputProps}
    {disabled}
    value={valueKey === uninitializedValue ? value : valueKey}
    bind:checked={nativeChecked}
    data-indeterminate={indeterminate !== uninitializedValue && indeterminate
      ? 'true'
      : null}
    on:change={handleChange}
    on:change={() => instance && instance.handleChange()}
    on:input={handleChange}
    on:change
    on:input
    on:blur
    on:focus
    {...internalAttrs}
    {...exclude(prefixFilter($$props, 'input$'), ['use', 'class'])}
  />
  <div class="mdc-checkbox__background">
    <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
      <path
        class="mdc-checkbox__checkmark-path"
        fill="none"
        d="M1.73,12.91 8.1,19.28 22.79,4.59"
      />
    </svg>
    <div class="mdc-checkbox__mixedmark" />
  </div>
  <div class="mdc-checkbox__ripple" />
</div>

<script>
  import { MDCCheckboxFoundation } from '@material/checkbox';
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
  export let indeterminate = uninitializedValue;
  export let group = uninitializedValue;
  export let checked = uninitializedValue;
  export let value = null;
  export let valueKey = uninitializedValue;
  export let input$use = [];
  export let input$class = '';

  let element;
  let instance;
  let checkbox;
  let internalClasses = {};
  // These are added to the native control, not `element`.
  let internalAttrs = {};
  let rippleActive = false;
  let inputProps = getContext('SMUI:generic:input:props') || {};
  let setChecked = getContext('SMUI:generic:input:setChecked');
  let addChangeHandler = getContext('SMUI:generic:input:addChangeHandler');
  let nativeChecked =
    group === uninitializedValue
      ? checked === uninitializedValue
        ? false
        : checked
      : group.indexOf(value) !== -1;
  let context = getContext('SMUI:checkbox:context');
  let dataTableHeader = getContext('SMUI:data-table:row:header');
  let getDataTableRowIndex = getContext('SMUI:data-table:row:getIndex');

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

  $: if (checkbox) {
    if (
      indeterminate === uninitializedValue ||
      (!indeterminate && checkbox.indeterminate)
    ) {
      checkbox.indeterminate = false;
      instance && instance.handleChange();
    } else if (indeterminate && !checkbox.indeterminate) {
      checkbox.indeterminate = true;
      instance && instance.handleChange();
    }
  }

  if (addChangeHandler) {
    addChangeHandler(handleChange);
  }

  onMount(() => {
    instance = new MDCCheckboxFoundation({
      addClass,
      forceLayout: () => element.offsetWidth,
      hasNativeControl: () => true,
      isAttachedToDOM: () => Boolean(element.parentNode),
      isChecked: () => nativeChecked,
      isIndeterminate: () =>
        indeterminate === uninitializedValue ? false : indeterminate,
      removeClass,
      removeNativeControlAttr: removeAttr,
      setNativeControlAttr: addAttr,
      setNativeControlDisabled: (value) => (disabled = value),
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

  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function removeAttr(name) {
    if (name in internalAttrs) {
      internalAttrs[name] = undefined;
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
