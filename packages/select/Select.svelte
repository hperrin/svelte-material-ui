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
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-select': true,
    'mdc-select--required': required,
    'mdc-select--disabled': disabled,
    'mdc-select--filled': variant === 'filled',
    'mdc-select--outlined': variant === 'outlined',
    'smui-select--standard': variant === 'standard',
    'mdc-select--with-leading-icon': isUninitializedValue(withLeadingIcon)
      ? $$slots.leadingIcon
      : withLeadingIcon,
    'mdc-select--no-label': noLabel || (label == null && !$$slots.label),
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
  on:SMUISelectLeadingIcon:mount={(event) => (leadingIcon = event.detail)}
  on:SMUISelectLeadingIcon:unmount={() => (leadingIcon = undefined)}
  {...exclude($$restProps, [
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
      {...prefixFilter($$restProps, 'input$')}
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
    aria-controls={helperId}
    aria-describedby={helperId}
    on:focus={() => instance && instance.handleFocus()}
    on:blur={() => instance && instance.handleBlur()}
    on:click={(event) => {
      selectAnchor.focus();
      if (instance) {
        instance.handleClick(getNormalizedXCoordinate(event));
      }
    }}
    on:keydown={(event) => instance && instance.handleKeydown(event)}
    on:focus
    on:blur
    {...selectAnchorAttrs}
    {...prefixFilter($$restProps, 'anchor$')}
  >
    {#if variant === 'filled'}
      <span class="mdc-select__ripple" />
    {/if}
    {#if variant !== 'outlined' && !noLabel && (label != null || $$slots.label)}
      <FloatingLabel
        bind:this={floatingLabel}
        id={inputId + '-smui-label'}
        floatAbove={$selectedTextStore !== ''}
        {required}
        {...prefixFilter($$restProps, 'label$')}
        >{label == null ? '' : label}<slot name="label" /></FloatingLabel
      >
    {/if}
    {#if variant === 'outlined'}
      <NotchedOutline
        bind:this={notchedOutline}
        noLabel={noLabel || (label == null && !$$slots.label)}
        {...prefixFilter($$restProps, 'outline$')}
      >
        {#if !noLabel && (label != null || $$slots.label)}
          <FloatingLabel
            bind:this={floatingLabel}
            id={inputId + '-smui-label'}
            floatAbove={$selectedTextStore !== ''}
            {required}
            {...prefixFilter($$restProps, 'label$')}
            >{label == null ? '' : label}<slot name="label" /></FloatingLabel
          >
        {/if}
      </NotchedOutline>
    {/if}
    <slot name="leadingIcon" />
    <span
      use:useActions={selectedTextContainer$use}
      class={classMap({
        [selectedTextContainer$class]: true,
        'mdc-select__selected-text-container': true,
      })}
      {...prefixFilter($$restProps, 'selectedTextContainer$')}
    >
      <span
        bind:this={selectText}
        use:useActions={selectedText$use}
        id={inputId + '-smui-selected-text'}
        class={classMap({
          [selectedText$class]: true,
          'mdc-select__selected-text': true,
        })}
        role="button"
        aria-haspopup="listbox"
        aria-labelledby={inputId + '-smui-label'}
        {...prefixFilter($$restProps, 'selectedText$')}
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
      {...prefixFilter($$restProps, 'dropdownIcon$')}
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
        {...prefixFilter($$restProps, 'ripple$')}
      />
    {/if}
  </div>

  <Menu
    class={classMap({
      [menu$class]: true,
      'mdc-select__menu': true,
      ...menuClasses,
    })}
    fullWidth
    anchor={false}
    {anchorElement}
    {anchorCorner}
    bind:open={menuOpen}
    on:MDCMenu:selected={(event) =>
      instance && instance.handleMenuItemAction(event.detail.index)}
    on:MDCMenuSurface:closing={() => instance && instance.handleMenuClosing()}
    on:MDCMenuSurface:closed={() => instance && instance.handleMenuClosed()}
    on:MDCMenuSurface:opened={() => instance && instance.handleMenuOpened()}
    {...prefixFilter($$restProps, 'menu$')}
  >
    <List
      role="listbox"
      {wrapFocus}
      bind:selectedIndex
      on:SMUIList:mount={(event) => (list = event.detail)}
      {...prefixFilter($$restProps, 'list$')}><slot /></List
    >
  </Menu>
</div>
{#if $$slots.helperText}
  <HelperText
    on:SMUISelectHelperText:id={(event) => (helperId = event.detail)}
    on:SMUISelectHelperText:mount={(event) => (helperText = event.detail)}
    on:SMUISelectHelperText:unmount={() => {
      helperId = undefined;
      helperText = undefined;
    }}
    {...prefixFilter($$restProps, 'helperText$')}
    ><slot name="helperText" /></HelperText
  >
{/if}

<script context="module" lang="ts">
  let counter = 0;
</script>

<script lang="ts">
  import type { AddLayoutListener, RemoveLayoutListener } from '@smui/common';
  import type { Corner } from '@smui/menu-surface';
  import type { SMUIListAccessor } from '@smui/list';
  import type { FloatingLabelComponentDev } from '@smui/floating-label';
  import type { LineRippleComponentDev } from '@smui/line-ripple';
  import type { NotchedOutlineComponentDev } from '@smui/notched-outline';
  import type MDCSelectIconFoundation from '@material/select/icon/foundation';
  import type MDCSelectHelperTextFoundation from '@material/select/helper-text/foundation';
  import { MDCSelectFoundation } from '@material/select';
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
    ActionArray,
  } from '@smui/common/internal/index.js';
  import Ripple from '@smui/ripple';
  import Anchor from '@smui/menu-surface/Anchor';
  import Menu from '@smui/menu';
  import List from '@smui/list';
  import FloatingLabel from '@smui/floating-label';
  import LineRipple from '@smui/line-ripple';
  import NotchedOutline from '@smui/notched-outline';

  import HelperText from './helper-text/HelperText.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());
  interface UninitializedValue extends Function {}
  let uninitializedValue: UninitializedValue = () => {};
  function isUninitializedValue(value: any): value is UninitializedValue {
    return value === uninitializedValue;
  }

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let ripple = true;
  export let disabled = false;
  export let variant: 'standard' | 'filled' | 'outlined' = 'standard';
  export let noLabel = false;
  export let label: string | undefined = undefined;
  export let value: any = '';
  export let key: (item: any) => string = (item) => item;
  export let dirty = false;

  // Some trickery to detect uninitialized values but also have the right types.
  export let invalid: boolean = uninitializedValue as unknown as boolean;
  export let updateInvalid: boolean = isUninitializedValue(invalid);
  if (isUninitializedValue(invalid)) {
    invalid = false;
  }
  // Done with the trickery.

  export let required = false;
  export let inputId = 'SMUI-select-' + counter++;
  export let hiddenInput = false;
  export let withLeadingIcon: UninitializedValue | boolean = uninitializedValue;
  export let anchor$use: ActionArray = [];
  export let anchor$class = '';
  export let selectedTextContainer$use: ActionArray = [];
  export let selectedTextContainer$class = '';
  export let selectedText$use: ActionArray = [];
  export let selectedText$class = '';
  export let dropdownIcon$use: ActionArray = [];
  export let dropdownIcon$class = '';
  export let menu$class = '';

  let element: HTMLDivElement;
  let instance: MDCSelectFoundation;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};
  let selectAnchor: HTMLDivElement;
  let selectAnchorAttrs: { [k: string]: string | undefined } = {};
  let selectText: HTMLSpanElement;
  let selectedIndex = -1;
  let helperId: string | undefined = undefined;
  let addLayoutListener = getContext<AddLayoutListener | undefined>(
    'SMUI:addLayoutListener'
  );
  let removeLayoutListener: RemoveLayoutListener | undefined;
  let menuOpen = false;
  let menuClasses: { [k: string]: boolean } = {};
  let anchorElement: Element | undefined = undefined;
  let anchorCorner: Corner | undefined = undefined;
  let wrapFocus = false;
  let list: SMUIListAccessor;
  let context = getContext<string | undefined>('SMUI:select:context');
  // These are instances, not accessors.
  let leadingIcon: MDCSelectIconFoundation | undefined = undefined;
  let helperText: MDCSelectHelperTextFoundation | undefined = undefined;

  // Components
  let floatingLabel: FloatingLabelComponentDev | undefined = undefined;
  let lineRipple: LineRippleComponentDev | undefined = undefined;
  let notchedOutline: NotchedOutlineComponentDev | undefined = undefined;

  setContext('SMUI:list:role', '');
  setContext('SMUI:list:nav', false);

  // Only needed on initialization.
  const selectedTextStore = writable('');
  setContext('SMUI:select:selectedText', selectedTextStore);

  const valueStore = writable(value);
  $: $valueStore = value;
  setContext('SMUI:select:value', valueStore);

  $: if (instance && instance.getValue() !== key(value)) {
    instance.setValue(key(value));
  }

  let previousSelectedIndex = selectedIndex;
  $: if (previousSelectedIndex !== selectedIndex) {
    previousSelectedIndex = selectedIndex;
    if (instance) {
      instance.setSelectedIndex(
        selectedIndex,
        /* closeMenu */ false,
        /* skipNotify */ true
      );
    } else {
      const values = getMenuItemValues();
      if (value !== values[selectedIndex]) {
        value = values[selectedIndex];
      }
    }
  }

  $: if (instance && instance.getDisabled() !== disabled) {
    instance.setDisabled(disabled);
  }

  $: if (instance && dirty && instance.isValid() !== !invalid) {
    if (updateInvalid) {
      invalid = !instance.isValid();
    } else {
      instance.setValid(!invalid);
    }
  }

  $: if (instance && instance.getRequired() !== required) {
    instance.setRequired(required);
  }

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

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
            invalid = !instance.isValid();
          }
          dispatch(getElement(), 'MDCSelect:change', {
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
          return helperText;
        },
        get leadingIcon() {
          return leadingIcon;
        },
      }
    );

    selectedIndex = getMenuItemValues().indexOf(value);

    instance.init();

    return () => {
      instance.destroy();
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
        internalStyles = internalStyles;
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
      ? selectAnchorAttrs[name] ?? null
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
    }
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

  export function focus() {
    selectAnchor.focus();
  }

  export function layout() {
    instance.layout();
  }

  export function getElement() {
    return element;
  }
</script>
