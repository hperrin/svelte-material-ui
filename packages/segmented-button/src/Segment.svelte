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
    'mdc-segmented-button__segment--selected': selected,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  role={singleSelect ? 'radio' : undefined}
  aria-pressed={!singleSelect ? (selected ? 'true' : 'false') : undefined}
  aria-checked={singleSelect ? (selected ? 'true' : 'false') : undefined}
  on:click={(event) =>
    !event.defaultPrevented &&
    instance &&
    !manualSelection &&
    instance.handleClick()}
  {...internalAttrs}
  {...$$restProps}
  >{#if ripple}<div class="mdc-segmented-button__ripple" />{/if}<slot
  />{#if touch}<div class="mdc-segmented-button__segment__touch" />{/if}</button
>

<script lang="ts">
  // TODO: Remove this when MDC's segmented button is fixed.
  // TODO: Also remove @material/base and @material/ripple from the package.json
  // @ts-ignore
  import { MDCSegmentedButtonSegmentFoundation } from './mdc-segmented-button/index.js';
  import { onMount, getContext } from 'svelte';
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
  import Ripple from '@smui/ripple';

  import type { SMUISegmentedButtonSegmentAccessor } from './Segment.types.js';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    style?: string;
    segment: any;
    ripple?: boolean;
    touch?: boolean;
    selected?: boolean;
  };
  type $$Props = OwnProps & SmuiAttrs<'button', keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());
  interface UninitializedValue extends Function {}
  let uninitializedValue: UninitializedValue = () => {};
  function isUninitializedValue(value: any): value is UninitializedValue {
    return value === uninitializedValue;
  }

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  let segmentId: any;
  export { segmentId as segment };
  export let ripple = true;
  export let touch = false;
  const initialSelectedStore = getContext<SvelteStore<boolean>>(
    'SMUI:segmented-button:segment:initialSelected'
  );

  // Some trickery to detect uninitialized values but also have the right types.
  /** You don't need to set this unless you are manually handling selection. */
  export let selected: boolean = uninitializedValue as unknown as boolean;
  let manualSelection: boolean = !isUninitializedValue(selected);
  if (isUninitializedValue(selected)) {
    selected = $initialSelectedStore;
  }
  // Done with the trickery.

  let element: HTMLButtonElement;
  let instance: MDCSegmentedButtonSegmentFoundation;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};
  let internalAttrs: { [k: string]: string | undefined } = {};
  const singleSelect = getContext<SvelteStore<boolean>>(
    'SMUI:segmented-button:singleSelect'
  );
  const index = getContext<SvelteStore<number>>(
    'SMUI:segmented-button:segment:index'
  );

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
        return $singleSelect;
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

    const accessor: SMUISegmentedButtonSegmentAccessor = {
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

  function hasClass(className: string) {
    return className in internalClasses
      ? internalClasses[className]
      : getElement().classList.contains(className);
  }

  function addClass(className: string) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className: string) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  function getAttr(name: string) {
    return name in internalAttrs
      ? internalAttrs[name] ?? null
      : getElement().getAttribute(name);
  }

  function addAttr(name: string, value: string) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function addStyle(name: string, value: string) {
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
