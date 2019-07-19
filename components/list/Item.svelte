<li
  bind:this={element}
  class="mdc-list-item {className}"
  class:mdc-list-item--selected={selected}
  class:mdc-list-item--activated={activated}
  class:mdc-list-item--disabled={disabled}
  use:Ripple={[ripple, false]}
  role={selectable ? 'option' : false}
  aria-selected={selectable ? (selected ? 'true' : 'false') : false}
  {tabindex}
  on:click={action}
  on:keydown={handleKeydown}
  on:focus on:blur
  on:fullscreenchange on:fullscreenerror on:scroll
  on:cut on:copy on:paste
  on:keydown on:keypress on:keyup
  on:auxclick on:click on:contextmenu on:dblclick on:mousedown on:mouseenter on:mouseleave on:mousemove on:mouseover on:mouseout on:mouseup on:pointerlockchange on:pointerlockerror on:select on:wheel
  on:drag on:dragend on:dragenter on:dragstart on:dragleave on:dragover on:drop
  on:touchcancel on:touchend on:touchmove on:touchstart
  on:pointerover on:pointerenter on:pointerdown on:pointermove on:pointerup on:pointercancel on:pointerout on:pointerleave on:gotpointercapture on:lostpointercapture
  {...exclude($$props, ['class', 'ripple', 'nonInteractive', 'selectable', 'selected', 'activated', 'disabled', 'tabindex'])}
><slot></slot></li>

<script>
  import {onMount, onDestroy, createEventDispatcher} from 'svelte';
  import {exclude} from '../exclude';
  import Ripple from '../ripple';

  let dispatch = createEventDispatcher();

  let className = '';
  export {className as class};
  export let ripple = true;
  export let nonInteractive = false;
  export let selectable = false;
  export let selected = false;
  export let activated = false;
  export let disabled = false;
  export let tabindex = !nonInteractive && !disabled && selected && '0' || '-1';

  let element;
  let addTabindexIfNoItemsSelectedRaf;

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
      if (el.nodeType === 1 && el.classList.contains('mdc-list-item') && el.classList.contains('mdc-list-item--selected')) {
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

  // TODO: radiogroup
</script>