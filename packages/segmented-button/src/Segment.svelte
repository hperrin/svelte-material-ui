<svelte:options runes />

<button
  bind:this={element}
  use:Ripple={{
    ripple,
    unbounded: false,
    addClass,
    removeClass,
    addStyle,
  }}
  use:useActions={use}
  class={classMap({
    'mdc-segmented-button__segment': true,
    'mdc-segmented-button__segment--touch': touch,
    'mdc-segmented-button__segment--selected': selected,
    ...internalClasses,
    [className]: true,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  role={singleSelect ? 'radio' : undefined}
  aria-pressed={!singleSelect ? (selected ? 'true' : 'false') : undefined}
  aria-checked={singleSelect ? (selected ? 'true' : 'false') : undefined}
  {...internalAttrs}
  {...restProps}
  onclick={(e) => {
    restProps.onclick?.(e);
    if (!e.defaultPrevented && instance && !manualSelection) {
      instance.handleClick();
    }
  }}
  >{#if ripple}<div
      class="mdc-segmented-button__ripple"
    ></div>{/if}{@render children?.()}{#if touch}<div
      class="mdc-segmented-button__segment__touch"
    ></div>{/if}</button
>

<script lang="ts" generics="SegmentKey extends Object | string | number">
  import type { Snippet } from 'svelte';
  import { onMount, getContext } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions, dispatch } from '@smui/common/internal';
  import Ripple from '@smui/ripple';

  import { MDCSegmentedButtonSegmentFoundation } from './mdc';
  import type { SMUISegmentedButtonSegmentAccessor } from './Segment.types.js';

  interface UninitializedValue extends Function {}
  let uninitializedValue: UninitializedValue = () => {};
  function isUninitializedValue(value: any): value is UninitializedValue {
    return value === uninitializedValue;
  }

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
     * A list of CSS styles.
     */
    style?: string;
    /**
     * The segment object this segment is for.
     */
    segment: SegmentKey;
    /**
     * Whether to show a ripple animation.
     */
    ripple?: boolean;
    /**
     * Whether to use touch styling
     */
    touch?: boolean;
    /**
     * Whether this segment is selected.
     *
     * You don't need to set this unless you are manually handling selection.
     */
    selected?: boolean;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    style = '',
    segment: segmentId,
    ripple = true,
    touch = false,
    selected = $bindable(uninitializedValue as unknown as boolean),
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'button', keyof OwnProps> = $props();

  const initialSelectedStore = getContext<SvelteStore<boolean>>(
    'SMUI:segmented-button:segment:initialSelected',
  );
  // Some trickery to detect uninitialized values but also have the right types.
  let manualSelection: boolean = !isUninitializedValue(selected);
  if (isUninitializedValue(selected)) {
    selected = $initialSelectedStore;
  }
  // Done with the trickery.

  let element: HTMLButtonElement;
  let instance: MDCSegmentedButtonSegmentFoundation | undefined = $state();
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalStyles: { [k: string]: string } = $state({});
  let internalAttrs: { [k: string]: string | undefined } = $state({});
  const singleSelect = getContext<SvelteStore<boolean>>(
    'SMUI:segmented-button:singleSelect',
  );
  const index = getContext<SvelteStore<number>>(
    'SMUI:segmented-button:segment:index',
  );

  $effect(() => {
    if (instance && instance.isSelected() && !selected) {
      instance.setUnselected();
    }
  });

  $effect(() => {
    if (instance && !instance.isSelected() && selected) {
      instance.setSelected();
    }
  });

  const SMUISegmentedButtonSegmentMount = getContext<
    ((accessor: SMUISegmentedButtonSegmentAccessor) => void) | undefined
  >('SMUI:segmented-button:segment:mount');
  const SMUISegmentedButtonSegmentUnmount = getContext<
    ((accessor: SMUISegmentedButtonSegmentAccessor) => void) | undefined
  >('SMUI:segmented-button:segment:unmount');

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

    SMUISegmentedButtonSegmentMount &&
      SMUISegmentedButtonSegmentMount(accessor);

    instance.init();

    return () => {
      SMUISegmentedButtonSegmentUnmount &&
        SMUISegmentedButtonSegmentUnmount(accessor);

      instance?.destroy();
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
      ? (internalAttrs[name] ?? null)
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
      } else {
        internalStyles[name] = value;
      }
    }
  }

  export function getElement() {
    return element;
  }
</script>
