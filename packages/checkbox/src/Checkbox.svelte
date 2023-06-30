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
    value={isUninitializedValue(valueKey) ? value : valueKey}
    bind:checked={nativeChecked}
    data-indeterminate={!isUninitializedValue(indeterminate) && indeterminate
      ? 'true'
      : undefined}
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

<script lang="ts">
  import { MDCCheckboxFoundation } from '@material/checkbox';
  import { onMount, getContext } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type {
    SmuiAttrs,
    SmuiElementPropMap,
    SMUICheckboxInputAccessor,
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
    style?: string;
    disabled?: boolean;
    touch?: boolean;
    indeterminate?: boolean;
    group?: any[];
    checked?: boolean | null;
    value?: any;
    valueKey?: string;
    input$use?: ActionArray;
    input$class?: string;
  };
  type $$Props = OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['input'] as `input\$${k}`]?: SmuiElementPropMap['input'][k];
    } & {
      input$type?: never;
      input$disabled?: never;
      input$value?: never;
      input$checked?: never;
      input$group?: never;
    };

  const forwardEvents = forwardEventsBuilder(get_current_component());
  interface UninitializedValue extends Function {}
  let uninitializedValue: UninitializedValue = () => {};
  function isUninitializedValue(value: any): value is UninitializedValue {
    return value === uninitializedValue;
  }

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let disabled = false;
  export let touch = false;
  export let indeterminate: UninitializedValue | boolean = uninitializedValue;
  export let group: UninitializedValue | any[] = uninitializedValue;
  export let checked: UninitializedValue | boolean | null = uninitializedValue;
  export let value: any = null;
  export let valueKey: UninitializedValue | string = uninitializedValue;
  export let input$use: ActionArray = [];
  export let input$class = '';

  let element: HTMLDivElement;
  let instance: MDCCheckboxFoundation;
  let checkbox: HTMLInputElement;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};
  let nativeControlAttrs: { [k: string]: string | undefined } = {};
  let rippleActive = false;
  let inputProps =
    getContext<{ id?: string } | undefined>('SMUI:generic:input:props') ?? {};
  let nativeChecked: boolean | undefined = isUninitializedValue(group)
    ? isUninitializedValue(checked)
      ? false
      : checked ?? undefined
    : group.indexOf(value) !== -1;
  let context = getContext<string | undefined>('SMUI:checkbox:context');
  let dataTableHeader = getContext<boolean | undefined>(
    'SMUI:data-table:row:header'
  );

  let previousChecked = checked;
  let previousGroup = isUninitializedValue(group) ? [] : [...group];
  let previousNativeChecked = nativeChecked;
  $: {
    // This is a substitute for an on:change listener that is
    // smarter about when it calls the instance's handler. I do
    // this so that a group of changes will only trigger one
    // handler call, since the handler will reset currently
    // running animations.
    let callHandleChange = false;

    // First check for group state.
    if (!isUninitializedValue(group)) {
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
    if (isUninitializedValue(checked)) {
      if (!!previousNativeChecked !== !!nativeChecked) {
        // The checkbox was clicked by the user.
        callHandleChange = true;
      }
    } else if (checked !== (nativeChecked ?? null)) {
      if (checked === previousChecked) {
        // The checkbox was clicked by the user
        // and the change needs to flow up.
        checked = nativeChecked ?? null;
        if (!isUninitializedValue(indeterminate)) {
          indeterminate = false;
        }
      } else {
        // The checkbox was changed programmatically
        // and the change needs to flow down.
        nativeChecked = checked ?? undefined;
      }
      callHandleChange = true;
    }

    if (checkbox) {
      // Sync indeterminate state with the native input.
      if (isUninitializedValue(indeterminate)) {
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
    previousGroup = isUninitializedValue(group) ? [] : [...group];
    previousNativeChecked = nativeChecked;
    if (callHandleChange && instance) {
      instance.handleChange();
    }
  }

  onMount(() => {
    checkbox.indeterminate =
      !isUninitializedValue(indeterminate) && indeterminate;

    instance = new MDCCheckboxFoundation({
      addClass,
      forceLayout: () => element.offsetWidth,
      hasNativeControl: () => true,
      isAttachedToDOM: () => Boolean(element.parentNode),
      isChecked: () => nativeChecked ?? false,
      isIndeterminate: () =>
        isUninitializedValue(indeterminate) ? false : indeterminate,
      removeClass,
      removeNativeControlAttr,
      setNativeControlAttr: addNativeControlAttr,
      setNativeControlDisabled: (value) => (disabled = value),
    });

    const accessor: SMUICheckboxInputAccessor = {
      _smui_checkbox_accessor: true,
      get element() {
        return getElement();
      },
      get checked() {
        return nativeChecked ?? false;
      },
      set checked(value) {
        if (nativeChecked !== value) {
          nativeChecked = value;
        }
      },
      get indeterminate() {
        return isUninitializedValue(indeterminate) ? false : indeterminate;
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

    dispatch(element, 'SMUIGenericInput:mount', accessor);
    dispatch(element, 'SMUICheckbox:mount', accessor);

    instance.init();

    return () => {
      dispatch(element, 'SMUIGenericInput:unmount', accessor);
      dispatch(element, 'SMUICheckbox:unmount', accessor);

      instance.destroy();
    };
  });

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

  function addStyle(name: string, value: string) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }

  function addNativeControlAttr(name: string, value: string) {
    if (nativeControlAttrs[name] !== value) {
      nativeControlAttrs[name] = value;
    }
  }

  function removeNativeControlAttr(name: string) {
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
