<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-chip-set': true,
    'smui-chip-set--non-interactive': nonInteractive,
    'mdc-chip-set--choice': choice,
    'mdc-chip-set--filter': filter,
    'mdc-chip-set--input': input,
  })}
  role="grid"
  on:SMUI:chips:chip:mount={(event) => handleChipMount(event)}
  on:SMUI:chips:chip:unmount={(event) => handleChipUnmount(event)}
  on:MDCChip:interaction={(event) =>
    instance && instance.handleChipInteraction(event.detail)}
  on:MDCChip:selection={(event) =>
    instance && instance.handleChipSelection(event.detail)}
  on:MDCChip:removal={(event) =>
    instance && instance.handleChipRemoval(event.detail)}
  on:MDCChip:navigation={(event) =>
    instance && instance.handleChipNavigation(event.detail)}
  {...$$restProps}
>
  {#each chips as chip, i (key(chip))}
    <ContextFragment key="SMUI:chips:chip:index" value={i}>
      <ContextFragment
        key="SMUI:chips:chip:initialSelected"
        value={initialSelected[i]}
      >
        <slot {chip} />
      </ContextFragment>
    </ContextFragment>
  {/each}
</div>

<script>
  import { MDCChipSetFoundation } from '@material/chips/deprecated';
  import { announce } from '@material/dom/announce.js';
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
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
  export let nonInteractive = false;
  export let choice = false;
  export let filter = false;
  export let input = false;

  let element;
  let instance;
  let chipAccessorMap = {};
  let chipAccessorWeakMap = new WeakMap();
  let initialSelected = chips.map(
    (chipId) =>
      (choice && selected === chipId) ||
      (filter && selected.indexOf(chipId) !== -1)
  );

  const nonInteractiveStore = writable(nonInteractive);
  $: $nonInteractiveStore = nonInteractive;
  setContext('SMUI:chips:nonInteractive', nonInteractiveStore);
  const choiceStore = writable(choice);
  $: $choiceStore = choice;
  setContext('SMUI:chips:choice', choiceStore);
  const filterStore = writable(filter);
  $: $filterStore = filter;
  setContext('SMUI:chips:filter', filterStore);

  let previousSelected = filter ? new Set(selected) : selected;
  $: if (instance && choice && previousSelected !== selected) {
    previousSelected = selected;
    instance.select(selected);
  }
  $: if (instance && filter) {
    const setSelected = new Set(selected);
    const unSelected = setDifference(previousSelected, setSelected);
    const newSelected = setDifference(setSelected, previousSelected);

    if (unSelected.size || newSelected.size) {
      previousSelected = setSelected;

      for (let chipId of unSelected) {
        if (chips.indexOf(chipId) !== -1) {
          instance.handleChipSelection({ chipId, selected: false });
        }
      }
      for (let chipId of newSelected) {
        instance.handleChipSelection({ chipId, selected: true });
      }
    }
  }

  function setDifference(setA, setB) {
    let _difference = new Set(setA);
    for (let elem of setB) {
      _difference.delete(elem);
    }
    return _difference;
  }

  onMount(() => {
    instance = new MDCChipSetFoundation({
      announceMessage: (message) => {
        announce(message);
      },
      focusChipPrimaryActionAtIndex: (index) => {
        getAccessor(chips[index]).focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: (index) => {
        getAccessor(chips[index]).focusTrailingAction();
      },
      getChipListCount: () => chips.length,
      getIndexOfChipById: (chipId) => chips.indexOf(chipId),
      hasClass: (className) => getElement().classList.contains(className),
      isRTL: () =>
        getComputedStyle(getElement()).getPropertyValue('direction') === 'rtl',
      removeChipAtIndex: (index) => {
        if (index >= 0 && index < chips.length) {
          if (choice && selected === chips[i]) {
            selected = null;
          } else if (filter && selected.indexOf(chips[i]) !== -1) {
            selected.splice(selected.indexOf(chips[i]), 1);
            selected = selected;
          }
          chips.splice(index, 1);
          chips = chips;
        }
      },
      removeFocusFromChipAtIndex: (index) => {
        getAccessor(chips[index]).removeFocus();
      },
      selectChipAtIndex: (index, selectedValue, shouldNotifyClients) => {
        if (index >= 0 && index < chips.length) {
          if (filter) {
            const selIndex = selected.indexOf(chips[index]);
            if (selectedValue && selIndex === -1) {
              selected.push(chips[index]);
              selected = selected;
            } else if (!selectedValue && selIndex !== -1) {
              selected.splice(selIndex, 1);
              selected = selected;
            }
          } else if (choice && (selectedValue || selected === chips[index])) {
            selected = selectedValue ? chips[index] : null;
          }

          getAccessor(chips[index]).setSelectedFromChipSet(
            selectedValue,
            shouldNotifyClients
          );
        }
      },
    });

    instance.init();

    if (choice && selected != null) {
      instance.select(selected);
    } else if (filter && selected.length) {
      for (const chipId of selected) {
        instance.select(chipId);
      }
    }

    return () => {
      instance.destroy();
    };
  });

  function handleChipMount(event) {
    const accessor = event.detail;

    addAccessor(accessor.chipId, accessor);
  }

  function handleChipUnmount(event) {
    const accessor = event.detail;

    removeAccessor(accessor.chipId);
  }

  function getAccessor(chipId) {
    return chipId instanceof Object
      ? chipAccessorWeakMap.get(chipId)
      : chipAccessorMap[chipId];
  }

  function addAccessor(chipId, accessor) {
    if (chipId instanceof Object) {
      chipAccessorWeakMap.set(chipId, accessor);
    } else {
      chipAccessorMap[chipId] = accessor;
    }
  }

  function removeAccessor(chipId) {
    if (chipId instanceof Object) {
      chipAccessorWeakMap.delete(chipId);
    } else {
      delete chipAccessorMap[chipId];
    }
  }

  export function getElement() {
    return element;
  }
</script>
