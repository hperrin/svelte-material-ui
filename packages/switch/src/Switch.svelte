<svelte:options runes={true} />

<button
  bind:this={element}
  use:useActions={use}
  use:Ripple={{
    unbounded: true,
    color,
    active: rippleActive,
    rippleElement,
    disabled,
    addClass,
    removeClass,
    // Don't need addStyle, since we don't set style prop.
  }}
  class={classMap({
    [className]: true,
    'mdc-switch': true,
    'mdc-switch--unselected': !selected,
    'mdc-switch--selected': selected,
    'mdc-switch--processing': processing,
    'smui-switch--color-secondary': color === 'secondary',
    ...internalClasses,
  })}
  type="button"
  role="switch"
  aria-checked={selected ? 'true' : 'false'}
  {disabled}
  {...inputProps}
  {...exclude(restProps, ['icons$'])}
  onclick={(e) => {
    if (instance) {
      instance.handleClick();
    }
    restProps.onclick?.(e);
  }}
>
  <div class="mdc-switch__track"></div>
  <div class="mdc-switch__handle-track">
    <div class="mdc-switch__handle">
      <div class="mdc-switch__shadow">
        <div class="mdc-elevation-overlay"></div>
      </div>
      <div class="mdc-switch__ripple" bind:this={rippleElement}></div>
      {#if icons}
        <div
          use:useActions={icons$use}
          class={classMap({
            [icons$class]: true,
            'mdc-switch__icons': true,
          })}
          {...prefixFilter(restProps, 'icons$')}
        >
          <svg
            class="mdc-switch__icon mdc-switch__icon--on"
            viewBox="0 0 24 24"
          >
            <path
              d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"
            />
          </svg>
          <svg
            class="mdc-switch__icon mdc-switch__icon--off"
            viewBox="0 0 24 24"
          >
            <path d="M20 13H4v-2h16v2z" />
          </svg>
        </div>
      {/if}
    </div>
  </div>
  {#if focusRing}
    <div class="mdc-switch__focus-ring-wrapper">
      <div class="mdc-switch__focus-ring"></div>
    </div>
  {/if}
</button>

<script lang="ts">
  import type {
    MDCSwitchRenderAdapter,
    MDCSwitchState,
  } from '@material/switch';
  import { MDCSwitchRenderFoundation } from '@material/switch';
  import { onMount, getContext } from 'svelte';
  import type {
    SmuiAttrs,
    SmuiElementPropMap,
    SMUISwitchInputAccessor,
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
     * Whether the input is disabled.
     */
    disabled?: boolean;
    /**
     * Whether to show a focus fing.
     */
    focusRing?: boolean;
    /**
     * The color of the switch.
     */
    color?: 'primary' | 'secondary';
    /**
     * An array of items to pick from.
     *
     * If the switch is in a group, the values for the checked items will be
     * added to the array passed in the `value` prop.
     */
    group?: any[];
    /**
     * Whether the switch is checked.
     */
    checked?: boolean;
    /**
     * An array of currently selected values.
     *
     * This is the array that is added to/taken from when the switch is in a
     * group.
     */
    value?: any;
    /**
     * This currently does nothing.
     */
    processing?: boolean;
    /**
     * Whether to show icons.
     */
    icons?: boolean;
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    icons$use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    icons$class?: string;
  };
  let {
    use = $bindable([]),
    class: className = $bindable(''),
    disabled = $bindable(false),
    focusRing = $bindable(false),
    color = $bindable('primary'),
    group = $bindable(uninitializedValue as unknown as any[]),
    checked = $bindable(uninitializedValue as unknown as boolean),
    value = $bindable(null),
    processing = $bindable(false),
    icons = $bindable(true),
    icons$use = $bindable([]),
    icons$class = $bindable(''),
    ...restProps
  }: OwnProps &
    SmuiAttrs<'button', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['div'] as `icons\$${k}`]?: SmuiElementPropMap['div'][k];
    } = $props();

  let element: HTMLButtonElement;
  let instance: MDCSwitchRenderFoundation | undefined = $state();
  let internalClasses: { [k: string]: boolean } = $state({});
  let rippleElement: HTMLDivElement | undefined = $state();
  let rippleActive = $state(false);
  let inputProps = $state(
    getContext<{ id?: string } | undefined>('SMUI:generic:input:props') ?? {},
  );
  let selected = $state(
    isUninitializedValue(group)
      ? isUninitializedValue(checked)
        ? false
        : checked
      : group.findIndex((val) => val === value) !== -1,
  );
  let switchState = {
    get disabled() {
      return disabled;
    },
    set disabled(value: boolean) {
      disabled = value;
    },
    get processing() {
      return processing;
    },
    set processing(value: boolean) {
      processing = value;
    },
    get selected() {
      return selected;
    },
    set selected(value: boolean) {
      selected = value;
    },
  } as MDCSwitchState;

  let previousChecked = checked;
  let previousGroup = isUninitializedValue(group) ? [] : [...group];
  let previousSelected = selected;
  $effect(() => {
    // This is a substitute for an onchange listener that is
    // smarter about when it calls the instance's handler. I do
    // this so that a group of changes will only trigger one
    // handler call, since the handler will reset currently
    // running animations.

    let notifyChange = false;

    // First check for group state.
    if (!isUninitializedValue(group)) {
      if (previousSelected !== selected) {
        // The change needs to flow up.
        const idx = group.findIndex((val) => val === value);
        if (selected && idx === -1) {
          group.push(value);
        } else if (!selected && idx !== -1) {
          group.splice(idx, 1);
        }
        notifyChange = true;
      } else {
        // Potential changes need to flow down.
        const idxPrev = previousGroup.findIndex((val) => val === value);
        const idx = group.findIndex((val) => val === value);

        if (idxPrev > -1 && idx === -1) {
          // The checkbox was removed from the group.
          switchState.selected = false;
        } else if (idx > -1 && idxPrev === -1) {
          // The checkbox was added to the group.
          switchState.selected = true;
        }
      }
    }

    // Now check individual state.
    if (isUninitializedValue(checked)) {
      if (previousSelected !== selected) {
        // The checkbox was clicked by the user.
        notifyChange = true;
      }
    } else if (checked !== selected) {
      if (checked === previousChecked) {
        // The checkbox was clicked by the user
        // and the change needs to flow up.
        checked = selected;
        notifyChange = true;
      } else {
        // The checkbox was changed programmatically
        // and the change needs to flow down.
        switchState.selected = checked;
      }
    }

    previousChecked = checked;
    previousGroup = isUninitializedValue(group) ? [] : [...group];
    previousSelected = selected;
    if (notifyChange && getElement()) {
      dispatch(getElement(), 'SMUISwitchChange', { selected, value });
    }
  });

  const SMUIGenericInputMount = getContext<
    ((accessor: SMUISwitchInputAccessor) => void) | undefined
  >('SMUI:generic:input:mount');
  const SMUIGenericInputUnmount = getContext<
    ((accessor: SMUISwitchInputAccessor) => void) | undefined
  >('SMUI:generic:input:unmount');

  onMount(() => {
    instance = new MDCSwitchRenderFoundation({
      addClass,
      hasClass,
      isDisabled: () => disabled,
      removeClass,
      setAriaChecked: () => {
        // Handled automatically.
      },
      setDisabled: (value: boolean) => {
        disabled = value;
      },
      state: switchState,
    } as MDCSwitchRenderAdapter);

    const accessor: SMUISwitchInputAccessor = {
      get element() {
        return getElement();
      },
      get checked() {
        return selected;
      },
      set checked(checked) {
        if (selected !== checked) {
          switchState.selected = checked;
          if (getElement()) {
            dispatch(getElement(), 'SMUISwitchChange', {
              selected: checked,
              value,
            });
          }
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
    instance.initFromDOM();

    return () => {
      SMUIGenericInputUnmount && SMUIGenericInputUnmount(accessor);

      instance?.destroy();
    };
  });

  function hasClass(className: string) {
    return className in internalClasses
      ? internalClasses[className]
      : getElement().classList.contains(className);
  }

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

  export function getId() {
    return inputProps && inputProps.id;
  }

  export function getElement() {
    return element;
  }
</script>
