<div
  bind:this={element}
  use:Anchor={{ addClass, removeClass }}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-select
    {className}
    {Object.keys(internalClasses).join(
    ' '
  )}
    {required ? 'mdc-select--required' : ''}
    {disabled
    ? 'mdc-select--disabled'
    : ''}
    {variant === 'outlined'
    ? 'mdc-select--outlined'
    : ''}
    {variant === 'standard'
    ? 'smui-select--standard'
    : ''}
    {withLeadingIcon
    ? 'mdc-select--with-leading-icon'
    : ''}
    {noLabel || label == null
    ? 'mdc-select--no-label'
    : ''}
    {invalid ? 'mdc-select--invalid' : ''}
    {menuOpen
    ? 'mdc-select--activated'
    : ''}
  "
  on:MDCSelect:change={changeHandler}
  {...exclude($$props, [
    'use',
    'class',
    'ripple',
    'disabled',
    'variant',
    'noLabel',
    'withLeadingIcon',
    'label',
    'value',
    'selectedIndex',
    'selectedText',
    'dirty',
    'invalid',
    'updateInvalid',
    'required',
    'anchor$',
    'selectedText$',
    'label$',
    'ripple$',
    'outline$',
    'menu$',
    'list$',
  ])}
>
  <div
    use:useActions={anchor$use}
    class="mdc-select__anchor {anchor$class}"
    {...exclude(prefixFilter($$props, 'anchor$'), ['use', 'class'])}
  >
    {#if variant === 'outlined'}
      <NotchedOutline
        noLabel={noLabel || label == null}
        {...prefixFilter($$props, 'outline$')}
      >
        {#if !noLabel && label != null}
          <FloatingLabel
            id={inputId + '-smui-label'}
            floatAbove={value !== ''}
            class={label$class}
            {...exclude(prefixFilter($$props, 'label$'), ['class'])}
            >{label}<slot name="label" /></FloatingLabel
          >
        {/if}
      </NotchedOutline>
    {/if}
    <slot name="icon" />
    <i class="mdc-select__dropdown-icon" />
    <div
      bind:this={selectText}
      use:useActions={selectedText$use}
      id={inputId + '-smui-selected-text'}
      class="mdc-select__selected-text {selectedText$class}"
      role="button"
      aria-haspopup="listbox"
      aria-labelledby="{inputId + '-smui-label'} {inputId +
        '-smui-selected-text'}"
      aria-disabled={disabled ? 'true' : 'false'}
      aria-required={required ? 'true' : 'false'}
      {...exclude(prefixFilter($$props, 'selectedText$'), ['use', 'class'])}
    >
      {$selectedTextStore}
    </div>
    {#if variant !== 'outlined'}
      {#if !noLabel && label != null}
        <FloatingLabel
          id={inputId + '-smui-label'}
          floatAbove={value !== ''}
          class={label$class}
          {...exclude(prefixFilter($$props, 'label$'), ['class'])}
          >{label}<slot name="label" /></FloatingLabel
        >
      {/if}
      {#if ripple}
        <LineRipple {...prefixFilter($$props, 'ripple$')} />
      {/if}
    {/if}
  </div>
  <Menu
    class="mdc-select__menu {menu$class}"
    role="listbox"
    bind:open={menuOpen}
    {...exclude(prefixFilter($$props, 'menu$'), ['class'])}
  >
    <List {...prefixFilter($$props, 'list$')}><slot /></List>
  </Menu>
</div>

<script context="module">
  let counter = 0;
</script>

<script>
  import { MDCSelect } from '@material/select';
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal.js';
  import { Anchor } from '@smui/menu-surface';
  import Menu from '@smui/menu/Menu.svelte';
  import List from '@smui/list/List.svelte';
  import FloatingLabel from '@smui/floating-label/FloatingLabel.svelte';
  import LineRipple from '@smui/line-ripple/LineRipple.svelte';
  import NotchedOutline from '@smui/notched-outline/NotchedOutline.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component(), [
    'MDCSelect:change',
  ]);
  const uninitializedValue = () => {};

  export let use = [];
  let className = '';
  export { className as class };
  export let ripple = true;
  export let disabled = false;
  export let variant = 'standard';
  export let withLeadingIcon = false;
  export let noLabel = false;
  export let label = null;
  export let value = '';
  export let selectedIndex = uninitializedValue;
  export let dirty = false;
  export let invalid = uninitializedValue;
  export let updateInvalid = invalid === uninitializedValue;
  export let required = false;
  export let inputId = 'SMUI-select-' + counter++;
  export let anchor$use = [];
  export let anchor$class = '';
  export let selectedText$use = [];
  export let selectedText$class = '';
  export let label$class = '';
  export let menu$class = '';

  let element;
  let internalClasses = {};
  let selectText;
  let select;
  let menuPromiseResolve;
  let menuPromise = new Promise((resolve) => (menuPromiseResolve = resolve));
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;
  let menuOpen = false;

  setContext('SMUI:menu:instantiate', false);
  setContext('SMUI:menu:getInstance', getMenuInstancePromise);
  setContext('SMUI:list:role', '');
  setContext('SMUI:list:nav', false);

  // Only needed on initialization.
  const selectedTextStore = writable('');
  setContext('SMUI:select:selectedText', selectedTextStore);

  const valueStore = writable(value);
  $: $valueStore = value;
  setContext('SMUI:select:value', valueStore);

  $: if (select && select.value !== value) {
    select.value = value;
  }

  $: if (select && select.selectedIndex !== selectedIndex) {
    if (selectedIndex === uninitializedValue) {
      selectedIndex = select.selectedIndex;
    } else {
      select.selectedIndex = selectedIndex;
    }
  }

  $: if (select && select.disabled !== disabled) {
    select.disabled = disabled;
  }

  $: if (select && select.valid !== !invalid) {
    if (updateInvalid) {
      invalid = !select.valid;
    } else {
      select.valid = !invalid;
    }
  }

  $: if (select && select.required !== required) {
    select.required = required;
  }

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  onMount(() => {
    select = new MDCSelect(element);

    menuPromiseResolve(select.menu_);

    if (!ripple && select.ripple) {
      select.ripple.destroy();
    }

    if (updateInvalid) {
      invalid = !select.valid;
    }
  });

  onDestroy(() => {
    select && select.destroy();

    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });

  function addClass(className) {
    internalClasses[className] = true;
  }

  function removeClass(className) {
    delete internalClasses[className];
    internalClasses = internalClasses;
  }

  function getMenuInstancePromise() {
    return menuPromise;
  }

  function changeHandler(e) {
    value = e.detail.value;
    selectedIndex = e.detail.index;
    dirty = true;
    if (select && updateInvalid) {
      invalid = !select.valid;
    }
  }

  export function focus(...args) {
    return selectText.focus(...args);
  }

  export function layout(...args) {
    return select.layout(...args);
  }
</script>
