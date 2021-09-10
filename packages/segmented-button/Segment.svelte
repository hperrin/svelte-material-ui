<button
  bind:this={element}
  use:Ripple={{
    ripple,
    unbounded: false,
    addClass,
    removeClass,
    addStyle,
  }}
  use:forwardEvents
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-segmented-button__segment': true,
    'mdc-segmented-button__segment--touch': touch,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  role={singleSelect ? 'radio' : null}
  aria-pressed={!singleSelect ? (selected ? 'true' : 'false') : null}
  aria-checked={singleSelect ? (selected ? 'true' : 'false') : null}
  on:click={(event) =>
    !event.defaultPrevented && instance && instance.handleClick()}
  {...internalAttrs}
  {...$$restProps}
  >{#if ripple}<div class="mdc-segmented-button__ripple" />{/if}<slot
  />{#if touch}<div class="mdc-segmented-button__segment__touch" />{/if}</button
>

<script>
  import { MDCSegmentedButtonSegmentFoundation } from '@material/segmented-button/segment/foundation.js';
  import { onMount, getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
  } from '@smui/common/internal';
  import Ripple from '@smui/ripple';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let style = '';
  let segmentId;
  export { segmentId as segment };
  export let ripple = true;
  export let touch = false;

  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  const initialSelectedStore = getContext(
    'SMUI:segmented-button:segment:initialSelected'
  );
  let selected = $initialSelectedStore;
  const singleSelect = getContext('SMUI:segmented-button:singleSelect');
  const index = getContext('SMUI:segmented-button:segment:index');

  if (!segmentId) {
    throw new Error(
      'The segment property is required! It should be passed down from the SegmentedButton to the Segment.'
    );
  }

  $: if (instance && instance.isSelected() && !selected) {
    instance.setUnselected();
  }

  $: if (instance && !instance.isSelected() && selected) {
    instance.setSelected();
  }

  onMount(() => {
    instance = new MDCSegmentedButtonSegmentFoundation({
      isSingleSelect: () => {
        return singleSelect;
      },
      getAttr,
      setAttr: addAttr,
      addClass,
      removeClass,
      hasClass,
      notifySelectedChange: (value) => {
        selected = value;

        dispatch(getElement(), 'selected', {
          index: $index,
          selected,
          segmentId,
        });
      },
      getRootBoundingClientRect: () => {
        return getElement().getBoundingClientRect();
      },
    });

    const accessor = {
      segmentId,
      get selected() {
        return selected;
      },
      set selected(value) {
        if (selected !== value) {
          selected = value;
        }
      },
    };

    dispatch(getElement(), 'SMUISegmentedButtonSegment:mount', accessor);

    instance.init();

    return () => {
      dispatch(getElement(), 'SMUISegmentedButtonSegment:unmount', accessor);

      instance.destroy();
    };
  });

  function hasClass(className) {
    return className in internalClasses
      ? internalClasses[className]
      : getElement().classList.contains(className);
  }

  function addClass(className) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  function getAttr(name) {
    return name in internalAttrs
      ? internalAttrs[name]
      : getElement().getAttribute(name);
  }

  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }

  export function getElement() {
    return element;
  }
</script>
