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
  {...exclude($$restProps, ['input$'])}
>
  <div class="mdc-switch__track" />
  <div
    use:Ripple={{
      unbounded: true,
      color,
      active: rippleActive,
      addClass: addThumbUnderlayClass,
      removeClass: removeThumbUnderlayClass,
      // Don't need addStyle, since we don't set style prop.
    }}
    class={classMap({
      'mdc-switch__thumb-underlay': true,
      ...thumbUnderlayClasses,
    })}
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
      on:change
      on:input
      on:blur
      on:focus
      {...nativeControlAttrs}
      {...prefixFilter($$restProps, 'input$')}
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
    'SMUI:generic:input:unmount',
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
  let nativeChecked =
    group === uninitializedValue
      ? checked === uninitializedValue
        ? false
        : checked
      : group.indexOf(value) !== -1;

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

    previousChecked = checked;
    previousGroup = group === uninitializedValue ? [] : [...group];
    previousNativeChecked = nativeChecked;
    if (callHandleChange && instance) {
      instance.handleChange({
        target: {
          checked: nativeChecked,
        },
      });
    }
  }

  onMount(() => {
    instance = new MDCSwitchFoundation({
      addClass,
      removeClass,
      setNativeControlChecked: (checked) => (nativeChecked = checked),
      setNativeControlDisabled: (disabledValue) => (disabled = disabledValue),
      setNativeControlAttr: addNativeControlAttr,
    });

    const accessor = {
      get element() {
        return getElement();
      },
      get checked() {
        return nativeChecked;
      },
      set checked(checked) {
        if (nativeChecked !== value) {
          nativeChecked = value;
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

  export function getId() {
    return inputProps && inputProps.id;
  }

  export function getElement() {
    return element;
  }
</script>
