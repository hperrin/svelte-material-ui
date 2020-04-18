{#if nav && href}
  <a
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-list-item
      {className}
      {activated ? 'mdc-list-item--activated' : ''}
      {selected ? 'mdc-list-item--selected' : ''}
      {disabled ? 'mdc-list-item--disabled' : ''}
    "
    use:Ripple={{ripple, unbounded: false, color}}
    {href}
    {...(activated ? {'aria-current': 'page'} : {})}
    {tabindex}
    on:click={action}
    on:keydown={handleKeydown}
    {...props}
  ><slot></slot></a>
{:else if nav && !href}
  <span
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-list-item
      {className}
      {activated ? 'mdc-list-item--activated' : ''}
      {selected ? 'mdc-list-item--selected' : ''}
      {disabled ? 'mdc-list-item--disabled' : ''}
    "
    use:Ripple={{ripple, unbounded: false, color}}
    {...(activated ? {'aria-current': 'page'} : {})}
    {tabindex}
    on:click={action}
    on:keydown={handleKeydown}
    {...props}
  ><slot></slot></span>
{:else}
  <li
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-list-item
      {className}
      {activated ? 'mdc-list-item--activated' : ''}
      {selected ? 'mdc-list-item--selected' : ''}
      {disabled ? 'mdc-list-item--disabled' : ''}
      {(role === 'menuitem' && selected) ? 'mdc-menu-item--selected' : ''}
    "
    use:Ripple={{ripple, unbounded: false, color}}
    {role}
    {...(role === 'option' ? {'aria-selected': (selected ? 'true' : 'false')} : {})}
    {...((role === 'radio' || role === 'checkbox') ? {'aria-checked': (checked ? 'true' : 'false')} : {})}
    {tabindex}
    on:click={action}
    on:keydown={handleKeydown}
    {...props}
  ><slot></slot></li>
{/if}

<script context="module">
  let counter = 0;
</script>

<script>
  import {onMount, onDestroy, getContext, setContext, createEventDispatcher} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';
  import Ripple from '@smui/ripple/bare.js';

  const dispatch = createEventDispatcher();
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let checked = false;

  export let use = [];
  let className = '';
  export {className as class};
  export let ripple = true;
  export let color = null;
  export let nonInteractive = getContext('SMUI:list:nonInteractive');
  export let activated = false;
  export let role = getContext('SMUI:list:item:role');
  export let selected = false;
  export let disabled = false;
  export let tabindex = !nonInteractive && !disabled && (selected || checked) && '0' || '-1';
  export let href = false;
  export let inputId = 'SMUI-form-field-list-'+(counter++);

  $: props = exclude($$props, ['use', 'class', 'ripple', 'color', 'nonInteractive', 'activated', 'selected', 'disabled', 'tabindex', 'href', 'inputId']);

  let element;
  let addTabindexIfNoItemsSelectedRaf;
  let nav = getContext('SMUI:list:item:nav');

  setContext('SMUI:generic:input:props', {id: inputId});
  setContext('SMUI:generic:input:setChecked', setChecked);

  onMount(() => {
    // Tabindex needs to be '0' if this is the first non-disabled list item, and
    // no other item is selected.

    if (!selected && !nonInteractive) {
      let first = true;
      let el = element;
      while (el.previousSibling) {
        el = el.previousSibling;
        if (el.nodeType === 1 && el.classList.contains('mdc-list-item') && !el.classList.contains('mdc-list-item--disabled')) {
          first = false;
          break;
        }
      }
      if (first) {
        // This is first, so now set up a check that no other items are
        // selected.
        addTabindexIfNoItemsSelectedRaf = window.requestAnimationFrame(addTabindexIfNoItemsSelected);
      }
    }
  });

  onDestroy(() => {
    if (addTabindexIfNoItemsSelectedRaf) {
      window.cancelAnimationFrame(addTabindexIfNoItemsSelectedRaf);
    }
  });

  function addTabindexIfNoItemsSelected() {
    // Look through next siblings to see if none of them are selected.
    let noneSelected = true;
    let el = element;
    while (el.nextSibling) {
      el = el.nextSibling;
      if (el.nodeType === 1 && el.classList.contains('mdc-list-item') && el.attributes['tabindex'] && el.attributes['tabindex'].value === '0') {
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
    if (disabled) {
      e.preventDefault();
    } else {
      dispatch('SMUI:action', e);
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
    tabindex = !nonInteractive && !disabled && (selected || checked) && '0' || '-1';
  }
</script>
