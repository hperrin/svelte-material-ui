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
  on:SMUI:segmented-button:segment:mount={(event) => handleSegmentMount(event)}
  on:SMUI:segmented-button:segment:unmount={(event) =>
    handleSegmentUnmount(event)}
  on:selected={(event) => instance && instance.handleSelected(event.detail)}
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

<script>
  import { MDCSegmentedButtonFoundation } from '@material/segmented-button/segmented-button/foundation.js';
  import { onMount, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
  } from '@smui/common/internal';
  import ContextFragment from '@smui/common/ContextFragment.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let segments = [];
  export let key = (segment) => segment;
  export let singleSelect = false;
  export let selected = singleSelect ? null : [];

  let element;
  let instance;
  let segmentAccessorMap = {};
  let segmentAccessorWeakMap = new WeakMap();
  let initialSelected = segments.map(
    (segmentId) =>
      (singleSelect && selected === segmentId) ||
      (!singleSelect && selected.indexOf(segmentId) !== -1)
  );

  setContext('SMUI:icon:context', 'segmented-button');
  setContext('SMUI:label:context', 'segmented-button');
  setContext('SMUI:segmented-button:singleSelect', singleSelect);

  let previousSelected = singleSelect ? selected : new Set(selected);
  $: if (instance && singleSelect && previousSelected !== selected) {
    if (previousSelected != null) {
      instance.unselectSegment(previousSelected);
    }
    previousSelected = selected;
    instance.selectSegment(selected);
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

  function setDifference(setA, setB) {
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

  function handleSegmentMount(event) {
    const accessor = event.detail;

    addAccessor(accessor.segmentId, accessor);
  }

  function handleSegmentUnmount(event) {
    const accessor = event.detail;

    removeAccessor(accessor.segmentId);
  }

  function getAccessor(segmentId) {
    return segmentId instanceof Object
      ? segmentAccessorWeakMap.get(segmentId)
      : segmentAccessorMap[segmentId];
  }

  function addAccessor(segmentId, accessor) {
    if (segmentId instanceof Object) {
      segmentAccessorWeakMap.set(segmentId, accessor);
    } else {
      segmentAccessorMap[segmentId] = accessor;
    }
  }

  function removeAccessor(segmentId) {
    if (segmentId instanceof Object) {
      segmentAccessorWeakMap.delete(segmentId);
    } else {
      delete segmentAccessorMap[segmentId];
    }
  }

  function selectSegment(indexOrSegmentId) {
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

    getAccessor(segments[index]).selected = true;
  }

  function unselectSegment(indexOrSegmentId) {
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

    getAccessor(segments[index]).selected = false;
  }

  export function getElement() {
    return element;
  }
</script>
