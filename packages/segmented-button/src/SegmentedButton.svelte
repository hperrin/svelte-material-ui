<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-segmented-button': true,
    'mdc-segmented-button--single-select': singleSelect,
  })}
  role={singleSelect ? 'radiogroup' : 'group'}
  on:SMUISegmentedButtonSegment:mount={handleSegmentMount}
  on:SMUISegmentedButtonSegment:unmount={handleSegmentUnmount}
  on:selected={handleSelected}
  {...$$restProps}
>
  {#each segments as segment, i (key(segment))}
    <ContextFragment key="SMUI:segmented-button:segment:index" value={i}>
      <ContextFragment
        key="SMUI:segmented-button:segment:initialSelected"
        value={initialSelected[i]}
      >
        <slot {segment} />
      </ContextFragment>
    </ContextFragment>
  {/each}
</div>

<script lang="ts">
  import type { SegmentDetail } from '@material/segmented-button';
  // TODO: Remove this when MDC's segmented button is fixed.
  // @ts-ignore
  import { MDCSegmentedButtonFoundation } from './mdc-segmented-button/index.js';
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
  } from '@smui/common/internal';
  import { ContextFragment } from '@smui/common';

  import type { SMUISegmentedButtonSegmentAccessor } from './Segment.types.js';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    segments?: any[];
    key?: (segment: any) => string | number;
    singleSelect?: boolean;
    selected?: any | any[];
  };
  type $$Props = OwnProps & SmuiAttrs<'div', keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let segments: any[] = [];
  export let key: (segment: any) => string | number = (segment) => segment;
  export let singleSelect = false;
  export let selected: any | any[] = singleSelect ? undefined : [];

  let element: HTMLDivElement;
  let instance: MDCSegmentedButtonFoundation;
  let segmentAccessorMap: {
    [k: string]: SMUISegmentedButtonSegmentAccessor;
    [k: number]: SMUISegmentedButtonSegmentAccessor;
  } = {};
  let segmentAccessorWeakMap = new WeakMap<
    Object,
    SMUISegmentedButtonSegmentAccessor
  >();
  let initialSelected = segments.map(
    (segmentId) =>
      (singleSelect && selected === segmentId) ||
      (!singleSelect && selected.indexOf(segmentId) !== -1)
  );

  setContext('SMUI:icon:context', 'segmented-button');
  setContext('SMUI:label:context', 'segmented-button');
  const singleSelectStore = writable(singleSelect);
  $: $singleSelectStore = singleSelect;
  setContext('SMUI:segmented-button:singleSelect', singleSelectStore);

  let previousSelected = singleSelect ? selected : new Set(selected);
  $: if (instance && singleSelect && previousSelected !== selected) {
    if (previousSelected != null) {
      instance.unselectSegment(previousSelected);
    }
    previousSelected = selected;
    if (selected != null) {
      instance.selectSegment(selected);
    }
  }
  $: if (instance && !singleSelect) {
    const setSelected = new Set(selected);
    const unSelected = setDifference(previousSelected, setSelected);
    const newSelected = setDifference(setSelected, previousSelected);

    if (unSelected.size || newSelected.size) {
      previousSelected = setSelected;

      for (let segmentId of unSelected) {
        const idx = segments.indexOf(segmentId);
        if (idx !== -1) {
          instance.unselectSegment(idx);
        }
      }
      for (let segmentId of newSelected) {
        instance.selectSegment(segments.indexOf(segmentId));
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
    instance = new MDCSegmentedButtonFoundation({
      hasClass: (className) => {
        return getElement().classList.contains(className);
      },
      getSegments: () => {
        return segments.map((segment, index) => ({
          index,
          selected: singleSelect
            ? selected === segment
            : selected.indexOf(segment) !== -1,
          // segmentId: segment, // Not necessarily a string.
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
      instance.destroy();
    };
  });

  function handleSegmentMount(
    event: CustomEvent<SMUISegmentedButtonSegmentAccessor>
  ) {
    const accessor = event.detail;

    addAccessor(accessor.segmentId, accessor);
  }

  function handleSegmentUnmount(
    event: CustomEvent<SMUISegmentedButtonSegmentAccessor>
  ) {
    const accessor = event.detail;

    removeAccessor(accessor.segmentId);
  }

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
    accessor: SMUISegmentedButtonSegmentAccessor
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
    let index = segments.indexOf(indexOrSegmentId);
    if (index === -1) {
      index = indexOrSegmentId;
    }
    if (!singleSelect) {
      const selIndex = selected.indexOf(segments[index]);
      if (selIndex === -1) {
        selected.push(segments[index]);
        selected = selected;
      }
    } else if (selected !== segments[index]) {
      selected = segments[index];
    }

    const accessor = getAccessor(segments[index]);
    if (accessor) {
      accessor.selected = true;
    }
  }

  function unselectSegment(indexOrSegmentId: any) {
    let index = segments.indexOf(indexOrSegmentId);
    if (index === -1) {
      index = indexOrSegmentId;
    }
    if (!singleSelect) {
      const selIndex = selected.indexOf(segments[index]);
      if (selIndex !== -1) {
        selected.splice(selIndex, 1);
        selected = selected;
      }
    } else if (selected === segments[index]) {
      selected = null;
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
