<svelte:component
  this={component}
  bind:element
  use={[
    [
      Ripple,
      { ripple, unbounded: false, color, disabled, addClass, removeClass },
    ],
    forwardEvents,
    ...use,
  ]}
  class="
    mdc-list-item
    {className}
    {Object.keys(internalClasses).join(
    ' '
  )}
    {activated ? 'mdc-list-item--activated' : ''}
    {selected
    ? 'mdc-list-item--selected'
    : ''}
    {disabled ? 'mdc-list-item--disabled' : ''}
    {!nav &&
  role === 'menuitem' &&
  selected
    ? 'mdc-menu-item--selected'
    : ''}
  "
  {...nav && activated ? { 'aria-current': 'page' } : {}}
  {...!nav ? { role } : {}}
  {...!nav && role === 'option'
    ? { 'aria-selected': selected ? 'true' : 'false' }
    : {}}
  {...!nav && (role === 'radio' || role === 'checkbox')
    ? { 'aria-checked': checked ? 'true' : 'false' }
    : {}}
  {...!nav ? { 'aria-disabled': disabled ? 'true' : 'false' } : {}}
  {tabindex}
  on:click={action}
  on:keydown={handleKeydown}
  {...internalAttrs}
  {...exclude($$props, [
    'use',
    'class',
    'ripple',
    'color',
    'nonInteractive',
    'activated',
    'selected',
    'disabled',
    'tabindex',
    'inputId',
  ])}
  >{#if ripple}<span class="mdc-list-item__ripple" />{/if}<slot
  /></svelte:component
>

<script context="module">
  let counter = 0;
</script>

<script>
  import {
    onMount,
    onDestroy,
    getContext,
    setContext,
    createEventDispatcher,
  } from 'svelte';
  import {
    forwardEventsBuilder,
    exclude,
    dispatch,
  } from '@smui/common/internal.js';
  import A from '@smui/common/A.svelte';
  import Span from '@smui/common/Span.svelte';
  import Li from '@smui/common/Li.svelte';
  import Ripple from '@smui/ripple/bare.js';

  const forwardEvents = forwardEventsBuilder(createEventDispatcher());
  let checked = false;

  export let use = [];
  let className = '';
  export { className as class };
  export let ripple = true;
  export let color = null;
  export let nonInteractive = getContext('SMUI:list:nonInteractive');
  setContext('SMUI:list:nonInteractive', undefined);
  export let activated = false;
  export let role = getContext('SMUI:list:item:role');
  setContext('SMUI:list:item:role', undefined);
  export let selected = false;
  export let disabled = false;
  export let tabindex =
    (!nonInteractive && !disabled && (selected || checked) && '0') || '-1';
  export let inputId = 'SMUI-form-field-list-' + counter++;
  // Purposely left out of props exclude.
  export let href = null;

  let element;
  let internalClasses = {};
  let internalAttrs = {};
  let addTabindexIfNoItemsSelectedRaf;
  let accessor = {
    _smui_accessor: true,
    get element() {
      return element;
    },
    get selected() {
      return selected;
    },
    set selected(value) {
      selected = value;
    },
    addClass,
    removeClass,
    addAttr,
    removeAttr,
    getPrimaryText,
  };
  let nav = getContext('SMUI:list:item:nav');

  export let component = nav ? (href ? A : Span) : Li;

  setContext('SMUI:generic:input:props', { id: inputId });
  setContext('SMUI:generic:input:setChecked', setChecked);
  // Reset separator context, because we aren't directly under a list anymore.
  setContext('SMUI:separator:context', undefined);

  onMount(() => {
    // Tabindex needs to be '0' if this is the first non-disabled list item, and
    // no other item is selected.

    if (!selected && !nonInteractive) {
      let first = true;
      let el = element;
      while (el.previousSibling) {
        el = el.previousSibling;
        if (
          el.nodeType === 1 &&
          el.classList.contains('mdc-list-item') &&
          !el.classList.contains('mdc-list-item--disabled')
        ) {
          first = false;
          break;
        }
      }
      if (first) {
        // This is first, so now set up a check that no other items are
        // selected.
        addTabindexIfNoItemsSelectedRaf = window.requestAnimationFrame(
          addTabindexIfNoItemsSelected
        );
      }
    }

    dispatch(element, 'SMUI:list:item:mount', accessor);
  });

  onDestroy(() => {
    if (addTabindexIfNoItemsSelectedRaf) {
      window.cancelAnimationFrame(addTabindexIfNoItemsSelectedRaf);
    }

    dispatch(element, 'SMUI:list:item:unmount', accessor);
  });

  function addClass(className) {
    internalClasses[className] = true;
  }

  function removeClass(className) {
    delete internalClasses[className];
  }

  function addAttr(name, value) {
    internalAttrs[name] = value;
  }

  function removeAttr(name) {
    delete internalAttrs[name];
  }

  function getPrimaryText() {
    const primaryText = element.querySelector('.mdc-list-item__primary-text');
    if (primaryText) {
      return primaryText.textContent;
    }
    return '';
  }

  function addTabindexIfNoItemsSelected() {
    // Look through next siblings to see if none of them are selected.
    let noneSelected = true;
    let el = element;
    while (el.nextSibling) {
      el = el.nextSibling;
      if (
        el.nodeType === 1 &&
        el.classList.contains('mdc-list-item') &&
        el.attributes['tabindex'] &&
        el.attributes['tabindex'].value === '0'
      ) {
        noneSelected = false;
        break;
      }
    }
    if (noneSelected) {
      // This is the first element, and no other element is selected, so the
      // tabindex should be '0'.
      tabindex = '0';
    }
  }

  function action(e) {
    if (!disabled) {
      dispatch(element, 'SMUI:action', e);
    }
  }

  function handleKeydown(e) {
    const isEnter = e.key === 'Enter' || e.keyCode === 13;
    const isSpace = e.key === 'Space' || e.keyCode === 32;
    if (isEnter || isSpace) {
      action(e);
    }
  }

  function setChecked(isChecked) {
    checked = isChecked;
    tabindex =
      (!nonInteractive && !disabled && (selected || checked) && '0') || '-1';
  }
</script>
