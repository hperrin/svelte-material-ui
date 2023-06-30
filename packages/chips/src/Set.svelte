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
  on:SMUIChipsChip:mount={handleChipMount}
  on:SMUIChipsChip:unmount={handleChipUnmount}
  on:SMUIChip:interaction={handleChipInteraction}
  on:SMUIChip:selection={handleChipSelection}
  on:SMUIChip:removal={handleChipRemoval}
  on:SMUIChip:navigation={handleChipNavigation}
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

<script lang="ts">
  import type {
    MDCChipInteractionEvent,
    MDCChipNavigationEvent,
    MDCChipRemovalEvent,
    MDCChipSelectionEvent,
    MDCChipSelectionEventDetail,
  } from '@material/chips/deprecated/chip/types';
  import { deprecated } from '@material/chips';
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    announce,
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal';
  import { ContextFragment } from '@smui/common';

  import type { SMUIChipsChipAccessor } from './Chip.types.js';

  const { MDCChipSetFoundation } = deprecated;

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    chips?: any[];
    key?: (chip: any) => string | number;
    selected?: any[] | any | undefined;
    nonInteractive?: boolean;
    choice?: boolean;
    filter?: boolean;
    input?: boolean;
  };
  type $$Props = OwnProps & SmuiAttrs<'div', keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let chips: any[] = [];
  export let key: (chip: any) => string | number = (chip: any) => chip;
  export let selected: any[] | any | undefined = undefined;
  export let nonInteractive = false;
  export let choice = false;
  export let filter = false;
  export let input = false;

  let element: HTMLDivElement;
  let instance: deprecated.MDCChipSetFoundation;
  let chipAccessorMap: {
    [k: string]: SMUIChipsChipAccessor;
    [k: number]: SMUIChipsChipAccessor;
  } = {};
  let chipAccessorWeakMap = new WeakMap<Object, SMUIChipsChipAccessor>();
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
          instance.handleChipSelection({
            chipId,
            selected: false,
          } as MDCChipSelectionEventDetail);
        }
      }
      for (let chipId of newSelected) {
        instance.handleChipSelection({
          chipId,
          selected: true,
        } as MDCChipSelectionEventDetail);
      }
    }
  }

  function setDifference(setA: Set<any>, setB: Set<any>) {
    let _difference = new Set(setA);
    for (let elem of setB) {
      _difference.delete(elem);
    }
    return _difference;
  }

  onMount(() => {
    instance = new MDCChipSetFoundation({
      announceMessage: announce,
      focusChipPrimaryActionAtIndex: (index) => {
        getAccessor(chips[index])?.focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: (index) => {
        getAccessor(chips[index])?.focusTrailingAction();
      },
      getChipListCount: () => chips.length,
      getIndexOfChipById: (chipId) => chips.indexOf(chipId),
      hasClass: (className) => getElement().classList.contains(className),
      isRTL: () =>
        getComputedStyle(getElement()).getPropertyValue('direction') === 'rtl',
      removeChipAtIndex: (index) => {
        if (index >= 0 && index < chips.length) {
          if (choice && selected === chips[index]) {
            selected = null;
          } else if (filter && selected.indexOf(chips[index]) !== -1) {
            selected.splice(selected.indexOf(chips[index]), 1);
            selected = selected;
          }
          chips.splice(index, 1);
          chips = chips;
        }
      },
      removeFocusFromChipAtIndex: (index) => {
        getAccessor(chips[index])?.removeFocus();
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

          getAccessor(chips[index])?.setSelectedFromChipSet(
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

  function handleChipMount(event: CustomEvent<SMUIChipsChipAccessor>) {
    const accessor = event.detail;

    addAccessor(accessor.chipId, accessor);
  }

  function handleChipUnmount(event: CustomEvent<SMUIChipsChipAccessor>) {
    const accessor = event.detail;

    removeAccessor(accessor.chipId);
  }

  function handleChipInteraction(event: MDCChipInteractionEvent) {
    if (instance) {
      instance.handleChipInteraction(event.detail);
    }
  }

  function handleChipSelection(event: MDCChipSelectionEvent) {
    if (instance) {
      instance.handleChipSelection(event.detail);
    }
  }

  function handleChipRemoval(event: MDCChipRemovalEvent) {
    if (instance) {
      instance.handleChipRemoval(event.detail);
    }
  }

  function handleChipNavigation(event: MDCChipNavigationEvent) {
    if (instance) {
      instance.handleChipNavigation(event.detail);
    }
  }

  function getAccessor(chipId: any) {
    return chipId instanceof Object
      ? chipAccessorWeakMap.get(chipId)
      : chipAccessorMap[chipId];
  }

  function addAccessor(chipId: any, accessor: SMUIChipsChipAccessor) {
    if (chipId instanceof Object) {
      chipAccessorWeakMap.set(chipId, accessor);
    } else {
      chipAccessorMap[chipId] = accessor;
    }
  }

  function removeAccessor(chipId: any) {
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
