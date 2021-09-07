<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  use:Ripple={{
    unbounded: true,
    addClass,
    removeClass,
    addStyle,
    active: rippleActive,
    eventTarget: checkbox,
  }}
  class={classMap({
    [className]: true,
    'mdc-checkbox': true,
    'mdc-checkbox--disabled': disabled,
    'mdc-checkbox--touch': touch,
    'mdc-data-table__header-row-checkbox':
      context === 'data-table' && dataTableHeader,
    'mdc-data-table__row-checkbox':
      context === 'data-table' && !dataTableHeader,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  on:animationend={() => instance && instance.handleAnimationEnd()}
  {...exclude($$restProps, ['input$'])}
>
  <input
    bind:this={checkbox}
    use:useActions={input$use}
    class={classMap({
      [input$class]: true,
      'mdc-checkbox__native-control': true,
    })}
    type="checkbox"
    {...inputProps}
    {disabled}
    value={valueKey === uninitializedValue ? value : valueKey}
    bind:checked={nativeChecked}
    data-indeterminate={indeterminate !== uninitializedValue && indeterminate
      ? 'true'
      : null}
    on:blur
    on:focus
    {...nativeControlAttrs}
    {...prefixFilter($$restProps, 'input$')}
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
  let internalStyles = {};
  let nativeControlAttrs = {};
  let rippleActive = false;
  let inputProps = getContext('SMUI:generic:input:props') || {};
  let nativeChecked =
    group === uninitializedValue
      ? checked === uninitializedValue
        ? false
        : checked
      : group.indexOf(value) !== -1;
  let context = getContext('SMUI:checkbox:context');
  let dataTableHeader = getContext('SMUI:data-table:row:header');

  let previousChecked = checked;
  let previousGroup = group === uninitializedValue ? [] : [...group];
  let previousNativeChecked = nativeChecked;
  $: {
    // This is a substitute for an on:change listener that is
    // smarter about when it calls the instance's handler. I do
    // this so that a group of changes will only trigger one
    // handler call, since the handler will reset currently
    // running animations.
    let callHandleChange = false;

    // First check for group state.
    if (group !== uninitializedValue) {
      if (previousNativeChecked !== nativeChecked) {
        // The change needs to flow up.
        const idx = group.indexOf(value);
        if (nativeChecked && idx === -1) {
          group.push(value);
          group = group;
        } else if (!nativeChecked && idx !== -1) {
          group.splice(idx, 1);
          group = group;
        }
        callHandleChange = true;
      } else {
        // Potential changes need to flow down.
        const idxPrev = previousGroup.indexOf(value);
        const idx = group.indexOf(value);

        if (idxPrev > -1 && idx === -1) {
          // The checkbox was removed from the group.
          nativeChecked = false;
          callHandleChange = true;
        } else if (idx > -1 && idxPrev === -1) {
          // The checkbox was added to the group.
          nativeChecked = true;
          callHandleChange = true;
        }
      }
    }

    // Now check individual state.
    if (checked === uninitializedValue) {
      if (previousNativeChecked !== nativeChecked) {
        // The checkbox was clicked by the user.
        callHandleChange = true;
      }
    } else if (checked !== nativeChecked) {
      if (checked === previousChecked) {
        // The checkbox was clicked by the user
        // and the change needs to flow up.
        checked = nativeChecked;
      } else {
        // The checkbox was changed programmatically
        // and the change needs to flow down.
        nativeChecked = checked;
      }
      callHandleChange = true;
    }

    if (checkbox) {
      // Sync indeterminate state with the native input.
      if (indeterminate === uninitializedValue) {
        if (checkbox.indeterminate) {
          // I don't think this can happen, but just in case.
          checkbox.indeterminate = false;
          callHandleChange = true;
        }
      } else {
        if (!indeterminate && checkbox.indeterminate) {
          checkbox.indeterminate = false;
          callHandleChange = true;
        } else if (indeterminate && !checkbox.indeterminate) {
          checkbox.indeterminate = true;
          callHandleChange = true;
        }
      }
    }

    previousChecked = checked;
    previousGroup = group === uninitializedValue ? [] : [...group];
    previousNativeChecked = nativeChecked;
    if (callHandleChange && instance) {
      instance.handleChange();
    }
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
      removeNativeControlAttr,
      setNativeControlAttr: addNativeControlAttr,
      setNativeControlDisabled: (value) => (disabled = value),
    });

    const accessor = {
      _smui_checkbox_accessor: true,
      get element() {
        return getElement();
      },
      get checked() {
        return nativeChecked;
      },
      set checked(value) {
        if (nativeChecked !== value) {
          nativeChecked = value;
        }
      },
      get indeterminate() {
        return indeterminate === uninitializedValue ? false : indeterminate;
      },
      set indeterminate(value) {
        indeterminate = value;
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
    dispatch(element, 'SMUI:checkbox:mount', accessor);

    instance.init();

    return () => {
      dispatch(element, 'SMUI:generic:input:unmount', accessor);
      dispatch(element, 'SMUI:checkbox:unmount', accessor);

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

  function addNativeControlAttr(name, value) {
    if (nativeControlAttrs[name] !== value) {
      nativeControlAttrs[name] = value;
    }
  }

  function removeNativeControlAttr(name) {
    if (!(name in nativeControlAttrs) || nativeControlAttrs[name] != null) {
      nativeControlAttrs[name] = undefined;
    }
  }

  export function getId() {
    return inputProps && inputProps.id;
  }

  export function getElement() {
    return element;
  }
</script>
