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
    value={isUninitializedValue(valueKey) ? value : valueKey}
    bind:group
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

<script lang="ts">
  import { MDCRadioFoundation } from '@material/radio';
  import { onMount, getContext } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type {
    SmuiAttrs,
    SmuiElementPropMap,
    SMUIRadioInputAccessor,
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
    group?: any | undefined;
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
  export let group: any | undefined = undefined;
  export let value: any = null;
  export let valueKey: UninitializedValue | string = uninitializedValue;
  export let input$use: ActionArray = [];
  export let input$class = '';

  let element: HTMLDivElement;
  let instance: MDCRadioFoundation;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};
  let rippleActive = false;
  let inputProps =
    getContext<{ id?: string } | undefined>('SMUI:generic:input:props') ?? {};

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

    dispatch(element, 'SMUIGenericInput:mount', accessor);

    instance.init();

    return () => {
      dispatch(element, 'SMUIGenericInput:unmount', accessor);

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

  export function getId() {
    return inputProps && inputProps.id;
  }

  export function getElement() {
    return element;
  }
</script>
