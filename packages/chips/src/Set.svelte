<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    'mdc-chip-set': true,
    'smui-chip-set--non-interactive': nonInteractive,
    'mdc-chip-set--choice': choice,
    'mdc-chip-set--filter': filter,
    'mdc-chip-set--input': input,
    [className]: true,
  })}
  role="grid"
  {...restProps}
  onSMUIChipInteraction={(
    e: CustomEvent<{ chipId: ChipKey }> & {
      currentTarget: EventTarget & HTMLDivElement;
    },
  ) => {
    handleChipInteraction(e);
    restProps.onSMUIChipInteraction?.(e);
  }}
  onSMUIChipSelection={(
    e: CustomEvent<{
      chipId: ChipKey;
      selected: boolean;
      shouldIgnore: boolean;
    }> & {
      currentTarget: EventTarget & HTMLDivElement;
    },
  ) => {
    handleChipSelection(e);
    restProps.onSMUIChipSelection?.(e);
  }}
  onSMUIChipRemoval={(
    e: CustomEvent<{
      chipId: ChipKey;
      removedAnnouncement: string | null;
    }> & {
      currentTarget: EventTarget & HTMLDivElement;
    },
  ) => {
    handleChipRemoval(e);
    restProps.onSMUIChipRemoval?.(e);
  }}
  onSMUIChipNavigation={(
    e: CustomEvent<{ chipId: ChipKey; key: string; source: EventSource }> & {
      currentTarget: EventTarget & HTMLDivElement;
    },
  ) => {
    handleChipNavigation(e);
    restProps.onSMUIChipNavigation?.(e);
  }}
>
  {#each chips as chipKey, i (key(chipKey))}
    <ContextFragment key="SMUI:chips:chip:index" value={i}>
      <ContextFragment
        key="SMUI:chips:chip:initialSelected"
        value={initialSelected[i]}
      >
        {@render chip(chipKey)}
      </ContextFragment>
    </ContextFragment>
  {/each}
</div>

<script lang="ts" generics="ChipKey extends Object | string | number">
  import type { Snippet } from 'svelte';
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { announce, classMap, useActions } from '@smui/common/internal';
  import { ContextFragment } from '@smui/common';

  import type { EventSource } from './mdc/deprecated/chip/constants';
  import { deprecated } from './mdc';
  import type { SMUIChipsChipAccessor } from './Chip.types.js';

  const { MDCChipSetFoundation } = deprecated;

  type OwnProps = {
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    class?: string;
    /**
     * An array of chip objects.
     */
    chips?: ChipKey[];
    /**
     * Function that takes a chip object and returns a unique string.
     *
     * If your chips are strings or convert to unique strings (like numbers),
     * you don't need this.
     */
    key?: (chip: ChipKey) => string;
    /**
     * The chip that is or chips that are currently selected.
     */
    selected?: ChipKey[] | ChipKey | undefined;
    /**
     * Whether to not allow user interaction.
     */
    nonInteractive?: boolean;
    /**
     * Choice chips allow the user to pick one of the chips.
     *
     * When this is true, `selected` will be one chip object.
     */
    choice?: boolean;
    /**
     * Filter chips allow the user to pick multiple chips.
     *
     * When this is true, `selected` will be an array of chip objects.
     */
    filter?: boolean;
    /**
     * Input chips allow the user to remove chips.
     */
    input?: boolean;

    chip: Snippet<[ChipKey]>;
  };
  let {
    use = [],
    class: className = '',
    chips = $bindable([]),
    key = (chip: any) => `${chip}`,
    selected = $bindable(),
    nonInteractive = false,
    choice = false,
    filter = false,
    input = false,
    chip,
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  if (filter && choice) {
    throw new Error('Chip sets can be either filter or choice, but not both.');
  }

  if (choice && typeof selected === 'object' && 'findIndex' in selected) {
    throw new Error('Choice chips must not be given multiple selected chips.');
  }

  if (
    filter &&
    selected !== undefined &&
    (typeof selected !== 'object' || !('findIndex' in selected))
  ) {
    throw new Error('Filter chips must be given an array of selected chips.');
  }

  let element: HTMLDivElement;
  let instance: deprecated.MDCChipSetFoundation | undefined = $state();
  let chipAccessorMap: Record<string, SMUIChipsChipAccessor> = {};
  let chipAccessorWeakMap = new WeakMap<Object, SMUIChipsChipAccessor>();
  let initialSelected = chips.map(
    (chipId) =>
      (choice &&
        selected != null &&
        key(selected as ChipKey) === key(chipId)) ||
      (filter &&
        selected != null &&
        (selected as ChipKey[]).findIndex(
          (chip) => key(chip) === key(chipId),
        ) !== -1),
  );

  setContext('SMUI:chips:key', key);

  const nonInteractiveStore = writable(nonInteractive);
  $effect(() => {
    $nonInteractiveStore = nonInteractive;
  });
  setContext('SMUI:chips:nonInteractive', nonInteractiveStore);
  const choiceStore = writable(choice);
  $effect(() => {
    $choiceStore = choice;
  });
  setContext('SMUI:chips:choice', choiceStore);
  const filterStore = writable(filter);
  $effect(() => {
    $filterStore = filter;
  });
  setContext('SMUI:chips:filter', filterStore);

  let previousSelected = filter
    ? new Set((selected as ChipKey[] | undefined) ?? [])
    : (selected as ChipKey | undefined);
  $effect(() => {
    if (instance && choice && previousSelected !== selected) {
      const oldSelected = previousSelected;
      previousSelected = selected as ChipKey | undefined;
      if (selected != null) {
        instance.select(key(selected as ChipKey));
      } else {
        instance.handleChipSelection({
          chipId: key(oldSelected as ChipKey),
          selected: false,
          shouldIgnore: false,
        });
      }
    }
  });
  $effect(() => {
    if (instance && filter) {
      const setSelected = new Set((selected as ChipKey[] | undefined) ?? []);
      const unSelected = setDifference(
        previousSelected as Set<ChipKey>,
        setSelected,
      );
      const newSelected = setDifference(
        setSelected,
        previousSelected as Set<ChipKey>,
      );

      if (unSelected.size || newSelected.size) {
        previousSelected = setSelected;

        for (let chipId of unSelected) {
          if (chips.findIndex((chip) => key(chip) === key(chipId)) !== -1) {
            instance.handleChipSelection({
              chipId: key(chipId),
              selected: false,
              shouldIgnore: false,
            });
          }
        }
        for (let chipId of newSelected) {
          instance.handleChipSelection({
            chipId: key(chipId),
            selected: true,
            shouldIgnore: false,
          });
        }
      }
    }
  });

  function setDifference(setA: Set<any>, setB: Set<any>) {
    let _difference = new Set(setA);
    for (let elem of setB) {
      _difference.delete(elem);
    }
    return _difference;
  }

  setContext('SMUI:chips:chip:mount', (accessor: SMUIChipsChipAccessor) => {
    addAccessor(accessor.chipId, accessor);
  });
  setContext('SMUI:chips:chip:unmount', (accessor: SMUIChipsChipAccessor) => {
    removeAccessor(accessor.chipId);
  });

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
      getIndexOfChipById: (chipId) =>
        chips.findIndex((chip) => key(chip) === chipId),
      hasClass: (className) => getElement().classList.contains(className),
      isRTL: () =>
        getComputedStyle(getElement()).getPropertyValue('direction') === 'rtl',
      removeChipAtIndex: (index) => {
        if (index >= 0 && index < chips.length) {
          const chipKey = key(chips[index]);
          // If it's selected, remove it.
          if (
            choice &&
            selected != null &&
            key(selected as ChipKey) === chipKey
          ) {
            selected = undefined;
          } else if (filter && selected != null) {
            const selIndex = (selected as ChipKey[]).findIndex(
              (chip) => key(chip) === chipKey,
            );
            if (selIndex !== -1) {
              (selected as ChipKey[]).splice(selIndex, 1);
            }
          }
          // Now remove it from the chips.
          chips.splice(index, 1);
        }
      },
      removeFocusFromChipAtIndex: (index) => {
        getAccessor(chips[index])?.removeFocus();
      },
      selectChipAtIndex: (index, selectedValue, shouldNotifyClients) => {
        if (index >= 0 && index < chips.length) {
          if (filter) {
            if (selected == null) {
              selected = [];
            }
            const chipKey = key(chips[index]);
            const selIndex = (selected as ChipKey[]).findIndex(
              (chip) => key(chip) === chipKey,
            );
            if (selectedValue && selIndex === -1) {
              (selected as ChipKey[]).push(chips[index]);
            } else if (!selectedValue && selIndex !== -1) {
              (selected as ChipKey[]).splice(selIndex, 1);
            }
          } else if (
            choice &&
            (selectedValue || key(selected as ChipKey) === key(chips[index]))
          ) {
            selected = selectedValue ? chips[index] : undefined;
          }

          getAccessor(chips[index])?.setSelectedFromChipSet(
            selectedValue,
            shouldNotifyClients,
          );
        }
      },
    });

    instance.init();

    if (choice && selected != null) {
      instance.select(key(selected as ChipKey));
    } else if (filter && selected != null && (selected as ChipKey[]).length) {
      for (const chipId of selected as ChipKey[]) {
        instance.select(key(chipId));
      }
    }

    return () => {
      instance?.destroy();
    };
  });

  function handleChipInteraction(
    event: CustomEvent<{ chipId: ChipKey }> & {
      currentTarget: EventTarget & HTMLDivElement;
    },
  ) {
    if (instance) {
      instance.handleChipInteraction({ chipId: key(event.detail.chipId) });
    }
  }

  function handleChipSelection(
    event: CustomEvent<{
      chipId: ChipKey;
      selected: boolean;
      shouldIgnore: boolean;
    }> & {
      currentTarget: EventTarget & HTMLDivElement;
    },
  ) {
    if (instance) {
      instance.handleChipSelection({
        chipId: key(event.detail.chipId),
        selected: event.detail.selected,
        shouldIgnore: event.detail.shouldIgnore,
      });
    }
  }

  function handleChipRemoval(
    event: CustomEvent<{
      chipId: ChipKey;
      removedAnnouncement: string | null;
    }> & {
      currentTarget: EventTarget & HTMLDivElement;
    },
  ) {
    if (instance) {
      instance.handleChipRemoval({
        chipId: key(event.detail.chipId),
        removedAnnouncement: event.detail.removedAnnouncement,
      });
    }
  }

  function handleChipNavigation(
    event: CustomEvent<{
      chipId: ChipKey;
      key: string;
      source: EventSource;
    }> & {
      currentTarget: EventTarget & HTMLDivElement;
    },
  ) {
    if (instance) {
      instance.handleChipNavigation({
        chipId: key(event.detail.chipId),
        key: event.detail.key,
        source: event.detail.source,
      });
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
