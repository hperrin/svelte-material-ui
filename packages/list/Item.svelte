<svelte:component
  this={component}
  bind:this={element}
  use={[
    ...(nonInteractive
      ? []
      : [
          [
            Ripple,
            {
              ripple: !input,
              unbounded: false,
              color:
                (activated || selected) && color == null ? 'primary' : color,
              disabled,
              addClass,
              removeClass,
              addStyle,
            },
          ],
        ]),
    forwardEvents,
    ...use,
  ]}
  class={classMap({
    [className]: true,
    'mdc-deprecated-list-item': true,
    'mdc-deprecated-list-item--activated': activated,
    'mdc-deprecated-list-item--selected': selected,
    'mdc-deprecated-list-item--disabled': disabled,
    'mdc-menu-item--selected': !nav && role === 'menuitem' && selected,
    'smui-menu-item--non-interactive': nonInteractive,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  {...nav && activated ? { 'aria-current': 'page' } : {}}
  {...!nav ? { role } : {}}
  {...!nav && role === 'option'
    ? { 'aria-selected': selected ? 'true' : 'false' }
    : {}}
  {...!nav && (role === 'radio' || role === 'checkbox')
    ? { 'aria-checked': input && input.checked ? 'true' : 'false' }
    : {}}
  {...!nav ? { 'aria-disabled': disabled ? 'true' : 'false' } : {}}
  {tabindex}
  on:click={action}
  on:keydown={handleKeydown}
  on:SMUI:generic:input:mount={(event) => (input = event.detail)}
  on:SMUI:generic:input:unmount={() => (input = undefined)}
  {href}
  {...internalAttrs}
  {...$$restProps}
  >{#if ripple}<span class="mdc-deprecated-list-item__ripple" />{/if}<slot
  /></svelte:component
>

<script context="module">
  let counter = 0;
</script>

<script>
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    dispatch,
  } from '@smui/common/internal.js';
  import Ripple from '@smui/ripple';
  import A from '@smui/common/A.svelte';
  import Span from '@smui/common/Span.svelte';
  import Li from '@smui/common/Li.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {};

  export let use = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let color = null;
  export let nonInteractive = getContext('SMUI:list:nonInteractive');
  setContext('SMUI:list:nonInteractive', undefined);
  export let ripple = !nonInteractive;
  export let activated = false;
  export let role = getContext('SMUI:list:item:role');
  setContext('SMUI:list:item:role', undefined);
  export let selected = false;
  export let disabled = false;
  let tabindexProp = uninitializedValue;
  export { tabindexProp as tabindex };
  export let inputId = 'SMUI-form-field-list-' + counter++;
  export let href = null;

  let element;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let input;
  let addTabindexIfNoItemsSelectedRaf;
  let nav = getContext('SMUI:list:item:nav');

  $: tabindex =
    tabindexProp == uninitializedValue
      ? (!nonInteractive &&
          !disabled &&
          (selected || (input && input.checked)) &&
          '0') ||
        '-1'
      : tabindexProp;

  export let component = nav ? (href ? A : Span) : Li;

  setContext('SMUI:generic:input:props', { id: inputId });
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
          el.classList.contains('mdc-deprecated-list-item') &&
          !el.classList.contains('mdc-deprecated-list-item--disabled')
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

    const accessor = {
      _smui_list_item_accessor: true,
      get element() {
        return getElement();
      },
      get selected() {
        return selected;
      },
      set selected(value) {
        selected = value;
      },
      hasClass,
      addClass,
      removeClass,
      getAttr,
      addAttr,
      removeAttr,
      getPrimaryText,

      // For inputs within item.
      get checked() {
        return input && input.checked;
      },
      set checked(value) {
        if (input) {
          input.checked = value;
        }
      },
      get hasCheckbox() {
        return !!(input && input._smui_checkbox_accessor);
      },
      get hasRadio() {
        return !!(input && input._smui_radio_accessor);
      },
      activateRipple() {
        if (input) {
          input.activateRipple();
        }
      },
      deactivateRipple() {
        if (input) {
          input.deactivateRipple();
        }
      },

      // For select options.
      getValue() {
        return $$restProps.value;
      },
    };

    dispatch(element, 'SMUI:list:item:mount', accessor);

    return () => {
      dispatch(element, 'SMUI:list:item:unmount', accessor);
    };
  });

  onDestroy(() => {
    if (addTabindexIfNoItemsSelectedRaf) {
      window.cancelAnimationFrame(addTabindexIfNoItemsSelectedRaf);
    }
  });

  function hasClass(className) {
    return className in internalClasses
      ? internalClasses[className]
      : getElement().classList.contains(className);
  }

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

  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }

  function getAttr(name) {
    return name in internalAttrs
      ? internalAttrs[name]
      : getElement().getAttribute(name);
  }

  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function removeAttr(name) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      internalAttrs[name] = undefined;
    }
  }

  function addTabindexIfNoItemsSelected() {
    // Look through next siblings to see if none of them are selected.
    let noneSelected = true;
    let el = element;
    while (el.nextSibling) {
      el = el.nextSibling;
      if (
        el.nodeType === 1 &&
        el.classList.contains('mdc-deprecated-list-item') &&
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

  export function getPrimaryText() {
    const element = getElement();

    const primaryText = element.querySelector(
      '.mdc-deprecated-list-item__primary-text'
    );
    if (primaryText) {
      return primaryText.textContent;
    }
    const text = element.querySelector('.mdc-deprecated-list-item__text');
    if (text) {
      return text.textContent;
    }
    return element.textContent;
  }

  export function getElement() {
    return element.getElement();
  }
</script>
