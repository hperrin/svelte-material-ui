<svelte:options runes />

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
  class={classMap({
    'mdc-radio': true,
    'mdc-radio--disabled': disabled,
    'mdc-radio--touch': touch,
    ...internalClasses,
    [className]: true,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  {...exclude(restProps, ['input$'])}
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
    value={isUninitializedValue(valueKey) ? value : valueKey}
    bind:group
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
  <div class="mdc-radio__background">
    <div class="mdc-radio__outer-circle"></div>
    <div class="mdc-radio__inner-circle"></div>
  </div>
  <div class="mdc-radio__ripple"></div>
</div>

<script lang="ts">
  import { onMount, getContext } from 'svelte';
  import type {
    SmuiAttrs,
    SmuiElementPropMap,
    SMUIRadioInputAccessor,
  } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal';
  import Ripple from '@smui/ripple';

  import { MDCRadioFoundation } from './mdc';

  interface UninitializedValue extends Function {}
  let uninitializedValue: UninitializedValue = () => {};
  function isUninitializedValue(value: any): value is UninitializedValue {
    return value === uninitializedValue;
  }

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
     * A list of CSS styles.
     */
    style?: string;
    /**
     * Whether the input is disabled.
     */
    disabled?: boolean;
    /**
     * Whether to use touch styling
     */
    touch?: boolean;
    /**
     * The value of the currently selected item.
     */
    group?: any;
    /**
     * The value of the item this radio button represents.
     */
    value?: any;
    /**
     * A string representation of the value.
     *
     * Use this if it can't be converted to a unique string in its group.
     */
    valueKey?: string;
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    input$use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    input$class?: string;
  };
  let {
    use = [],
    class: className = '',
    style = '',
    disabled = $bindable(false),
    touch = false,
    group = $bindable(),
    value = null,
    valueKey = uninitializedValue as unknown as string,
    input$use = [],
    input$class = '',
    ...restProps
  }: OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['input'] as `input\$${k}`]?: SmuiElementPropMap['input'][k];
    } & {
      input$type?: never;
      input$disabled?: never;
      input$value?: never;
      input$checked?: never;
      input$group?: never;
    } = $props();

  let element: HTMLDivElement;
  let instance: MDCRadioFoundation | undefined = $state();
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalStyles: { [k: string]: string } = $state({});
  let rippleActive = $state(false);
  let inputProps = $state(
    getContext<{ id?: string } | undefined>('SMUI:generic:input:props') ?? {},
  );

  const SMUIGenericInputMount = getContext<
    ((accessor: SMUIRadioInputAccessor) => void) | undefined
  >('SMUI:generic:input:mount');
  const SMUIGenericInputUnmount = getContext<
    ((accessor: SMUIRadioInputAccessor) => void) | undefined
  >('SMUI:generic:input:unmount');

  onMount(() => {
    instance = new MDCRadioFoundation({
      addClass,
      removeClass,
      setNativeControlDisabled: (value) => (disabled = value),
    });

    const accessor: SMUIRadioInputAccessor = {
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

    SMUIGenericInputMount && SMUIGenericInputMount(accessor);

    instance.init();

    return () => {
      SMUIGenericInputUnmount && SMUIGenericInputUnmount(accessor);

      instance?.destroy();
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
