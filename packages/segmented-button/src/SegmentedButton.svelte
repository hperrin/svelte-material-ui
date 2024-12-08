<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-segmented-button': true,
    'mdc-segmented-button--single-select': singleSelect,
  })}
  role={singleSelect ? 'radiogroup' : 'group'}
  {...restProps}
  onselected={(e) => {
    handleSelected(e);
    restProps.onselected?.(e);
  }}
>
  {#each segments as segmentKey, i (key(segmentKey))}
    <ContextFragment key="SMUI:segmented-button:segment:index" value={i}>
      <ContextFragment
        key="SMUI:segmented-button:segment:initialSelected"
        value={initialSelected[i]}
      >
        {@render segment(segmentKey)}
      </ContextFragment>
    </ContextFragment>
  {/each}
</div>

<script lang="ts" generics="SegmentKey extends Object | string | number">
  import type { SegmentDetail } from '@material/segmented-button';
  // TODO: Remove this when MDC's segmented button is fixed.
  // @ts-ignore
  import { MDCSegmentedButtonFoundation } from './mdc-segmented-button/index.js';
  import type { Snippet } from 'svelte';
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions, dispatch } from '@smui/common/internal';
  import { ContextFragment } from '@smui/common';

  import type { SMUISegmentedButtonSegmentAccessor } from './Segment.types.js';

  type PrimitiveKey = string | number;
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
     * An array of segment objects.
     */
    segments?: SegmentKey[];
    /**
     * Function that takes segment object and returns a unique string or number.
     *
     * If your segments are strings or numbers, you don't need this.
     */
    key?: (segment: SegmentKey) => PrimitiveKey;
    /**
     * Allow only one selection.
     *
     * When this is true, `selected` will be one segment object.
     */
    singleSelect?: boolean;
    /**
     * The segment that is or segments that are currently selected.
     */
    selected?: SegmentKey[] | SegmentKey | undefined;

    segment: Snippet<[SegmentKey]>;
  };
  let {
    use = [],
    class: className = '',
    segments = [],
    key = (segment) => segment as PrimitiveKey,
    singleSelect = false,
    selected = $bindable(),
    segment,
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  if (singleSelect && typeof selected === 'object' && 'findIndex' in selected) {
    throw new Error(
      'Single-select segmented buttons must not be given multiple selected segments.',
    );
  }

  if (
    !singleSelect &&
    selected !== undefined &&
    (typeof selected !== 'object' || !('findIndex' in selected))
  ) {
    throw new Error(
      'Multi-select segmented buttons must be given an array of selected segments.',
    );
  }

  let element: HTMLDivElement;
  let instance: MDCSegmentedButtonFoundation | undefined = $state();
  let segmentAccessorMap: Record<
    PrimitiveKey,
    SMUISegmentedButtonSegmentAccessor
  > = {};
  let segmentAccessorWeakMap = new WeakMap<
    Object,
    SMUISegmentedButtonSegmentAccessor
  >();
  let initialSelected = segments.map(
    (segmentId) =>
      (singleSelect &&
        selected != null &&
        key(selected as SegmentKey) === key(segmentId)) ||
      (!singleSelect &&
        selected != null &&
        (selected as SegmentKey[]).findIndex(
          (segment) => key(segment) === key(segmentId),
        ) !== -1),
  );

  setContext('SMUI:icon:context', 'segmented-button');
  setContext('SMUI:label:context', 'segmented-button');
  const singleSelectStore = writable(singleSelect);
  $effect(() => {
    $singleSelectStore = singleSelect;
  });
  setContext('SMUI:segmented-button:singleSelect', singleSelectStore);

  let previousSelected = singleSelect
    ? (selected as SegmentKey | undefined)
    : new Set((selected as SegmentKey[] | undefined) ?? []);
  $effect(() => {
    if (instance && singleSelect && previousSelected !== selected) {
      if (previousSelected != null) {
        instance.unselectSegment(
          segments.findIndex(
            (segment) => key(segment) === key(previousSelected as SegmentKey),
          ),
        );
      }
      previousSelected = selected as SegmentKey | undefined;
      if (selected != null) {
        instance.selectSegment(
          segments.findIndex(
            (segment) => key(segment) === key(selected as SegmentKey),
          ),
        );
      }
    }
  });
  $effect(() => {
    if (instance && !singleSelect) {
      const setSelected = new Set((selected as SegmentKey[] | undefined) ?? []);
      const unSelected = setDifference(
        previousSelected as Set<SegmentKey>,
        setSelected,
      );
      const newSelected = setDifference(
        setSelected,
        previousSelected as Set<SegmentKey>,
      );

      if (unSelected.size || newSelected.size) {
        previousSelected = setSelected;

        for (let segmentId of unSelected) {
          const idx = segments.findIndex(
            (segment) => key(segment) === key(segmentId),
          );
          if (idx !== -1) {
            instance.unselectSegment(idx);
          }
        }
        for (let segmentId of newSelected) {
          instance.selectSegment(
            segments.findIndex((segment) => key(segment) === key(segmentId)),
          );
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

  setContext(
    'SMUI:segmented-button:segment:mount',
    (accessor: SMUISegmentedButtonSegmentAccessor) => {
      addAccessor(accessor.segmentId, accessor);
    },
  );
  setContext(
    'SMUI:segmented-button:segment:unmount',
    (accessor: SMUISegmentedButtonSegmentAccessor) => {
      removeAccessor(accessor.segmentId);
    },
  );

  onMount(() => {
    instance = new MDCSegmentedButtonFoundation({
      hasClass: (className) => {
        return getElement().classList.contains(className);
      },
      getSegments: () => {
        return segments.map((segmentKey, index) => ({
          index,
          selected:
            selected == null
              ? false
              : singleSelect
                ? key(selected as SegmentKey) === key(segmentKey)
                : (selected as SegmentKey[]).findIndex(
                    (segment) => key(segment) === key(segmentKey),
                  ) !== -1,
          // segmentId: segmentKey, // Not necessarily a string.
        }));
      },
      selectSegment,
      unselectSegment,
      notifySelectedChange: (detail) => {
        if (detail.selected) {
          selectSegment(detail.index);
        } else {
          unselectSegment(detail.index);
        }

        dispatch(getElement(), 'change', detail);
      },
    });

    instance.init();

    return () => {
      instance?.destroy();
    };
  });

  function handleSelected(event: CustomEvent<SegmentDetail>) {
    if (instance) {
      instance.handleSelected(event.detail);
    }
  }

  function getAccessor(segmentId: any) {
    return segmentId instanceof Object
      ? segmentAccessorWeakMap.get(segmentId)
      : segmentAccessorMap[segmentId];
  }

  function addAccessor(
    segmentId: any,
    accessor: SMUISegmentedButtonSegmentAccessor,
  ) {
    if (segmentId instanceof Object) {
      segmentAccessorWeakMap.set(segmentId, accessor);
    } else {
      segmentAccessorMap[segmentId] = accessor;
    }
  }

  function removeAccessor(segmentId: any) {
    if (segmentId instanceof Object) {
      segmentAccessorWeakMap.delete(segmentId);
    } else {
      delete segmentAccessorMap[segmentId];
    }
  }

  function selectSegment(indexOrSegmentId: any) {
    let index = segments.findIndex(
      (segment) => key(segment) === indexOrSegmentId,
    );
    if (index === -1) {
      index = indexOrSegmentId;
    }
    const segmentKey = key(segments[index]);
    if (!singleSelect) {
      if (selected == null) {
        selected = [];
      }
      const selIndex = (selected as SegmentKey[]).findIndex(
        (segment) => key(segment) === segmentKey,
      );
      if (selIndex === -1) {
        (selected as SegmentKey[]).push(segments[index]);
      }
    } else if (selected == null || key(selected as SegmentKey) !== segmentKey) {
      selected = segments[index];
    }

    const accessor = getAccessor(segments[index]);
    if (accessor) {
      accessor.selected = true;
    }
  }

  function unselectSegment(indexOrSegmentId: any) {
    let index = segments.findIndex(
      (segment) => key(segment) === indexOrSegmentId,
    );
    if (index === -1) {
      index = indexOrSegmentId;
    }
    if (!singleSelect) {
      if (selected != null) {
        const selIndex = (selected as SegmentKey[]).findIndex(
          (segment) => key(segment) === key(segments[index]),
        );
        if (selIndex !== -1) {
          (selected as SegmentKey[]).splice(selIndex, 1);
        }
      }
    } else if (
      selected != null &&
      key(selected as SegmentKey) === key(segments[index])
    ) {
      selected = undefined;
    }

    const accessor = getAccessor(segments[index]);
    if (accessor) {
      accessor.selected = false;
    }
  }

  export function getElement() {
    return element;
  }
</script>
