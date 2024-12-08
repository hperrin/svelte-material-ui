<svelte:options runes />

<div
  bind:this={element}
  use:Ripple={{
    ripple: variant === 'filled',
    unbounded: false,
    addClass,
    removeClass,
    addStyle,
  }}
  use:Anchor={{ addClass, removeClass }}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-select': true,
    'mdc-select--required': required,
    'mdc-select--disabled': disabled,
    'mdc-select--filled': variant === 'filled',
    'mdc-select--outlined': variant === 'outlined',
    'smui-select--standard': variant === 'standard',
    'mdc-select--with-leading-icon': isUninitializedValue(withLeadingIcon)
      ? leadingIcon
      : withLeadingIcon,
    'mdc-select--no-label': noLabel || label == null,
    'mdc-select--invalid': invalid,
    'mdc-select--activated': menuOpen,
    'mdc-data-table__pagination-rows-per-page-select':
      context === 'data-table:pagination',
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  {...exclude(restProps, [
    'input$',
    'anchor$',
    'label$',
    'outline$',
    'selectedTextContainer$',
    'selectedText$',
    'dropdownIcon$',
    'ripple$',
    'menu$',
    'list$',
    'helperText$',
  ])}
>
  {#if hiddenInput}
    <input
      type="hidden"
      {required}
      {disabled}
      {value}
      {...prefixFilter(restProps, 'input$')}
    />
  {/if}
  <div
    bind:this={selectAnchor}
    use:useActions={anchor$use}
    class={classMap({
      [anchor$class]: true,
      'mdc-select__anchor': true,
    })}
    aria-required={required ? 'true' : undefined}
    aria-disabled={disabled ? 'true' : undefined}
    aria-controls={menuId}
    aria-expanded={menuOpen ? 'true' : 'false'}
    aria-describedby={helperId}
    role="combobox"
    tabindex="0"
    {...selectAnchorAttrs}
    {...prefixFilter(restProps, 'anchor$')}
    onclick={(e) => {
      selectAnchor.focus();
      if (instance) {
        instance.handleClick(getNormalizedXCoordinate(e));
      }
      restProps.anchor$onclick?.(e);
    }}
    onkeydown={(e) => {
      if (instance) {
        instance.handleKeydown(e);
      }
      restProps.onkeydown?.(e);
    }}
    onblur={(e) => {
      if (instance) {
        instance.handleBlur();
      }
      dispatch(getElement(), 'blur', e);
      restProps.anchor$onblur?.(e);
    }}
    onfocus={(e) => {
      if (instance) {
        instance.handleFocus();
      }
      dispatch(getElement(), 'focus', e);
      restProps.anchor$onfocus?.(e);
    }}
  >
    {#if variant === 'filled'}
      <span class="mdc-select__ripple"></span>
    {/if}
    {#if variant !== 'outlined' && !noLabel && label != null}
      <FloatingLabel
        bind:this={floatingLabel}
        id={inputId + '-smui-label'}
        floatAbove={$selectedTextStore !== ''}
        {required}
        {...prefixFilter(restProps, 'label$')}
        >{#if label == null}{:else if typeof label === 'string'}{label}{:else}{@render label()}{/if}</FloatingLabel
      >
    {/if}
    {#if variant === 'outlined'}
      <NotchedOutline
        bind:this={notchedOutline}
        noLabel={noLabel || label == null}
        {...prefixFilter(restProps, 'outline$')}
      >
        {#if !noLabel && label != null}
          <FloatingLabel
            bind:this={floatingLabel}
            id={inputId + '-smui-label'}
            floatAbove={$selectedTextStore !== ''}
            {required}
            {...prefixFilter(restProps, 'label$')}
            >{#if label == null}{:else if typeof label === 'string'}{label}{:else}{@render label()}{/if}</FloatingLabel
          >
        {/if}
      </NotchedOutline>
    {/if}
    {@render leadingIcon?.()}
    <span
      use:useActions={selectedTextContainer$use}
      class={classMap({
        [selectedTextContainer$class]: true,
        'mdc-select__selected-text-container': true,
      })}
      {...prefixFilter(restProps, 'selectedTextContainer$')}
    >
      <span
        use:useActions={selectedText$use}
        id={inputId + '-smui-selected-text'}
        class={classMap({
          [selectedText$class]: true,
          'mdc-select__selected-text': true,
        })}
        role="button"
        aria-haspopup="listbox"
        aria-labelledby={inputId + '-smui-label'}
        {...prefixFilter(restProps, 'selectedText$')}
      >
        {$selectedTextStore}
      </span>
    </span>
    <span
      use:useActions={dropdownIcon$use}
      class={classMap({
        [dropdownIcon$class]: true,
        'mdc-select__dropdown-icon': true,
      })}
      {...prefixFilter(restProps, 'dropdownIcon$')}
    >
      <svg
        class="mdc-select__dropdown-icon-graphic"
        viewBox="7 10 10 5"
        focusable="false"
      >
        <polygon
          class="mdc-select__dropdown-icon-inactive"
          stroke="none"
          fill-rule="evenodd"
          points="7 10 12 15 17 10"
        />
        <polygon
          class="mdc-select__dropdown-icon-active"
          stroke="none"
          fill-rule="evenodd"
          points="7 15 12 10 17 15"
        />
      </svg>
    </span>
    {#if variant !== 'outlined' && ripple}
      <LineRipple
        bind:this={lineRipple}
        {...prefixFilter(restProps, 'ripple$')}
      />
    {/if}
  </div>

  <Menu
    class={classMap({
      [menu$class]: true,
      'mdc-select__menu': true,
      ...menuClasses,
    })}
    id={menuId}
    fullWidth
    anchor={false}
    {anchorElement}
    {anchorCorner}
    bind:open={menuOpen}
    {...prefixFilter(restProps, 'menu$')}
    onSMUIMenuSelected={(e) => {
      if (instance) {
        instance.handleMenuItemAction(e.detail.index);
      }
      restProps.onSMUIMenuSelected?.(e);
    }}
    onSMUIMenuSurfaceClosing={(e) => {
      if (instance) {
        instance.handleMenuClosing();
      }
      restProps.onSMUIMenuSurfaceClosing?.(e);
    }}
    onSMUIMenuSurfaceClosed={(e) => {
      if (instance) {
        instance.handleMenuClosed();
      }
      restProps.onSMUIMenuSurfaceClosed?.(e);
    }}
    onSMUIMenuSurfaceOpened={(e) => {
      if (instance) {
        instance.handleMenuOpened();
      }
      restProps.onSMUIMenuSurfaceOpened?.(e);
    }}
  >
    <List
      role="listbox"
      {wrapFocus}
      bind:selectedIndex
      {...prefixFilter(restProps, 'list$')}>{@render children?.()}</List
    >
  </Menu>
</div>
{#if helperText}
  <HelperText {...prefixFilter(restProps, 'helperText$')}
    >{@render helperText?.()}</HelperText
  >
{/if}

<script module lang="ts">
  let counter = 0;
</script>

<script lang="ts">
  import type {
    MDCSelectIconFoundation,
    MDCSelectHelperTextFoundation,
  } from '@material/select';
  import { MDCSelectFoundation } from '@material/select';
  import type { ComponentProps, Snippet } from 'svelte';
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import type {
    AddLayoutListener,
    RemoveLayoutListener,
    SmuiAttrs,
    SmuiElementPropMap,
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
  import type { Corner } from '@smui/menu-surface';
  import { Anchor } from '@smui/menu-surface';
  import Menu from '@smui/menu';
  import type { SMUIListAccessor } from '@smui/list';
  import List from '@smui/list';
  import FloatingLabel from '@smui/floating-label';
  import LineRipple from '@smui/line-ripple';
  import NotchedOutline from '@smui/notched-outline';

  import HelperText from './helper-text/HelperText.svelte';

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
     * Whether to show a ripple animation.
     */
    ripple?: boolean;
    /**
     * Whether the input is disabled.
     */
    disabled?: boolean;
    /**
     * The styling variant of the input.
     */
    variant?: 'standard' | 'filled' | 'outlined';
    /**
     * Do not use a label.
     */
    noLabel?: boolean;
    /**
     * The label or a spot for the label.
     */
    label?: string | Snippet;
    /**
     * The value of the input.
     */
    value?: any;
    /**
     * A function that turns values into string representations.
     *
     * This is necessary if your values can't be automatically turned into
     * strings. So, for things like objects, functions, null, undefined, etc,
     * this function should take a value and return a unique string
     * representation.
     *
     * Whatever value semantically means "empty" or "none" can return an empty
     * string to unfloat the label.
     */
    key?: (item: any) => string;
    /**
     * Whether the input has been changed.
     */
    dirty?: boolean;
    /**
     * Whether the input is invalid.
     */
    invalid?: boolean;
    /**
     * Set to false to prevent updating the value passed to invalid.
     *
     * Defaults to true if and only if the invalid prop was not explicitly set.
     */
    updateInvalid?: boolean;
    /**
     * Whether the input is required.
     */
    required?: boolean;
    /**
     * The ID the input will use.
     */
    inputId?: string;
    /**
     * If true, a hidden HTML input element will be used.
     *
     * This is useful if the input is part of an HTML form.
     */
    hiddenInput?: boolean;
    /**
     * Whether a leading icon will be included after instantiation.
     */
    withLeadingIcon?: boolean;
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    anchor$use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    anchor$class?: string;
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    selectedTextContainer$use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    selectedTextContainer$class?: string;
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    selectedText$use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    selectedText$class?: string;
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    dropdownIcon$use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    dropdownIcon$class?: string;
    /**
     * A space separated list of CSS classes.
     */
    menu$class?: string;

    children?: Snippet;
    /**
     * A spot for the leading icon.
     */
    leadingIcon?: Snippet;
    /**
     * A spot for the helper text.
     */
    helperText?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    style = '',
    ripple = true,
    disabled = false,
    variant = 'standard',
    noLabel = false,
    label = undefined,
    value = $bindable(),
    key = (item) => item,
    dirty = $bindable(false),
    invalid = $bindable(uninitializedValue as unknown as boolean),
    updateInvalid = isUninitializedValue(invalid),
    required = false,
    inputId = 'SMUI-select-' + counter++,
    hiddenInput = false,
    withLeadingIcon = uninitializedValue as unknown as boolean,
    anchor$use = [],
    anchor$class = '',
    selectedTextContainer$use = [],
    selectedTextContainer$class = '',
    selectedText$use = [],
    selectedText$class = '',
    dropdownIcon$use = [],
    dropdownIcon$class = '',
    menu$class = '',
    children,
    leadingIcon,
    helperText,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof ComponentProps<
        typeof HelperText
      > as `helperText\$${k}`]?: ComponentProps<typeof HelperText>[k];
    } & {
      [k in keyof SmuiElementPropMap['input'] as `input\$${k}`]?: SmuiElementPropMap['input'][k];
    } & {
      [k in keyof SmuiElementPropMap['div'] as `anchor\$${k}`]?: SmuiElementPropMap['div'][k];
    } & {
      [k in keyof ComponentProps<
        typeof FloatingLabel
      > as `label\$${k}`]?: ComponentProps<typeof FloatingLabel>[k];
    } & {
      [k in keyof ComponentProps<
        typeof NotchedOutline
      > as `outline\$${k}`]?: ComponentProps<typeof NotchedOutline>[k];
    } & {
      [k in keyof SmuiElementPropMap['span'] as `selectedTextContainer\$${k}`]?: SmuiElementPropMap['span'][k];
    } & {
      [k in keyof SmuiElementPropMap['span'] as `selectedText\$${k}`]?: SmuiElementPropMap['span'][k];
    } & {
      [k in keyof SmuiElementPropMap['span'] as `dropdownIcon\$${k}`]?: SmuiElementPropMap['span'][k];
    } & {
      [k in keyof ComponentProps<
        typeof LineRipple
      > as `ripple\$${k}`]?: ComponentProps<typeof LineRipple>[k];
    } & {
      [k in keyof ComponentProps<typeof Menu> as `menu\$${k}`]?: ComponentProps<
        typeof Menu
      >[k];
    } & {
      [k in keyof ComponentProps<typeof List> as `list\$${k}`]?: ComponentProps<
        typeof List
      >[k];
    } & {
      input$disabled?: never;
      input$required?: never;
      input$value?: never;
    } = $props();

  // Some trickery to detect uninitialized values but also have the right types.
  const useDefaultValidation = isUninitializedValue(invalid);
  if (isUninitializedValue(invalid)) {
    invalid = false;
  }
  // Done with the trickery.

  let element: HTMLDivElement;
  let instance: MDCSelectFoundation | undefined = $state();
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalStyles: { [k: string]: string } = $state({});
  let selectAnchor: HTMLDivElement;
  let selectAnchorAttrs: { [k: string]: string | undefined } = $state({});
  let selectedIndex = $state(-1);
  const menuId = $derived(restProps['menu$id'] ?? inputId + '-menu');
  let helperId: string | undefined = $state();
  let addLayoutListener = getContext<AddLayoutListener | undefined>(
    'SMUI:addLayoutListener',
  );
  let removeLayoutListener: RemoveLayoutListener | undefined;
  let menuOpen = $state(false);
  let menuClasses: { [k: string]: boolean } = $state({});
  let anchorElement: Element | undefined = $state();
  let anchorCorner: Corner | undefined = $state();
  let wrapFocus = $state(false);
  let list: SMUIListAccessor;
  let context = getContext<string | undefined>('SMUI:select:context');
  // These are instances, not accessors.
  let leadingIconInstance: MDCSelectIconFoundation | undefined = undefined;
  let helperTextInstance: MDCSelectHelperTextFoundation | undefined = undefined;

  // Components
  let floatingLabel: FloatingLabel | undefined = undefined;
  let lineRipple: LineRipple | undefined = undefined;
  let notchedOutline: NotchedOutline | undefined = undefined;

  setContext('SMUI:list:role', '');
  setContext('SMUI:list:nav', false);

  // Only needed on initialization.
  const selectedTextStore = writable('');
  setContext('SMUI:select:selectedText', selectedTextStore);

  const valueStore = writable(value);
  $effect(() => {
    $valueStore = value;
  });
  setContext('SMUI:select:value', valueStore);

  $effect(() => {
    if (instance && instance.getValue() !== key(value)) {
      instance.setValue(key(value));
    }
  });

  let previousSelectedIndex = selectedIndex;
  $effect(() => {
    if (previousSelectedIndex !== selectedIndex) {
      previousSelectedIndex = selectedIndex;
      if (instance) {
        instance.setSelectedIndex(
          selectedIndex,
          /* closeMenu */ false,
          /* skipNotify */ true,
        );
      } else {
        const values = getMenuItemValues();
        if (value !== values[selectedIndex]) {
          value = values[selectedIndex];
        }
      }
    }
  });

  $effect(() => {
    if (instance && instance.getDisabled() !== disabled) {
      instance.setDisabled(disabled);
    }
  });

  $effect(() => {
    if (instance && dirty && instance.isValid() !== !invalid) {
      if (updateInvalid) {
        invalid = !instance.isValid();
      } else {
        instance.setValid(!invalid);
      }
    }
  });

  $effect(() => {
    if (instance && instance.getRequired() !== required) {
      instance.setRequired(required);
    }
  });

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  setContext(
    'SMUI:select:leading-icon:mount',
    (accessor: MDCSelectIconFoundation) => {
      leadingIconInstance = accessor;
    },
  );
  setContext('SMUI:select:leading-icon:unmount', () => {
    leadingIconInstance = undefined;
  });
  setContext('SMUI:list:mount', (accessor: SMUIListAccessor) => {
    list = accessor;
  });
  setContext('SMUI:select:helper-text:id', (id: string) => {
    helperId = id;
  });
  setContext(
    'SMUI:select:helper-text:mount',
    (accessor: MDCSelectHelperTextFoundation) => {
      helperTextInstance = accessor;
    },
  );
  setContext('SMUI:select:helper-text:unmount', () => {
    helperId = undefined;
    helperTextInstance = undefined;
  });

  onMount(() => {
    instance = new MDCSelectFoundation(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (text) => {
          $selectedTextStore = text;
        },
        isSelectAnchorFocused: () => document.activeElement === selectAnchor,
        getSelectAnchorAttr,
        setSelectAnchorAttr: addSelectAnchorAttr,
        removeSelectAnchorAttr,
        addMenuClass,
        removeMenuClass,
        openMenu: () => {
          menuOpen = true;
        },
        closeMenu: () => {
          menuOpen = false;
        },
        getAnchorElement: () => selectAnchor,
        setMenuAnchorElement: (value) => {
          anchorElement = value;
        },
        setMenuAnchorCorner: (value) => {
          anchorCorner = value;
        },
        setMenuWrapFocus: (value) => {
          wrapFocus = value;
        },
        getSelectedIndex: () => selectedIndex,
        setSelectedIndex: (index) => {
          // Don't update the instance again.
          previousSelectedIndex = index;
          selectedIndex = index;
          value = getMenuItemValues()[selectedIndex];
        },
        focusMenuItemAtIndex: (index) => {
          list.focusItemAtIndex(index);
        },
        getMenuItemCount: () => list.items.length,
        getMenuItemValues: () => getMenuItemValues().map(key),
        getMenuItemTextAtIndex: (index) => list.getPrimaryTextAtIndex(index),
        isTypeaheadInProgress: () => list.typeaheadInProgress,
        typeaheadMatchItem: (nextChar, startingIndex) =>
          list.typeaheadMatchItem(nextChar, startingIndex),

        // getCommonAdapterMethods
        addClass,
        removeClass,
        hasClass,
        setRippleCenter: (normalizedX) =>
          lineRipple && lineRipple.setRippleCenter(normalizedX),
        activateBottomLine: () => lineRipple && lineRipple.activate(),
        deactivateBottomLine: () => lineRipple && lineRipple.deactivate(),

        notifyChange: (_selectedValue) => {
          dirty = true;
          if (updateInvalid) {
            invalid = !instance?.isValid();
          }
          dispatch(getElement(), 'SMUISelectChange', {
            value,
            index: selectedIndex,
          });
        },

        // getOutlineAdapterMethods
        hasOutline: () => !!notchedOutline,
        notchOutline: (labelWidth) =>
          notchedOutline && notchedOutline.notch(labelWidth),
        closeOutline: () => notchedOutline && notchedOutline.closeNotch(),

        // getLabelAdapterMethods
        hasLabel: () => !!floatingLabel,
        floatLabel: (shouldFloat) =>
          floatingLabel && floatingLabel.float(shouldFloat),
        getLabelWidth: () => (floatingLabel ? floatingLabel.getWidth() : 0),
        setLabelRequired: (isRequired) =>
          floatingLabel && floatingLabel.setRequired(isRequired),
      },
      {
        get helperText() {
          return helperTextInstance;
        },
        get leadingIcon() {
          return leadingIconInstance;
        },
      },
    );

    selectedIndex = getMenuItemValues().indexOf(value);

    instance.init();
    setUseDefaultValidation(useDefaultValidation);

    return () => {
      instance?.destroy();
    };
  });

  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
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

  function addStyle(name: string, value: string) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
      } else {
        internalStyles[name] = value;
      }
    }
  }

  function addMenuClass(className: string) {
    if (!menuClasses[className]) {
      menuClasses[className] = true;
    }
  }

  function removeMenuClass(className: string) {
    if (!(className in menuClasses) || menuClasses[className]) {
      menuClasses[className] = false;
    }
  }

  function getSelectAnchorAttr(name: string) {
    return name in selectAnchorAttrs
      ? (selectAnchorAttrs[name] ?? null)
      : getElement().getAttribute(name);
  }

  function addSelectAnchorAttr(name: string, value: string) {
    if (selectAnchorAttrs[name] !== value) {
      selectAnchorAttrs[name] = value;
    }
  }

  function removeSelectAnchorAttr(name: string) {
    if (!(name in selectAnchorAttrs) || selectAnchorAttrs[name] != null) {
      selectAnchorAttrs[name] = undefined;
    }
  }

  function getMenuItemValues() {
    return list.getOrderedList().map((accessor) => accessor.getValue());
  }

  function getNormalizedXCoordinate(
    evt: (MouseEvent | TouchEvent) & {
      currentTarget: EventTarget & HTMLDivElement;
    },
  ) {
    const targetClientRect = evt.currentTarget.getBoundingClientRect();
    const xCoordinate = isTouchEvent(evt)
      ? evt.touches[0].clientX
      : evt.clientX;
    return xCoordinate - targetClientRect.left;
  }

  function isTouchEvent(evt: MouseEvent | TouchEvent): evt is TouchEvent {
    return 'touches' in evt;
  }

  export function getUseDefaultValidation() {
    if (instance == null) {
      throw new Error('Instance is undefined.');
    }
    return instance.getUseDefaultValidation();
  }

  /**
   * This is set to true automatically if you don't provide a `invalid` prop.
   */
  export function setUseDefaultValidation(useDefaultValidation: boolean) {
    instance?.setUseDefaultValidation(useDefaultValidation);
  }

  export function focus() {
    selectAnchor.focus();
  }

  export function layout() {
    instance?.layout();
  }

  export function getElement() {
    return element;
  }
</script>
