<button
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
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
  on:click={() => instance && instance.handleClick()}
  {...inputProps}
  {...exclude($$restProps, ['icons$'])}
>
  <div class="mdc-switch__track" />
  <div class="mdc-switch__handle-track">
    <div class="mdc-switch__handle">
      <div class="mdc-switch__shadow">
        <div class="mdc-elevation-overlay" />
      </div>
      <div class="mdc-switch__ripple" bind:this={rippleElement} />
      {#if icons}
        <div
          use:useActions={icons$use}
          class={classMap({
            [icons$class]: true,
            'mdc-switch__icons': true,
          })}
          {...prefixFilter($$restProps, 'icons$')}
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
      <div class="mdc-switch__focus-ring" />
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
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type {
    SmuiAttrs,
    SmuiElementPropMap,
    SMUISwitchInputAccessor,
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
    disabled?: boolean;
    focusRing?: boolean;
    color?: 'primary' | 'secondary';
    group?: any[];
    checked?: boolean;
    value?: any;
    /** This currently does nothing. */
    processing?: boolean;
    icons?: boolean;
    icons$use?: ActionArray;
    icons$class?: string;
  };
  type $$Props = OwnProps &
    SmuiAttrs<'button', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['div'] as `icons\$${k}`]?: SmuiElementPropMap['div'][k];
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
  export let disabled = false;
  export let focusRing = false;
  export let color: 'primary' | 'secondary' = 'primary';
  export let group: UninitializedValue | any[] = uninitializedValue;
  export let checked: UninitializedValue | boolean = uninitializedValue;
  export let value: any = null;
  /** This currently does nothing. */
  export let processing = false;
  export let icons = true;
  export let icons$use: ActionArray = [];
  export let icons$class = '';

  let element: HTMLButtonElement;
  let instance: MDCSwitchRenderFoundation;
  let internalClasses: { [k: string]: boolean } = {};
  let rippleElement: HTMLDivElement;
  let rippleActive = false;
  let inputProps =
    getContext<{ id?: string } | undefined>('SMUI:generic:input:props') ?? {};
  let selected = isUninitializedValue(group)
    ? isUninitializedValue(checked)
      ? false
      : checked
    : group.indexOf(value) !== -1;
  let state = {
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
  $: {
    // This is a substitute for an on:change listener that is
    // smarter about when it calls the instance's handler. I do
    // this so that a group of changes will only trigger one
    // handler call, since the handler will reset currently
    // running animations.

    let notifyChange = false;

    // First check for group state.
    if (!isUninitializedValue(group)) {
      if (previousSelected !== selected) {
        // The change needs to flow up.
        const idx = group.indexOf(value);
        if (selected && idx === -1) {
          group.push(value);
          group = group;
        } else if (!selected && idx !== -1) {
          group.splice(idx, 1);
          group = group;
        }
        notifyChange = true;
      } else {
        // Potential changes need to flow down.
        const idxPrev = previousGroup.indexOf(value);
        const idx = group.indexOf(value);

        if (idxPrev > -1 && idx === -1) {
          // The checkbox was removed from the group.
          state.selected = false;
        } else if (idx > -1 && idxPrev === -1) {
          // The checkbox was added to the group.
          state.selected = true;
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
        state.selected = checked;
      }
    }

    previousChecked = checked;
    previousGroup = isUninitializedValue(group) ? [] : [...group];
    previousSelected = selected;
    if (notifyChange && element) {
      dispatch(element, 'SMUISwitch:change', { selected, value });
    }
  }

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
      state,
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
          state.selected = checked;
          if (element) {
            dispatch(element, 'SMUISwitch:change', {
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

    dispatch(element, 'SMUIGenericInput:mount', accessor);

    instance.init();
    instance.initFromDOM();

    return () => {
      dispatch(element, 'SMUIGenericInput:unmount', accessor);

      instance.destroy();
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
