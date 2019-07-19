<div
  bind:this={element}
  class="mdc-chip-set {className}"
  class:mdc-chip-set--choice={choice}
  class:mdc-chip-set--filter={filter}
  class:mdc-chip-set--input={input}
  on:MDCChip:removal={handleRemoval}
  on:MDCChip:selection={handleSelection}
  on:focus on:blur
  on:fullscreenchange on:fullscreenerror on:scroll
  on:cut on:copy on:paste
  on:keydown on:keypress on:keyup
  on:auxclick on:click on:contextmenu on:dblclick on:mousedown on:mouseenter on:mouseleave on:mousemove on:mouseover on:mouseout on:mouseup on:pointerlockchange on:pointerlockerror on:select on:wheel
  on:drag on:dragend on:dragenter on:dragstart on:dragleave on:dragover on:drop
  on:touchcancel on:touchend on:touchmove on:touchstart
  on:pointerover on:pointerenter on:pointerdown on:pointermove on:pointerup on:pointercancel on:pointerout on:pointerleave on:gotpointercapture on:lostpointercapture
  {...exclude($$props, ['class', 'chips', 'key', 'selected', 'choice', 'filter', 'input'])}
>
  {#each chips as chip, i (key(chip))}
    <slot {chip}></slot>
  {/each}
</div>

<script>
  import {MDCChipSet} from '@material/chips';
  import {onMount, onDestroy, afterUpdate} from 'svelte';
  import {exclude} from '../exclude';

  let className = '';
  export {className as class};
  export let chips = [];
  export let key = chip => chip;
  export let selected = null;
  export let choice = false;
  export let filter = false;
  export let input = false;

  let element;
  let chipSet;

  // Update the MDCChip when the selection changes.
  $: if (chipSet) {
    if (choice) {
      if (selected !== null) {
        // Find the selected item.
        let i;
        for (i = 0; i < chips.length; i++) {
          if (selected === chips[i]) {
            break;
          }
        }
        for (let j = 0; j < chipSet.chips.length; j++) {
          if (chipSet.chips[j].selected !== (j === i)) {
            chipSet.chips[j].selected = j === i;
          }
        }
      } else {
        for (let i = 0; i < chipSet.chips.length; i++) {
          if (chipSet.chips[i].selected) {
            chipSet.chips[i].selected = false;
          }
        }
      }
    } else if (Array.isArray(selected)) {
      for (let i = 0; i < chipSet.chips.length; i++) {
        const sel = selected.indexOf(chips[i]) !== -1;
        if (chipSet.chips[i].selected !== sel) {
          chipSet.chips[i].selected = sel;
        }
      }
    }
  }

  onMount(() => {
    chipSet = new MDCChipSet(element);
    for (let i = 0; i < element.children.length; i++) {
      element.children[i].setChip(chipSet.chips[i]);
    }
  });

  onDestroy(() => {
    chipSet.destroy();
  });

  let previousChipsLength = chips.length;
  afterUpdate(() => {
    if (previousChipsLength !== chips.length) {
      while (previousChipsLength < chips.length) {
        chipSet.addChip(element.children[previousChipsLength]);
        previousChipsLength++;
      }
      previousChipsLength = chips.length;
    }
  });

  let selectedRaf;
  function handleSelection(e) {
    if (selectedRaf) {
      window.cancelAnimationFrame(selectedRaf);
    }
    selectedRaf = window.requestAnimationFrame(updateSelected);
  }

  function updateSelected() {
    if (!chipSet) {
      return;
    }
    if (choice) {
      if (!chipSet.selectedChipIds.length) {
        selected = null;
        return;
      }
      for (let i = 0; i < chipSet.chips.length; i++) {
        if (chipSet.chips[i].id === chipSet.selectedChipIds[0]) {
          selected = chips[i];
          return;
        }
      }
      selected = null;
    } else {
      if (!Array.isArray(selected)) {
        selected = [];
      }
      selected.splice(0, selected.length);
      for (let i = 0; i < chipSet.chips.length; i++) {
        if (chipSet.selectedChipIds.indexOf(chipSet.chips[i].id) !== -1) {
          selected.push(chips[i]);
        }
      }
      selected = selected;
    }
  }

  function handleRemoval(e) {
    let i = 0;
    let el = e.detail.root;
    while (el.previousSibling) {
      el = el.previousSibling;
      if (el.nodeType === 1) {
        i++;
      }
    }
    chips.splice(i, 1);
    chips = chips;
  }
</script>