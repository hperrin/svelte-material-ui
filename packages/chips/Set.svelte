<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-chip-set
    {className}
    {choice
    ? 'mdc-chip-set--choice'
    : ''}
    {filter ? 'mdc-chip-set--filter' : ''}
    {input
    ? 'mdc-chip-set--input'
    : ''}
  "
  role="grid"
  on:MDCChip:removal={handleRemoval}
  on:MDCChip:selection={handleSelection}
  {...exclude($$props, [
    'use',
    'class',
    'chips',
    'key',
    'selected',
    'choice',
    'filter',
    'input',
  ])}
>
  {#each chips as chip, i (key(chip))}
    <ContextFragment key="SMUI:chip:initialTabindex" value={i === 0 ? 0 : -1}>
      <slot {chip} />
    </ContextFragment>
  {/each}
</div>

<script>
  import { MDCChipSet } from '@material/chips';
  import { onMount, onDestroy, afterUpdate, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';
  import ContextFragment from '@smui/common/ContextFragment.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let chips = [];
  export let key = (chip) => chip;
  export let selected = null;
  export let choice = false;
  export let filter = false;
  export let input = false;

  let element;
  let chipSet;

  const choiceStore = writable(choice);
  $: $choiceStore = choice;
  setContext('SMUI:chip:choice', choiceStore);
  const filterStore = writable(filter);
  $: $filterStore = filter;
  setContext('SMUI:chip:filter', filterStore);
  const selectedStore = writable(selected);
  $: $selectedStore = selected;
  setContext('SMUI:chip:selected', selectedStore);

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
    // Super shady workaround for MDC removing the element before Svelte can.
    // https://github.com/material-components/material-components-web/blob/v4.0.0/packages/mdc-chips/chip-set/component.ts#L125
    chipSet.foundation_.adapter_.removeChipAtIndex = (index) => {
      if (index >= 0 && index < chipSet.chips_.length) {
        chipSet.chips_[index].destroy();
        // This is the part that's causing problems.
        // chipSet.chips_[index].remove();
        chipSet.chips_.splice(index, 1);
      }
    };
    for (let i = 0; i < element.children.length; i++) {
      element.children[i].setChip(chipSet.chips[i]);
    }
  });

  onDestroy(() => {
    chipSet && chipSet.destroy();
  });

  let previousChipsLength = chips.length;
  afterUpdate(() => {
    if (previousChipsLength !== chips.length) {
      while (previousChipsLength < chips.length) {
        chipSet.addChip(element.children[previousChipsLength]);
        element.children[previousChipsLength].setChip(
          chipSet.chips[previousChipsLength]
        );
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
    const index = chipSet.foundation_.adapter_.getIndexOfChipById(
      e.detail.chipId
    );
    chips.splice(index, 1);
    chips = chips;
  }

  export function getElement() {
    return element;
  }
</script>
